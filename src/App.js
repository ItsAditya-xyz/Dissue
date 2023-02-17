import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultCss from "../src/styles/DefaultStyles.css";

import ProfileState from "./utils/Context/ProfileState";
import { useEffect } from "react";
import { useContext } from "react";
import PorifleContext from "./utils/Context/ProfileContext";
import Spread from "./Components/Spreadsheet";

function App() {
  const ProfileContextValue = useContext(PorifleContext);
  useEffect(() => {
    const localValue = localStorage.getItem("profile");
    if (localValue) {
      const val = JSON.parse(localValue);
      console.log(val);
      ProfileContextValue.updateProfile(val);
    }
  }, []);

  return (
    <>
      <ProfileState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/spreadsheet" element={<Spread />} />
          </Routes>
        </BrowserRouter>
      </ProfileState>
    </>
  );
}

export default App;
