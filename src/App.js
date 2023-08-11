import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Sign-In/Login/Login";
import ForgotPassword from "./Components/Sign-In/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login/password" element={<ForgotPassword/>}/>
        </Routes>
    </div>
  );
}

export default App;
