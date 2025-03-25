"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount"); // Get amount from URL

  useEffect(() => {
    // Redirect back to homepage after 5 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <FaCheckCircle className="text-green-400 text-6xl mb-4" />
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Payment!</h1>
      {amount && <p className="text-lg">You paid <span className="font-bold">${amount}</span> successfully.</p>}
      <p className="mt-4 text-sm text-gray-400">Redirecting to homepage in 5 seconds...</p>
    </main>
  );
}
