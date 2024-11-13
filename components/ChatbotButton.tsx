// components/ChatbotButton.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { generateContent } from "@/lib/geminiProxy";

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<{ text: string; isUser: boolean }[]>([]);
  const [error, setError] = useState("");

  const faqData = [
    { question: "How do I make a transaction?", answer: "To make a transaction, go to the 'Transfer Funds' section, select the bank account, enter the recipient details, and confirm the amount to complete the transfer." },
    { question: "How can I link multiple bank accounts?", answer: "YES, To link multiple bank accounts, navigate to 'Connect Bank' and fill out the details to add your bank accounts securely." },
    { question: "What are the benefits of using FinSync?", answer: "FinSync helps you connect and manage all your bank accounts, track expenses, apply for loans, Spin Wheel to get discount vouchers, and manage transactions in one unified platform." },
    { question: "How do I apply for a loan?", answer: "You can apply for a loan by going to the 'Loan' section, choosing your loan type, and filling out the required information. Once submitted, our team will process your application." },
    { question: "Is my data secure on FinSync?", answer: "Yes, FinSync uses advanced encryption to ensure your data is secure and protected. We follow industry standards for data privacy and security." },
  ];

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, isUser: true };
    setChatHistory((prev) => [...prev, newMessage]);
    setInput("");
    setError("");

    const faqResponse = faqData.find((faq) => faq.question.toLowerCase() === input.toLowerCase());
    if (faqResponse) {
      setChatHistory((prev) => [...prev, { text: faqResponse.answer, isUser: false }]);
      return;
    }

    try {
      const aiResponse = await generateContent(input);
      setChatHistory((prev) => [...prev, { text: aiResponse, isUser: false }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setError("There was an error reaching the AI service. Please try again later.");
    }
  };

  const handleFAQClick = (question: string) => {
    setInput(question);
  };

  const handleClearChat = () => {
    setChatHistory([]);
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 bg-blue-600 p-3 rounded-full shadow-lg z-50"
      >
        <Image src="/icons/chatbot.svg" alt="Chatbot Icon" width={24} height={24} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-16 right-4 bg-white w-80 max-h-[70vh] border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col"
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold">AI Chatbot</h2>
            <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">×</button>
          </div>

          <div className="p-4 border-b overflow-y-auto">
            <h3 className="text-sm font-semibold mb-2">Ask a question or select from common FAQs:</h3>
            {faqData.map((faq, index) => (
              <button
                key={index}
                onClick={() => handleFAQClick(faq.question)}
                className="block text-left text-blue-600 hover:underline mb-1 text-sm"
              >
                {faq.question}
              </button>
            ))}
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-lg ${message.isUser ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {error && <div className="p-2 text-red-600 text-sm">{error}</div>}

          <div className="p-4 border-t flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded p-2 text-sm"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>

          <button
            onClick={handleClearChat}
            className="text-blue-500 text-sm text-center py-2 hover:underline"
          >
            Clear Chat
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ChatbotButton;
