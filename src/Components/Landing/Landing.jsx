import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Navbar showLogin={true} />
        <div className='pt-32 sm:pt-24 bg-gray-900 min-h-screen'>
          <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center '>
            <div className='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left'>
              <h1 className='my-4 text-5xl font-bold leading-tight text-white'>
                Issue Blockchain based Certificates and Results
              </h1>
              <p className='leading-normal text-2xl mb-8 text-white'>
                A step towards transparency.
              </p>
              <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0  lg:bg-transparent  p-4 lg:p-0 z-20'>
                <button
                  className='bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600 font-bold'
                  onClick={() => {
                    navigate("/sign-up");
                  }}>
                  Get Started
                </button>
                <a href='/about' className='text-blue-200 underline px-4'>
                  How it works
                </a>
              </div>
              {/* <Login /> */}
            </div>

            <div className='w-3/5 md:w-3/5 flex justify-center my-8 sm:my-0'></div>
          </div>
        </div>

        <Footer />
      </>
    </div>
  );
}
