// components/CustomerDetailsModal.tsx
import { motion } from "framer-motion";
import CustomerDetailsForm from "@/components/price/customerdetail";

interface CustomerDetails {
  wasteType: string;
  address: string;
  date: string;
  time: string;
}

interface CustomerDetailsModalProps {
  customerDetails: CustomerDetails;
  setCustomerDetails: (details: CustomerDetails) => void;
  setShowModal: (show: boolean) => void;
  handleSubmitDetails: () => void;
  errorMessage?: string;
}

export default function CustomerDetailsModal({
  customerDetails,
  setCustomerDetails,
  setShowModal,
  handleSubmitDetails,
  errorMessage,
}: CustomerDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.8 }} 
        className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Enter Your Details</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <CustomerDetailsForm
          customerDetails={customerDetails}
          setCustomerDetails={setCustomerDetails}
        />
        <div className="flex justify-end mt-4">
          <button onClick={() => setShowModal(false)} className="mr-4 px-4 py-2 bg-gray-600 rounded-lg">Cancel</button>
          <button onClick={handleSubmitDetails} className="px-4 py-2 bg-yellow-500 rounded-lg">Submit</button>
        </div>
      </motion.div>
    </div>
  );
}