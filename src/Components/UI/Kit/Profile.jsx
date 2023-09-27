import React from 'react';
import profile from "../svg/profile.svg";
import profile1 from "../svg1/user.svg";

const Profile = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={profile} alt=""/>
            <img style={{cursor:"pointer"}} src={profile1} alt=""/>
        </div>
    );
};

export default Profile;