"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "What is Skip Bin hire?", answer: "Skip Bin hire allows you to rent large waste disposal bins for household, construction, and business waste removal. We deliver the bin to your location, and you fill it with waste, which we then collect and dispose of responsibly." },
  { question: "What types of waste can I put in a skip bin?", answer: "You can dispose of general waste, green waste, construction waste, and recyclables. However, hazardous materials such as asbestos, batteries, chemicals, and flammable liquids are strictly prohibited." },
  { question: "How do I choose the right skip bin size?", answer: "We offer a range of bin sizes, from 2m³ (small) to 10m³ (large). If you're unsure, our team can recommend the right size based on your waste type and volume." },
  { question: "How long can I keep the skip bin?", answer: "Our standard hire period is typically 7 days. If you need the bin for a longer period, contact us for an extension." },
  { question: "Do I need a permit for a skip bin?", answer: "If you plan to place the bin on public property such as a road or footpath, you may require a permit. We can assist you in arranging the necessary permits if needed." },
  { question: "What happens to the waste once it's collected?", answer: "We sort and recycle as much waste as possible to reduce landfill. Our waste management facilities ensure environmentally responsible disposal." },
  { question: "Can I move the skip bin once it has been placed?", answer: "No, skip bins must remain in their original position to ensure safety and proper collection. If you need it relocated, contact us for assistance." },
  { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit cards, bank transfers, and online payments for your convenience." },
  { question: "What if my skip bin is overloaded?", answer: "Overloading a skip bin is unsafe and may result in additional charges. Ensure waste does not exceed the top rim of the bin." },
  { question: "Can I order multiple skip bins?", answer: "Yes, if you have a large amount of waste, you can order multiple bins. Contact us for bulk pricing and recommendations." },
  { question: "Is same-day delivery available?", answer: "Same-day delivery is available depending on availability. We recommend booking in advance to secure your desired delivery time." },
  { question: "Do you offer commercial waste solutions?", answer: "Yes, we provide tailored waste management solutions for businesses, construction sites, and industrial projects." },
  { question: "How can I contact customer support?", answer: "You can reach our customer support team via phone, email, or our website contact form. We're here to help!" },
];

const floatingWords = ["Eco-friendly", "Waste Management", "Recycling", "Clean Environment", "Sustainability"];

export default function FAQS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1c36] to-[#123456] text-white flex flex-col py-16 px-4 relative overflow-hidden">
      {/* Floating Words */}
      {floatingWords.map((word, index) => (
        <span
          key={index}
          className={`absolute text-gray-400 text-5xl font-bold opacity-10 animate-float delay-${index * 2}`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
        >
          {word}
        </span>
      ))}

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 z-10">
        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Questions & Answers</h2>
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full p-3 mb-6 rounded-lg text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-600 mb-4">
                <button
                  className="w-full text-left py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span>{openIndex === index ? "▼" : "▶"}</span>
                </button>
                {openIndex === index && (
                  <p className="text-gray-400 mb-4">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p>No questions found matching your search.</p>
          )}
        </div>
      </section>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
