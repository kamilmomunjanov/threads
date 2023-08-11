import React from 'react';
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import google from "../../images/svg/google.svg";
import apple from "../../images/svg/apple.svg";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Let’s sign you in</h1>
                <p className={styles.subtitle}>We’ve missed you</p>
                <form className={styles.form}>
                    <input className={styles.email} type="text" placeholder="Your email "/>
                    <div className={styles.passwordEye}>
                        <input className={styles.password} type="text" placeholder="Password"/>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <p className={styles.forgotPassword}>Forgot password ?</p>
                    <button className={styles.btn} type="submit">Log in</button>
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
                <p className={styles.footerText}>Don’t have account yet ? <span className={styles.footerSpan}>Sign up</span></p>
            </div>

        </div>
    );
};

export default Login;