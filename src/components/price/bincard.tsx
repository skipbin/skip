import { motion } from "framer-motion";
import React from "react";

interface Bin {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: string;
  weight: string;
  rental: string;
  icon: React.ReactNode;
}

interface BinCardProps {
  bin: Bin;
  selectedBin: Bin;
  setSelectedBin: (bin: Bin) => void;
  setShowPayment: (value: boolean) => void;
}

const BinCard: React.FC<BinCardProps> = ({ bin, selectedBin, setSelectedBin, setShowPayment }) => {
  return (
    <motion.button
      key={bin.id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setSelectedBin(bin);
        setShowPayment(false);
      }}
      className={`p-6 rounded-lg border-2 shadow-lg transition duration-300 ${
        selectedBin.id === bin.id ? "border-yellow-500 bg-yellow-800" : "border-gray-600 bg-gray-800"
      }`}
    >
      <div className="mb-3 flex justify-center">{bin.icon}</div>
      <h2 className="text-2xl font-semibold text-yellow-400">{bin.name}</h2>
      <p className="text-gray-300">{bin.description}</p>
      <p className="text-sm text-gray-400">{bin.capacity} | {bin.weight}</p>
      <p className="text-sm text-gray-500">Rental: {bin.rental}</p>
      <p className="text-lg font-bold mt-3 text-yellow-400">${bin.price}</p>
    </motion.button>
  );
};

export default BinCard;
