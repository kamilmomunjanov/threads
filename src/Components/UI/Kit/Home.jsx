import React from 'react';
import home from "../svg/home.svg";
import home1 from "../svg1/home.svg";

const Home = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={home} alt=""/>
            <img style={{cursor:"pointer"}} src={home1} alt=""/>
        </div>
    );
};

export default Home;