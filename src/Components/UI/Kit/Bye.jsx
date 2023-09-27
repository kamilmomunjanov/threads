import React from 'react';
import bye from "../svg/Bye.svg";
import resend from "../svg/Resend.svg";
import user from "../svg/User.svg";

const Bye = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={bye} alt=""/>
            <img style={{cursor:"pointer"}} src={resend} alt=""/>
            <img style={{cursor:"pointer"}} src={user} alt=""/>
        </div>
    );
};

export default Bye;