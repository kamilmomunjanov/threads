import React,{useEffect} from 'react';
import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogOutButton from "./GoogleLogOutButton";
import {gapi} from "gapi-script";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginUserGoogle} from "../../redux/reducers/loginSlice";
import {useNavigate} from "react-router-dom";

const Google = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector(store => store.signInSlice)

    const handleGoogleSuccess = (response) => {
        console.log('Успешная авторизация:', response);
        axios.post("http://aldiyar-backender.org.kg/api/user/google/",{
            access_token: response.accessToken,
            id_token: response.tokenId
        }).then((res) => console.log(res))
            .catch((error) => console.log(error))
        dispatch(loginUserGoogle(response.profileObj))


        // Здесь вы можете отправить токен на ваш сервер для дополнительной обработки
    };

    const handleGoogleFailure = (error) => {
        console.error('Ошибка авторизации:', error);
    };

    useEffect(()=>{
        function start (){
            gapi.client.init({clientId:"53241340026-0409635helovf9i53a54lime8v32g659.apps.googleusercontent.com",
            scope:""
            })
        }
        gapi.load("client:auth2", start)
    })

    useEffect(()=>{
        if (data) {
            navigate('/home')
        }
    },[data])

    return (
        <div>
            <h1>Авторизация через Google</h1>
            <GoogleLoginButton onSuccess={handleGoogleSuccess} onFailure={handleGoogleFailure} />
            <GoogleLogOutButton/>
        </div>
    );
};

export default Google;