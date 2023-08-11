import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Sign-In/Login/Login";
import ForgotPassword from "./Components/Sign-In/ForgotPassword/ForgotPassword";
import VerificationOtp from "./Components/Sign-In/OTP-Verification/VerificationOtp";
import Register from "./Components/Sign-Up/Register/Register";
import NewPassword from "./Components/Sign-In/NewPassword/NewPassword";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login/password" element={<ForgotPassword/>}/>
            <Route path="/login/password/verification" element={<VerificationOtp/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login/password/verification/password" element={<NewPassword/>}/>
        </Routes>
    </div>
  );
}

export default App;
