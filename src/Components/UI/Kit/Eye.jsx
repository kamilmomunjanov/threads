import React from 'react';
import eye from "../svg/eye.svg";
import eyeOff from "../svg/eye-off.svg";

const Eye = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={eye} alt="eye"/>
            <img style={{cursor:"pointer"}} src={eyeOff} alt="eye"/>
        </div>
    );
};

export default Eye;