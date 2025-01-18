import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Membership = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const paymentAmount = 50; // Payment amount

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/membership/upgrade", { amount: paymentAmount });

      if (response.data.success) {
        toast.success("Membership upgraded successfully!");
        navigate("/dashboard");
      } else {
        toast.error("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during payment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center text-primary">
            Become a Gold Member
          </h2>
          <p className="text-gray-600 text-center">
            Unlock exclusive features for just{" "}
            <span className="font-semibold text-primary">${paymentAmount}</span>:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Receive a Gold Badge</li>
            <li>Create more than 5 posts</li>
            <li>Access premium features</li>
          </ul>
          <div className="card-actions justify-center mt-6">
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className={`btn btn-primary w-full ${isLoading ? "btn-disabled" : ""}`}
            >
              {isLoading ? "Processing..." : `Pay $${paymentAmount} to Upgrade`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
