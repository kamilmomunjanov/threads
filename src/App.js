import React,{useState} from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Sign-In/Login/Login";
import ForgotPassword from "./Components/Sign-In/ForgotPassword/ForgotPassword";
import VerificationOtp from "./Components/Sign-In/OTP-Verification/VerificationOtp";
import Register from "./Components/Sign-Up/Register/Register";
import NewPassword from "./Components/Sign-In/NewPassword/NewPassword";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import ProfilePage from "./Components/Profile/ProfilePage/ProfilePage";
import EditProfile from "./Components/Profile/EditProfile/EditProfile";
import MainPage from "./Components/Main/MainPage/MainPage";
import CommentPage from "./Components/Main/MainPage/CommentPage/CommentPage";


function App() {
    const [modal, setModal] = useState(false)
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login/password" element={<ForgotPassword/>}/>
            <Route path="/login/password/verification" element={<VerificationOtp/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login/password/verification/password" element={<NewPassword/>}/>
            <Route path="/profile" element={<ProfilePage modal={modal} setModal={setModal}/>}/>
            <Route path="/profile/edit" element={<EditProfile modal={modal} setModal={setModal}/>}/>
            <Route path="/home" element={<MainPage modal={modal} setModal={setModal}/>}/>
            <Route path="/home/comment" element={<CommentPage modal={modal} setModal={setModal}/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
