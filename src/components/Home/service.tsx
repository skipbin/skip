"use client";

import React from 'react';
import { Home, Hammer, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Residential Skip Bins",
    description: "Our residential skip bins are perfect for household waste disposal. Whether you're renovating your home, clearing out clutter, or landscaping your garden, we have the right bin size for your needs. Our team ensures timely delivery and pickup for a hassle-free experience. We also offer expert guidance on waste segregation to promote eco-friendly disposal practices.",
    icon: <Home size={48} className="text-teal-600" />
  },
  {
    title: "Construction Waste Bins",
    description: "Manage construction waste efficiently with our durable bins. Designed for builders, contractors, and demolition sites, our construction waste bins can handle debris, concrete, timber, and other materials. Enjoy reliable service with flexible rental periods and prompt pickups. Our team is equipped to ensure compliance with local regulations, reducing your environmental impact.",
    icon: <Hammer size={48} className="text-teal-600" />
  },
  {
    title: "Commercial Waste Bins",
    description: "Keep your commercial premises clean and organized with our skip bins. Suitable for offices, retail stores, and industrial spaces, our commercial waste bins provide a practical waste management solution. We offer customizable pickup schedules to suit your business needs. Our services also include recycling options to minimize landfill contributions and support sustainability goals.",
    icon: <Briefcase size={48} className="text-teal-600" />
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 text-center bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-teal-800 mb-12">Our Skip Bin Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Whether you're cleaning out your home, managing a construction site, or running a business, our skip bin services provide an eco-friendly and convenient waste management solution. Choose from a variety of sizes and flexible rental options to fit your needs. Our commitment to sustainable waste management ensures proper disposal and recycling wherever possible.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-teal-50 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;