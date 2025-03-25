"use client";

import React, { useState, useEffect } from 'react';

interface VideoSectionProps {
  videos: { title: string; url: string }[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos }) => {
  const permanentVideos = [
    { title: "How to Book a Skip Bin", url: "/videos/video1.mp4" },
    { title: "Eco-Friendly Waste Management", url: "/videos/video2.mp4" },
    { title: "Skip Bins for Construction Sites", url: "/videos/video3.mp4" }
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % permanentVideos.length);
    }, 7000); // Change video every 7 seconds

    return () => clearInterval(interval);
  }, [permanentVideos.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-teal-800 mb-12 text-center">Experience Our Services in Action</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          See how our reliable and eco-friendly waste management solutions work. From booking a skip bin to understanding our sustainable practices, watch it all here.
        </p>

        {/* Video Display */}
        <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
          {permanentVideos.map((video, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <video src={video.url} controls className="w-full h-full rounded-xl" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">{video.title}</h3>
            </div>
          ))}
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-8">
          {permanentVideos.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-1 rounded-full ${index === activeVideoIndex ? 'bg-teal-800' : 'bg-gray-300'}`}
              onClick={() => setActiveVideoIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
