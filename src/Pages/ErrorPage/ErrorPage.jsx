import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/Animation - 1735050973708.json";
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center'>
            <Lottie className='h-[600px]' animationData={error}  />
            <button  
      onClick={() => navigate(-1)} 
      className="px-4 py-2 bg-green-500 btn-lg text-white rounded-md hover:bg-slate-400"
    >
      Go Back
    </button>
        </div>
    );
};

export default ErrorPage;