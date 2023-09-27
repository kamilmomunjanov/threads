import React from 'react';
import comment from "../svg/Comment.svg";
import like from "../svg/Like.svg";
import repost from "../svg/Repost.svg";
import send from "../svg/Send.svg";

const Comment = () => {
    return (
        <div>
            <img style={{cursor:"pointer"}} src={comment} alt=""/>
            <img style={{cursor:"pointer"}} src={like} alt=""/>
            <img style={{cursor:"pointer"}} src={repost} alt=""/>
            <img style={{cursor:"pointer"}} src={send} alt=""/>
        </div>
    );
};

export default Comment;