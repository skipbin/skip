"use client";

import { ChangeEvent } from "react";

interface CustomerDetailsFormProps {
  customerDetails: Record<string, string>;
  setCustomerDetails: (details: Record<string, string>) => void;
  errorMessage?: string;
}

export default function CustomerDetailsForm({ customerDetails, setCustomerDetails, errorMessage }: CustomerDetailsFormProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const getInputType = (key: string) => {
    switch (key) {
      case "email":
        return "email";
      case "date":
        return "date";
      case "time":
        return "time";
      default:
        return "text";
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Enter Your Details</h2>
      {errorMessage && <p className="text-red-500 mb-4">⚠️ {errorMessage}</p>}

      {/* Customer Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
        <input
          id="name"
          className="w-full p-3 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none bg-gray-700 text-white"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={customerDetails.name || ""}
          onChange={handleChange}
        />
      </div>

      {/* Waste Type Dropdown */}
      <div className="mb-4">
        <label htmlFor="wasteType" className="block text-gray-300 font-semibold mb-2">Waste Type</label>
        <select
          id="wasteType"
          className="w-full p-3 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none bg-gray-700 text-white"
          name="wasteType"
          value={customerDetails.wasteType || ""}
          onChange={handleChange}
        >
          <option value="">Select Waste Type</option>
          <option value="general">General Waste</option>
          <option value="green">Green Waste</option>
          <option value="construction">Construction Waste</option>
          <option value="electronic">Electronic Waste</option>
        </select>
      </div>

      {/* Other Inputs */}
      {Object.keys(customerDetails).filter((key) => key !== 'name' && key !== 'wasteType').map((key) => (
        <div key={key} className="mb-4">
          <label htmlFor={key} className="block text-gray-300 font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            id={key}
            className="w-full p-3 rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none bg-gray-700 text-white"
            type={getInputType(key)}
            name={key}
            placeholder={`Enter your ${key}`}
            value={customerDetails[key]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}
