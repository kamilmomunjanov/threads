import React from 'react';
import { GoogleLogin } from 'react-google-login';

function GoogleLoginButton({ onSuccess, onFailure }) {

    return (
        <GoogleLogin
            clientId="802497358333-aut6o51ssd8fn9umhkp1bkmchlmjt072.apps.googleusercontent.com"
            buttonText="Войти через Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}

        />
    );
}

export default GoogleLoginButton;