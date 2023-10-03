import React,{useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";

const Example = () => {
    const [user, setUser] = useState({})

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential)
        let userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
    }


    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "53241340026-0409635helovf9i53a54lime8v32g659.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
        )
    },[])


    return (
        <div>
            <div id="signInDiv"></div>
        </div>
    );
};

export default Example;