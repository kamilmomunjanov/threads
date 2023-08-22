import React from 'react';
import styles from "./NewPassword.module.css";
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import {useNavigate} from "react-router-dom";

const NewPassword = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Create new password</h1>
                <p className={styles.subtitle}>Your new password must be different from previous used passwords</p>
                <form className={styles.form}>
                    <div className={styles.passwordEye}>
                        <input name="password" className={styles.password} type="text" placeholder="Password"/>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <div className={styles.passwordEye}>
                        <input name='password' className={styles.password} type="text" placeholder="Confirm password"/>
                        <img className={styles.eye} src={eye} alt="EyeOff-Password"/>
                    </div>
                    <button className={styles.btn} type="submit" onClick={() => navigate("/")}>Continue</button>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;