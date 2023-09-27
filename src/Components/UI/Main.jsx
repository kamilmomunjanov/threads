import React from 'react';
import FollowBtn from "./Kit/FollowBtn";
import Eye from "./Kit/Eye";
import All from "./Kit/All";
import Bye from "./Kit/Bye";
import Comment from "./Kit/Comment";
import Activity from "./Kit/Activity";
import Write from "./Kit/Write";
import Home from "./Kit/Home";
import Profile from "./Kit/Profile";
import Search from "./Kit/Search";
import IncorrectUsername from "./Kit/IncorrectUsername";
import ForgottenPassword from "./Kit/ForgottenPassword";

const Main = () => {
    return (
        <div>
            <FollowBtn/>
            <Eye/>
            <All/>
            <Bye/>
            <Comment/>
            <Activity/>
            <Write/>
            <Home/>
            <Profile/>
            <Search/>
            <IncorrectUsername/>
            <ForgottenPassword/>
        </div>
    );
};

export default Main;