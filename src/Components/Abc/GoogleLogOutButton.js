import React from 'react';
import {GoogleLogout} from "react-google-login";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/reducers/loginSlice";

const GoogleLogOutButton = () => {

    const dispatch = useDispatch()
    const onSuccess = ()=>{
        console.log("logout")
        dispatch(logoutUser())
    }
    return (
        <GoogleLogout
            clientId="802497358333-aut6o51ssd8fn9umhkp1bkmchlmjt072.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    );
};

export default GoogleLogOutButton;