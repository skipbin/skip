"use client";

import React, { useState } from 'react';
import ChatButton from "../components/chatbutton";
import GetInstantQuote from "../components/QuoteModel";
import AboutUs from '@/components/Home/aboutus';
import Testimonials from '@/components/Home/testimonial';
import HeaderSection from '@/components/Home/headersec';
import ServicesSection from '@/components/Home/service';
import FloatingRating from '@/components/Home/rating';
import VideoSection from '@/components/Home/video';

// Type for Floating Word properties
type FloatingWord = {
  duration: number;
  size: number;
  top: number;
  left: number;
  delay: number;
};

// Floating Words Component
const FloatingWords = () => {
  const words = ['Eco-Friendly', 'Reliable', 'Fast Service', 'Affordable', 'Quality Assurance', 'Customer Support', 'Waste Management'];
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);

  React.useEffect(() => {
    const generatedWords = words.map(() => ({
      duration: Math.random() * 10 + 10,
      size: Math.random() * 20 + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFloatingWords(generatedWords);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {floatingWords.map((wordProps, index) => (
        <span
          key={index}
          className="absolute text-green-700 opacity-20 font-bold"
          style={{
            fontSize: `${wordProps.size}px`,
            top: `${wordProps.top}%`,
            left: `${wordProps.left}%`,
            animation: `float ${wordProps.duration}s linear infinite`,
            animationDelay: `${wordProps.delay}s`,
            color: 'rgba(255, 255, 255, 0.3)',
            textShadow: '0px 4px 8px rgba(0,0,0,0.5)'
          }}
        >
          {words[index % words.length]}
        </span>
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0.6; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRating, setShowRating] = useState(true);

  const videoData = [
    { title: "Video 1", url: "video1.mp4" },
    { title: "Video 2", url: "video2.mp4" }
  ];

  return (
    <div className="relative">
      {/* Floating Words */}
      <FloatingWords />

      {/* Header Section using the Component */}
      <HeaderSection onOpenModal={() => setIsModalOpen(true)} />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Video Section with Upload Option */}
      <VideoSection videos={videoData} />

      {/* Floating 5-Star Rating (Left Side) */}
      {showRating && <FloatingRating onClose={() => setShowRating(false)} />}

      {/* Chat Button */}
      <ChatButton />

      {/* Quote Modal */}
      <GetInstantQuote isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
