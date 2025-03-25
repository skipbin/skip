import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Skip-Bins made my home renovation so much easier! Quick delivery and affordable pricing.",
      author: "Sarah M.",
      image: "https://cdn.pixabay.com/photo/2022/03/17/06/08/letter-s-7073833_960_720.png",
      rating: 5,
    },
    {
      text: "Best skip bin service I've used. Friendly staff and great customer service.",
      author: "James R.",
      image: "https://seekicon.com/free-icon-download/circle-letter-j_1.svg",
      rating: 4,
    },
    {
      text: "Highly recommend Skip-Bins for their punctuality and hassle-free service.",
      author: "Linda W.",
      image: "https://cdn-icons-png.flaticon.com/512/9104/9104095.png",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { text, author, image, rating } = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>

      <div className="h-80 flex flex-col justify-center items-center p-6 relative">
        <FaQuoteLeft className="text-teal-400 text-5xl mb-4" />
        
        {/* Testimonial Text and Author */}
        <p className="text-gray-600 italic max-w-xl transition-opacity duration-1000">
          "{text}"
        </p>

        {/* Profile Image and Name */}
        <div className="flex items-center mt-6">
          <img
            src={image}
            alt={author}
            className="w-16 h-16 rounded-full border-4 border-teal-400 object-cover shadow-md"
          />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">- {author}</h4>
            <div className="flex mt-1">
              {[...Array(rating)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
