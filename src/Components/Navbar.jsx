import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PorifleContext from "../utils/Context/ProfileContext";

export default function Navbar({ showLogin }) {
  const navigate = useNavigate();
  const ProfileContextValue = useContext(PorifleContext);
  const handleLogin = () => {
    navigate("/login");
  };
  

  const [showExtra, setShowExtra] = React.useState(false);
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col bg-gray-50">
      <nav id="header" className="w-full z-30 top-0  py-1 ">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 ">
          <div className="flex items-center">
            <Link
              to="/"
              className="no-underline flex hover:no-underline font-bold text-2xl lg:text-4xl"
            >
              <img src={logo} alt="logo" className="h-16 w-16" />
              <span className="mx-2 my-2">Dissue</span>
            </Link>
          </div>
          <div>
            {showLogin && ProfileContextValue.profile && Object.keys(ProfileContextValue.profile) == 0 && (
              <button
                onClick={handleLogin}
                target={"_blank"}
                id="navAction"
                className="mx-auto gradient2 lg:mx-0  text-gray-100 font-extrabold rounded mt-4 lg:mt-0 py-3 px-8 shadow bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-600 "
              >
                Admin Login
              </button>
            )}
          </div>
         
            {ProfileContextValue.profile && Object.keys(ProfileContextValue.profile) != 0 && (
              <div className="relative">
                <button
                  className="text-lg text-gray-800"
                  onClick={() => setShowExtra(!showExtra)}
                >
                  Hi,{" "}
                  <span className="font-bold">
                    {" "}
                    {ProfileContextValue.profile.name}{" "}
                  </span>
                </button>
                {showExtra && (
                  <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg px-2 py-3 flex justify-center  flex-col">

                    <Link to="/dashboard" className="hover:bg-gray-100 px-8">
                        <p className="text-lg text-gray-800">
                            Dashboard
                        </p>
                    </Link>
                    <button
                      onClick={() => {
                        ProfileContextValue.updateProfile({});
                        setShowExtra(false);
                        localStorage.removeItem("profile");
                        navigate("/");
                      }}
                      className="text-lg text-gray-800 hover:bg-gray-100 px-8"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
       
        </div>
      </nav>
    </div>
  );
}
