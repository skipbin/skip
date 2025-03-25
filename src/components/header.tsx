"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Bins", path: "/bins" },
    { name: "Blogs", path: "/blogs" },
    { name: "Waste Types", path: "/wastetypes" },
    { name: "FAQs", path: "/FAQS" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Skip-Bins Logo" width={50} height={50} />
        <span className="text-2xl text-green-600 font-bold">Skip-Bins</span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`font-semibold transition-colors duration-300 ${
              pathname === link.path
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-64">
        <input
          type="text"
          placeholder="Type and hit enter..."
          className="flex-grow outline-none"
        />
        <FaSearch className="text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
