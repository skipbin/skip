"use client";

import React, { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

interface FloatingRatingProps {
  onClose: () => void;
}

const FloatingRating: React.FC<FloatingRatingProps> = ({ onClose }) => {
  const [userRating, setUserRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => onClose(), 2000); // Auto-close after 2 seconds
    alert(`Thank you for rating us ${userRating} stars!`);
  };

  return (
    <div className="fixed bottom-20 left-6 bg-white shadow-2xl rounded-xl p-6 w-80 z-50 border border-gray-200">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
        <FaTimes size={18} />
      </button>

      {!submitted ? (
        <>
          {/* Header */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Rate Your Experience</h3>
          <p className="text-gray-500 mb-4">We value your feedback!</p>

          {/* 5-Star Rating Display */}
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer transition-colors duration-300 ${
                  index < userRating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRating(index + 1)}
                size={30}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={userRating === 0}
            className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
              userRating === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500 shadow-md"
            }`}
          >
            Submit Your Rating
          </button>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-600">Thank You! 😊</h3>
          <p className="text-gray-500">We appreciate your feedback.</p>
        </div>
      )}
    </div>
  );
};

export default FloatingRating;
