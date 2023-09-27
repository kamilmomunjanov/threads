import React from 'react';
import write from "../svg/write.svg";
import write1 from "../svg1/write.svg";

const Write = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={write} alt=""/>
            <img style={{cursor:"pointer"}} src={write1} alt=""/>
        </div>
    );
};

export default Write;