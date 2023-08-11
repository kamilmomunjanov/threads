import React,{useState} from 'react';
import { usePinInput } from 'react-pin-input-hook';
import styles from "./VerificationOtp.module.css";
import Logo from "../../images/svg/Pattern.svg";

const VerificationOtp = () => {
    const [values, setValues] = useState(Array(4).fill(''))
    const { fields } = usePinInput({
        values,
        onChange: setValues,
    })

    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>OTP Verification</h1>
                <p className={styles.subtitle}>Check your email to see the verification code</p>
                <form className={styles.form}>
                    <div className={styles.pinInput}>
                        {fields.map((propsField, index) => (
                            <input key={index} className={styles.pinInputField} {...propsField} />
                        ))}
                    </div>
                    <button className={styles.btn} type="submit">Verify</button>
                </form>
            </div>
        </div>
    );
};

export default VerificationOtp;