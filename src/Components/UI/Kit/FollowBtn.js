import React from 'react';

const FollowBtn = () => {
    return (
        <div style={{
            marginTop:"10px"
        }}>
            <button
                style={{
                    width:"361px",
                    padding:"10px 0",
                    borderRadius:"10px",
                    background:"black",
                    color:"white",
                    cursor:"pointer"
                }}
                type="button">Follow</button>
            <button
                style={{
                    width:"361px",
                    padding:"10px 0",
                    borderRadius:"10px",
                    color:"#999999",
                    border:"1px solid #999999",
                    cursor:"pointer"
                }}
                type="button">Following</button>
        </div>
    );
};

export default FollowBtn;