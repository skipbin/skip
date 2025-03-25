import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

interface PaymentSectionProps {
  stripePromise: Promise<Stripe | null>;
  selectedBin: {
    price: number;
  };
  customerDetails: {
    wasteType: string;
    address: string;
    date: string;
    time: string;
  };
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ stripePromise, selectedBin, customerDetails }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(selectedBin.price),
        currency: "usd",
      }}
    >
      <CheckoutPage amount={selectedBin.price} customerDetails={customerDetails} />
    </Elements>
  );
};

export default PaymentSection;
