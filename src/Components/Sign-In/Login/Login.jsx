import React from 'react';
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import google from "../../images/svg/google.svg";
import apple from "../../images/svg/apple.svg";
import styles from "./Login.module.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onChange"
    })

    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Let’s sign you in</h1>
                <p className={styles.subtitle}>We’ve missed you</p>
                <form noValidate className={styles.form}>
                    <input name="email" className={styles.email} type="email" placeholder="Your email "/>
                    <label htmlFor="email" className={styles.label}>Your email</label>
                    <div className={styles.passwordEye}>
                        <input name="password" className={styles.password} type="text" placeholder="Password"/>
                        <label htmlFor="password" className={styles.label}>Your password</label>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <p className={styles.forgotPassword} onClick={() => navigate("/login/password")}>Forgot password ?</p>
                    <button className={styles.btn} type="submit" onClick={() => navigate("/home")}>Log in</button>
                </form>
                <p className={styles.text}>or</p>
                <div className={styles.buttons}>
                    <div className={styles.alternative}>
                        <img className={styles.logo} src={google} alt="Google-Icon"/>
                        <button className={styles.google}>Login with Google</button>
                    </div>
                    <div className={styles.alternative}>
                        <img className={styles.logo} src={apple} alt="Apple-Icon"/>
                        <button className={styles.apple}>Login with Apple</button>
                    </div>
                </div>
                <p className={styles.footerText}>Don’t have account yet ? <span onClick={() => navigate("/register")} className={styles.footerSpan}>Sign up</span></p>
            </div>

        </div>
    );
};

export default Login;