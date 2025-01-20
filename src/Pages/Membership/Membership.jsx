import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import useAuth from "../../Hooks/useAuth";
import useSingleUser from "../../Hooks/useSingleUser";

const Membership = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuth()
  const [userData, userLoading, userError, userErrorMsg, refetch] = useSingleUser()
  const axiosSecure= useAxiosSecure()
  const paymentAmount = 50; // Payment amount

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await axiosSecure.patch(`/users/badge/${user?.email}`);
      if (response.data.modifiedCount) {
        toast.success("Membership upgraded successfully!");
        refetch();
        navigate("/dashboard/userProfile");
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
          <h2 className="card-title text-2xl font-bold text-center text-black">
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
              className={`btn btn-success text-white w-full ${isLoading ? "btn-disabled" : ""}`}
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
