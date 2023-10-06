// import React,{useEffect, useState} from 'react';
// import jwt_decode from "jwt-decode";
//
// const Example = () => {
//     const [user, setUser] = useState({})
//     const [tokenClient, setTokenClient] = useState({})
//
//
//
//
//     function handleCallbackResponse(response) {
//         console.log("Encoded JWT ID token: " + response.credential)
//         let userObject = jwt_decode(response.credential)
//         console.log(userObject,1)
//         setUser(userObject)
//     }
//
//     const SCOPE = "https://www.googleapis.com/auth/drive"
//
//     function createDriveFile () {
//         tokenClient.requestAccessToken()
//     }
//
//     useEffect(() => {
//         /* global google */
//         google.accounts.id.initialize({
//             client_id: "53241340026-0409635helovf9i53a54lime8v32g659.apps.googleusercontent.com",
//             callback: handleCallbackResponse
//         })
//
//         google.accounts.id.renderButton(
//             document.getElementById("signInDiv"),
//         {theme: "outline", size: "large"}
//         )
//
//         setTokenClient(
//             google.accounts.oauth2.initTokenClient({
//             client_id: "53241340026-0409635helovf9i53a54lime8v32g659.apps.googleusercontent.com",
//             scope: SCOPE,
//             callback: (tokenResponse) => {
//
//                 console.log(tokenResponse)
//             }
//         }))
//
//     },[])
//
//
//     return (
//         <div>
//             <div id="signInDiv"></div>
//             <input type="submit" onClick={createDriveFile}/>
//         </div>
//     );
// };
//
// export default Example;