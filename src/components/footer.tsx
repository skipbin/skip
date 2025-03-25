"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleBookNow = () => {
    router.push("/contact");
  };

  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info with Logo */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.png" alt="Skip Bins Logo" width={50} height={50} />
            <h3 className="text-3xl font-bold text-green-600 ml-3">Skip Bins</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Reliable and eco-friendly waste management solutions. We offer a variety of skip bin sizes for residential, commercial, and industrial use. Book a bin today!
          </p>
          <p className="text-gray-500">© {new Date().getFullYear()} Skip Bins. All Rights Reserved.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-xl mb-4">USEFUL LINKS</h4>
          <ul className="space-y-3 text-gray-700">
            {["Home", "About Us", "Services", "Pricing", "Contact Us"].map((link, index) => (
              <li key={index}>
                <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-green-600 flex items-center">
                  <span className="mr-2">➜</span> {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="mt-8">
            <h4 className="font-semibold text-xl mb-4 text-center">FOLLOW US</h4>
            <div className="flex justify-center space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 hover:opacity-80 text-2xl" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-sky-400 hover:opacity-80 text-2xl" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:opacity-80 text-2xl" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700 hover:opacity-80 text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter and Book Now */}
        <div>
          <h4 className="font-semibold text-xl mb-4">GET LATEST UPDATES</h4>
          <p className="text-gray-600 mb-4">
            Subscribe to receive updates, promotions, and special offers on our skip bin services.
          </p>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          />
          <button 
            onClick={handleBookNow} 
            className="w-full bg-green-400 text-white py-3 rounded hover:bg-green-300 transition duration-300">
            BOOK NOW
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
