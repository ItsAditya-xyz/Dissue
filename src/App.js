import { useState, useEffect } from "react";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [loginResponse, setLoginResponse] = useState();
  // useEffect(async () => {}, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </Router>
  );
}
export default App;
