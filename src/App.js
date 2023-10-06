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
import OtherUser from "./Components/Main/MainPage/OtherUser/OtherUser";
import Activity from "./Components/Activity/Activity";
import Main from "./Components/UI/Main";
import IncorrectUsername from "./Components/UI/Kit/IncorrectUsername";
import ForgottenPassword from "./Components/UI/Kit/ForgottenPassword";
import Example from "./Components/Abc/Example";
import Google from "./Components/Abc/Google";


function App() {
    const [modal, setModal] = useState(false)
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/incorrect-username" element={<IncorrectUsername/>}/>
            <Route path="/forgot-password" element={<ForgottenPassword/>}/>
            <Route path="/login/password" element={<ForgotPassword/>}/>
            <Route path="/login/password/verification" element={<VerificationOtp/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login/password/verification/password" element={<NewPassword/>}/>
            <Route path="/profile" element={<ProfilePage modal={modal} setModal={setModal}/>}/>
            <Route path="/profile/edit" element={<EditProfile modal={modal} setModal={setModal}/>}/>
            <Route path="/home" element={<MainPage modal={modal} setModal={setModal}/>}/>
            <Route path="/home/comment" element={<CommentPage modal={modal} setModal={setModal}/>}/>
            <Route path="/home/comment" element={<CommentPage modal={modal} setModal={setModal}/>}/>
            <Route path="/home/other-user" element={<OtherUser modal={modal} setModal={setModal}/>}/>
            <Route path="/home/activity" element={<Activity modal={modal} setModal={setModal}/>}/>
            <Route path="/home/activity" element={<Activity modal={modal} setModal={setModal}/>}/>
            <Route path="/example" element={<Example/>}/>
            <Route path="/google" element={<Google/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
