import React from 'react';
import activity from "../svg/activity.svg";
import like from "../svg1/like.svg";

const Activity = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={activity} alt=""/>
            <img style={{cursor:"pointer"}} src={like} alt=""/>
        </div>
    );
};

export default Activity;