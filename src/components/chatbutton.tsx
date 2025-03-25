"use client";

import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSupportClick = () => {
    alert("Connecting to a support agent... (Chat feature can be integrated here)");
  };

  const handleBookClick = () => {
    router.push("/pricing"); // Navigate to Contact Us for booking
  };

  const handleInquiryClick = () => {
    router.push("/contact"); // Navigate to Pricing page
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 p-6 bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">👋 Welcome to Skip Bins!</h1>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-600 mb-4">Our team is ready to assist you. How can we help you today?</p>

          {/* Avatar Section */}
          <div className="flex justify-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Support 1"
              className="w-12 h-12 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt="Support 2"
              className="w-12 h-12 rounded-full border-2 border-white -ml-2"
            />
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="Support 3"
              className="w-12 h-12 rounded-full border-2 border-white -ml-2"
            />
          </div>

          {/* Buttons */}
          <button
            onClick={handleSupportClick}
            className="w-full bg-green-200 text-green-800 font-semibold py-2 mb-2 rounded-lg hover:bg-green-300 transition"
          >
            Chat with Support
          </button>
          <button
            onClick={handleBookClick}
            className="w-full bg-green-200 text-green-800 font-semibold py-2 mb-2 rounded-lg hover:bg-green-300 transition"
          >
            I want to book a Skip Bin
          </button>
          <button
            onClick={handleInquiryClick}
            className="w-full bg-green-200 text-green-800 font-semibold py-2 rounded-lg hover:bg-green-300 transition"
          >
            Other Inquiries
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveChat;

