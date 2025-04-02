from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from pydantic import BaseModel
import pickle
from datetime import datetime, timedelta
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain_community.llms import Ollama
from langchain_community.vectorstores import FAISS
from langchain_nomic import NomicEmbeddings
from serpapi import GoogleSearch
from langchain.text_splitter import CharacterTextSplitter
import nomic
from langchain_community.document_loaders import PDFPlumberLoader
from PyPDF2 import PdfReader
from sklearnex import patch_sklearn
import os
import requests
from io import BytesIO

patch_sklearn()

# Download models from GitHub
def download_model(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return BytesIO(response.content)
    except Exception as e:
        raise RuntimeError(f"Error downloading model: {str(e)}")

# Initialize Nomic
nomic.cli.login("nk-EElA3D-5NAXHjcM-xNSlLEl1IXOYbs5HRN-B4XF7iVc")

# Download and load models
model1_url = "https://github.com/Honey22205/Intel_AQI/raw/main/model.pkl"
model2_url = "https://github.com/Honey22205/Intel_AQI/raw/main/station.pkl"

model1_file = download_model(model1_url)
model2_file = download_model(model2_url)

model_1 = pickle.load(model1_file)
model_2 = pickle.load(model2_file)

# Your city list
cities = [
    "Ahmedabad", "Aizawl", "Amaravati", "Amritsar", "Bengaluru", "Bhopal", "Brajrajnagar",
    "Chandigarh", "Chennai", "Coimbatore", "Delhi", "Ernakulam", "Gurugram", "Guwahati",
    "Hyderabad", "Jaipur", "Jorapokhar", "Kochi", "Kolkata", "Lucknow", "Mumbai", "Patna",
    "Shillong", "Talcher", "Thiruvananthapuram", "Visakhapatnam"
]

# One-hot encoding function for cities
def encode_city(city_name):
    encoding = [0] * len(cities)
    if city_name in cities:
        encoding[cities.index(city_name)] = 1
    return encoding

# Helper function to check if the day is a weekend
def is_weekend(date):
    return date.weekday() >= 5

# Data models for AQI prediction and chatbot messages
class InputDataModel1(BaseModel):
    city: str
    year: int
    month: int
    day: int
    hour: int
    dayOfWeek: int
    isWeekend: int

class InputDataModel2(BaseModel):
    station_name: str  
    year: int
    month: int
    day: int
    hour: int
    dayOfWeek: int
    isWeekend: int

class ChatMessage(BaseModel):
    message: str

class DateRangeModel(BaseModel):
    city: str
    fromDate: str  # YYYY-MM-DD format
    toDate: str    # YYYY-MM-DD format

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# AQI Prediction Endpoint
@app.post("/predict")
async def predict_model_1(data: InputDataModel1):
    print(data)
    city_encoding = encode_city(data.city)
    print(city_encoding)
    input_values = city_encoding + [data.year, data.month, data.day, data.hour, data.dayOfWeek, data.isWeekend]
    input_array = np.array(input_values).astype("float32").reshape(1, -1)
    prediction = model_1.predict(input_array)
    print(prediction)
    return {
        "aqi": int(prediction[0][12]), 
        "molecules": [int(value) for value in prediction[0][:12]]
    }

# AQI Prediction over a date range
@app.post("/predict-date-range")
async def predict_over_date_range(data: DateRangeModel):
    try:
        from_date = datetime.strptime(data.fromDate, "%Y-%m-%d")
        to_date = datetime.strptime(data.toDate, "%Y-%m-%d")
        city_encoding = encode_city(data.city)

        if not city_encoding:
            raise HTTPException(status_code=400, detail="Invalid city")

        predictions = []
        current_date = from_date
        while current_date <= to_date:
            for hour in range(24):
                day_of_week = current_date.weekday()
                weekend = 1 if is_weekend(current_date) else 0

                input_values = city_encoding + [
                    current_date.year,
                    current_date.month,
                    current_date.day,
                    hour,
                    day_of_week,
                    weekend
                ]
                input_array = np.array(input_values).astype("float32").reshape(1, -1)

                prediction = model_1.predict(input_array)
                predictions.append({
                    "datetime": current_date.strftime(f"%Y-%m-%d {hour}:00"),
                    "aqi": int(prediction[0][12]),
                    "molecules": [int(value) for value in prediction[0][:12]]
                })

            current_date += timedelta(days=1)

        return {"city": data.city, "predictions": predictions}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Station list and function to get station index
stations = [
    # [Your full station list here...]
    # (Include the complete station list from your original code)
]

def get_station_index(stations, station_name):
    for station_list in stations:
        for station in station_list:
            if station['StationName'] == station_name:
                return station["Unnamed: 0"]
    return None

# AQI Prediction Endpoint (updated)
@app.post("/predict-new")
async def predict_model_2(data: InputDataModel2):
    station_index = get_station_index(stations, data.station_name)
    
    if station_index is None:
        raise HTTPException(status_code=404, detail="Station not found")
    
    input_values = [station_index, data.year, data.month, data.day, data.hour, data.dayOfWeek, data.isWeekend]
    input_array = np.array(input_values).astype("float32").reshape(1, -1)
    
    prediction = model_2.predict(input_array)
    aqi_value = int(prediction[0][4])+3.6
    molecules = [int(value) for value in prediction[0][:12]]
    
    response_data = {"aqi": aqi_value, "molecules": molecules}
    
    if aqi_value < 100: 
        prompt = f"Given the following molecule values: {molecules}, list industries like steel industry that could be responsible for the high AQI values and way to reduce them, give me answer of points exactly what I ask for."
        print(prompt) 
        model = Ollama(model="llama3.1")
        llm_response = model.invoke(prompt)
        response_data["top_industries"] = [llm_response]
    else:
        response_data["top_industries"] = ["Air quality is within acceptable limits."]
    
    print(response_data)
    return response_data

# Chatbot setup functions
def get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks

def get_vectorstore(text_chunks):
    embeddings = NomicEmbeddings(model="nomic-embed-text-v1.5")
    vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    return vectorstore

def get_conversation_chain(vectorstore):
    memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)
    model = Ollama(model="llama3.1")
    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm=model,
        retriever=vectorstore.as_retriever(),
        memory=memory
    )
    return conversation_chain

def get_pdf_text(pdf_path):
    text = ""
    pdf_reader = PdfReader(pdf_path)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text



# Initialize chatbot components
# Original URL: pdf_url = "https://github.com/Honey22205/Intel_AQI/blob/main/chatbot.pdf"
# Changed URL to get the raw PDF file instead of the webpage showing the file
pdf_url = "https://github.com/Honey22205/Intel_AQI/raw/main/chatbot.pdf"  
pdf_file = download_model(pdf_url)
docs = get_pdf_text(pdf_file)
text_chunks = get_text_chunks(docs)
vectorstore = get_vectorstore(text_chunks)
conversation_chain = get_conversation_chain(vectorstore)


    # ... (rest of your code)

# Chatbot endpoint
@app.post("/chatbot")
async def chatbot(data: ChatMessage):
    user_input = data.message
    response = conversation_chain(user_input + " be concise with your answers, it should not exceed more than 100 unique words")
    print(response)
    return {"response": response['answer']}

# Instead of running uvicorn directly, define a function
def run_app():
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
try:
    from IPython import get_ipython
    in_ipython = True
except ImportError:
    in_ipython = False

if __name__ == "__main__" and not in_ipython:
    # your code here
     run_app()
