import React from 'react';
import styles from "./Register.module.css";
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import google from "../../images/svg/google.svg";
import apple from "../../images/svg/apple.svg";

const Register = () => {
    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.subtitle}>Create account to start using Threads</p>
                <form className={styles.form}>
                    <input className={styles.email} type="text" placeholder="Your email "/>
                    <input className={styles.name} type="text" placeholder="Your name "/>
                    <div className={styles.passwordEye}>
                        <input className={styles.password} type="text" placeholder="Password"/>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <div className={styles.passwordEye}>
                        <input className={styles.password} type="text" placeholder="Forgot password"/>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <button className={styles.btn} type="submit">Create account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;