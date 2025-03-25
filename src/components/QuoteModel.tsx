"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

interface GetInstantQuoteProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInstantQuote: React.FC<GetInstantQuoteProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      onClose();
      router.push("/pricing");
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>

        {submitted ? (
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <p className="text-green-600 font-semibold text-lg">Thank you! Your request has been submitted.</p>
            <p className="text-gray-600 mt-2">Redirecting to Pricing in a few seconds...</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get Your Free Instant Quote</h2>
            <p className="text-gray-500 mb-6 text-center">Fill in the form below and we will contact you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Additional Message (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-gray-300 border rounded-lg p-3 h-24 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition duration-300"
              >
                Get Instant Quote
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GetInstantQuote;
