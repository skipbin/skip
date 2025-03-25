"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { loadStripe } from "@stripe/stripe-js";
import BinCard from "@/components/price/bincard";
import CustomerDetailsModal from "@/components/price/customerdetailmodel";
import PaymentSection from "@/components/price/paymentsection";
import { FaDumpster, FaTrashAlt, FaTruck } from "react-icons/fa";

// Ensure Stripe public key is defined
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// Define the Bin type
type Bin = {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: string;
  weight: string;
  rental: string;
  icon: React.ReactElement;
};

// Define the CustomerDetails type for better type safety
type CustomerDetails = {
  wasteType: string;
  address: string;
  date: string;
  time: string;
};

// Array of bins
const bins: Bin[] = [
  { id: "mini-2m3", name: "Mini Bin 2m³", price: 30, description: "For small cleanups.", capacity: "2m³", weight: "Approx. 3 level 6x4 Trailer loads", rental: "8", icon: <FaTrashAlt className="text-4xl text-blue-400" /> },
  { id: "mini-3m3", name: "Mini Bin 3m³", price: 40, description: "For small cleanups, Wheelbarrow access.", capacity: "3m³", weight: "Approx. 4 level 6x4 Trailer loads", rental: "12", icon: <FaTrashAlt className="text-4xl text-blue-400" /> },
  { id: "mini-4m3", name: "Mini Bin 4m³", price: 50, description: "For small renovations such as kitchen & small cleanups, Wheelbarrow access.", capacity: "4m³", weight: "Approx. 5.5 level 6x4 Trailer loads", rental: "16", icon: <FaTrashAlt className="text-4xl text-blue-400" /> },
  { id: "medium-6m3", name: "Medium Bin 6m³", price: 60, description: "For small renovations or large cleanups, Wheelbarrow access.", capacity: "6m³", weight: "Approx. 8.5 level 6x4 Trailer loads", rental: "24", icon: <FaDumpster className="text-4xl text-green-400" /> },
  { id: "medium-7m3", name: "Medium Bin 7m³", price: 70, description: "For medium renovations or large cleanups, Wheelbarrow access.", capacity: "7m³", weight: "Approx. 10 level 6x4 Trailer loads", rental: "28", icon: <FaDumpster className="text-4xl text-green-400" /> },
  { id: "medium-8m3", name: "Medium Bin 8m³", price: 80, description: "For medium renovations or large cleanups, Wheelbarrow access.", capacity: "8m³", weight: "Approx. 11 level 6x4 Trailer loads", rental: "32", icon: <FaDumpster className="text-4xl text-green-400" /> },
  { id: "large-9m3", name: "Large Bin 9m³", price: 90, description: "For large renovations or heavy waste, Wheelbarrow access.", capacity: "9m³", weight: "Approx. 13 level 6x4 Trailer loads", rental: "36", icon: <FaTruck className="text-4xl text-red-400" /> },
  { id: "large-11m3", name: "Large Bin 11m³", price: 110, description: "For large renovations or heavy waste, Wheelbarrow access.", capacity: "11m³", weight: "Approx. 15.5 level 6x4 Trailer loads", rental: "44", icon: <FaTruck className="text-4xl text-red-400" /> },
  { id: "large-15m3", name: "Large Bin 15m³", price: 150, description: "For large renovations or heavy waste, Wheelbarrow access.", capacity: "15m³", weight: "Approx. 21 level 6x4 Trailer loads", rental: "60", icon: <FaTruck className="text-4xl text-red-400" /> },
  { id: "large-30m3", name: "Large Bin 30m³", price: 300, description: "For large renovations or heavy waste, Wheelbarrow access.", capacity: "30m³", weight: "Approx. 43 level 6x4 Trailer loads", rental: "120", icon: <FaTruck className="text-4xl text-red-400" /> },
];

export default function PricingPage() {
  const [selectedBin, setSelectedBin] = useState<Bin>(bins[1]);
  const [showModal, setShowModal] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    wasteType: "",
    address: "",
    date: "",
    time: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = () => setShowModal(true);

  const handleSubmitDetails = () => {
    if (!customerDetails.wasteType || !customerDetails.address || !customerDetails.date || !customerDetails.time) {
      setErrorMessage("⚠️ All fields are required before proceeding.");
      return;
    }
    setErrorMessage("");
    setShowModal(false);
    setShowPayment(true);
  };

  return (
    <main className="max-w-6xl mx-auto p-8 text-white text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl">
      <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">Choose Your Skip Bin</h1>
      <p className="text-gray-300 mb-8 text-lg">Select the right bin for your waste disposal needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {bins.map((bin) => (
          <BinCard
            key={bin.id}
            bin={bin}
            selectedBin={selectedBin}
            setSelectedBin={setSelectedBin as Dispatch<SetStateAction<Bin>>}
            setShowPayment={setShowPayment}
          />
        ))}
      </div>
      {!showPayment && (
        <button onClick={handlePayment} className="bg-yellow-500 px-8 py-3 text-lg rounded-lg">
          Pay Now (${selectedBin.price})
        </button>
      )}
      {showModal && (
        <CustomerDetailsModal
          customerDetails={customerDetails}
          setCustomerDetails={setCustomerDetails}
          setShowModal={setShowModal}
          handleSubmitDetails={handleSubmitDetails}
          errorMessage={errorMessage}
        />
      )}
      {showPayment && (
        <PaymentSection
          stripePromise={stripePromise}
          selectedBin={selectedBin}
          customerDetails={customerDetails}
        />
      )}
    </main>
  );
}
