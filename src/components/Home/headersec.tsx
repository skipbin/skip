"use client";

import React, { useState, useEffect } from 'react';

interface HeaderSectionProps {
  onOpenModal: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onOpenModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <header className="relative bg-teal-600 text-white py-24 text-center overflow-hidden h-[500px] md:h-[600px]">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 absolute ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Fallback Overlay for Background Color */}
        <div className="absolute inset-0 bg-teal-900 bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-extrabold mb-6">Fast, Reliable Skip Bin Hire</h1>
        <p className="text-lg mb-8">The perfect bins for all your waste removal needs.</p>
        <button
          onClick={onOpenModal}
          className="bg-indigo-600 text-white px-8 py-4 font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
        >
          Get Instant Quote
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
