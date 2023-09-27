import React from 'react';

const All = () => {
    return (
        <div>
            <button
                style={{
                    width:"100px",
                    padding:"10px 0",
                    borderRadius:"8px",
                    background:"black",
                    color:"white",
                    cursor:"pointer"
                }}
                type="button">All</button>
            <button
                style={{
                    width:"100px",
                    padding:"10px 0",
                    borderRadius:"8px",
                    color:"black",
                    border:"1px solid #D9D9D9",
                    cursor:"pointer"
                }}
                type="button">Replies</button>
        </div>
    );
};

export default All;