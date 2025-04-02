from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
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
import json

patch_sklearn()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

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
pdf_url = "https://github.com/Honey22205/Intel_AQI/raw/main/chatbot.pdf"  
pdf_file = download_model(pdf_url)
docs = get_pdf_text(pdf_file)
text_chunks = get_text_chunks(docs)
vectorstore = get_vectorstore(text_chunks)
conversation_chain = get_conversation_chain(vectorstore)

# AQI Prediction Endpoint
@app.route('/predict', methods=['POST'])
def predict_model_1():
    data = request.get_json()
    city = data.get('city')
    year = data.get('year')
    month = data.get('month')
    day = data.get('day')
    hour = data.get('hour')
    dayOfWeek = data.get('dayOfWeek')
    isWeekend = data.get('isWeekend')
    
    city_encoding = encode_city(city)
    input_values = city_encoding + [year, month, day, hour, dayOfWeek, isWeekend]
    input_array = np.array(input_values).astype("float32").reshape(1, -1)
    prediction = model_1.predict(input_array)
    
    return jsonify({
        "aqi": int(prediction[0][12]), 
        "molecules": [int(value) for value in prediction[0][:12]]
    })

# AQI Prediction over a date range
@app.route('/predict-date-range', methods=['POST'])
def predict_over_date_range():
    try:
        data = request.get_json()
        city = data.get('city')
        from_date_str = data.get('fromDate')
        to_date_str = data.get('toDate')
        
        from_date = datetime.strptime(from_date_str, "%Y-%m-%d")
        to_date = datetime.strptime(to_date_str, "%Y-%m-%d")
        city_encoding = encode_city(city)

        if not any(city_encoding):
            return jsonify({"error": "Invalid city"}), 400

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

        return jsonify({"city": city, "predictions": predictions})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# AQI Prediction Endpoint (updated)
@app.route('/predict-new', methods=['POST'])
def predict_model_2():
    data = request.get_json()
    station_name = data.get('station_name')
    year = data.get('year')
    month = data.get('month')
    day = data.get('day')
    hour = data.get('hour')
    dayOfWeek = data.get('dayOfWeek')
    isWeekend = data.get('isWeekend')
    
    station_index = get_station_index(stations, station_name)
    
    if station_index is None:
        return jsonify({"error": "Station not found"}), 404
    
    input_values = [station_index, year, month, day, hour, dayOfWeek, isWeekend]
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
    return jsonify(response_data)

# Chatbot endpoint
@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_input = data.get('message')
    response = conversation_chain(user_input + " be concise with your answers, it should not exceed more than 100 unique words")
    print(response)
    return jsonify({"response": response['answer']})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
