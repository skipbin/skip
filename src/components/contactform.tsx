"use client"
import { useState } from "react";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  // Add more countries as needed
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Contact information sent successfully!");
      setFormData({ name: "", email: "", phone: "", country: "" }); // Reset form fields
    } else {
      alert("Failed to send contact information.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      <label className="block mb-2">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Country</label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;