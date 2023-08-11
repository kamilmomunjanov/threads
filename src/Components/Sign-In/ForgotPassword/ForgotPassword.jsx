import React from 'react';
import styles from "./ForgotPassword.module.css";
import Logo from "../../images/svg/Pattern.svg";

const ForgotPassword = () => {
    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Forgot password ?</h1>
                <p className={styles.subtitle}>Enter your email address to reset password</p>
                <form className={styles.form}>
                    <input className={styles.email} type="text" placeholder="Your email "/>
                    <button className={styles.btn} type="submit">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;