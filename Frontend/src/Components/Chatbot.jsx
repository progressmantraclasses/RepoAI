import { useState, useRef, useEffect } from "react";
import { Bot, X, Mic, PaperclipIcon, Send } from "lucide-react";
import axios from "axios";

// Replace with your actual API key
const API_KEY = "AIzaSyCsA7wL-Xusb21c8oS37CQ9FpwlSGtQf_k";

export default function HealthHubBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Get the help you need and ask anything from me ",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      // Enhanced prompt for more relevant responses
      const enhancedPrompt = `
        You are HealthHub Bot, a helpful assistant focused on providing information about 
        
        CONTEXT:
       
        
        USER QUERY: ${currentInput}
        
      `;

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: enhancedPrompt }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      const botReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm sorry, I couldn't process that request. Please try again.";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
          aria-label="Open chat"
        >
          <Bot size={50} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[500px] h-[700px] bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={24} className="text-white" />
              <h2 className="text-xl font-medium">HealthHub Assistant</h2>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Status and Title Section */}
          <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="bg-black/30 rounded-full px-4 py-1 mb-6 inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm">Online</span>
            </div>

            <h1 className="text-5xl text-red-400 font-bold mb-2">HealthHub AiBot</h1>
            <div className="w-40 h-1 bg-gradient-to-r from-green-400 to-green-300 rounded-full mb-4"></div>

            <p className="text-lg text-center text-gray-200 max-w-xs">
              Get the help you need with Your Health and medical advice 
            </p>

            <button
              className="mt-8 bg-black/30 hover:bg-black/40 transition-colors text-white rounded-full px-6 py-3 text-sm"
              onClick={() => {
                setInput("Tell me about onboarding flow");
                inputRef.current?.focus();
              }}
            >
              Ask anything about onboarding flow
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto px-4 py-2 mt-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl text-sm max-w-[80%] mb-3 ${
                  msg.sender === "user" ? "bg-purple-600 ml-auto" : "bg-black/30"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="bg-black/30 p-3 rounded-2xl text-sm max-w-[80%] mb-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/20 mt-auto">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask or search anything and press Enter"
                className="w-full bg-black/30 text-white placeholder-gray-400 rounded-full py-4 pl-4 pr-12 focus:outline-none"
              />
              <div className="absolute right-2 flex items-center space-x-2">
                <button onClick={sendMessage} className="text-gray-300 hover:text-white p-1" aria-label="Send message">
                  <Send size={20} className="text-green-400" />
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <button className="flex items-center gap-2 bg-black/30 hover:bg-black/40 transition-colors rounded-full px-4 py-2 text-sm">
                <PaperclipIcon size={16} />
                Add Media
              </button>
              <button className="flex items-center gap-2 bg-black/30 hover:bg-black/40 transition-colors rounded-full px-4 py-2 text-sm">
                <Mic size={16} />
                Voice Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

