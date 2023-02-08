import React from "react";

import Loader from "./Loader";
import Deso from "deso-protocol";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const deso = new Deso();

export default function Navbar({ showLogin }) {
  const [loginResponse, setLoginResponse] = useState(null);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loadingCreators, setIsLoadingCreators] = useState(true);
  const [userList, setUserList] = useState([]);
  const [isLogging, setIsLogging] = useState(false);

  return (
    <div className='gradient leading-relaxed tracking-wide flex flex-col bg-gray-900'>
      <nav id='header' className='w-full z-30 top-0  py-1 '>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 '>
          <div className='flex items-center'>
            <a
              href='/'
              className='no-underline flex hover:no-underline font-bold text-2xl lg:text-4xl'>
              {/* <img src={logo} alt='logo' className='h-16 w-16' /> */}
              <span className='mx-2 my-2 text-white'> DeResult </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
