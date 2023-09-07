import React,{useState} from 'react';
import { usePinInput } from 'react-pin-input-hook';
import styles from "./VerificationOtp.module.css";
import Logo from "../../images/svg/Pattern.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {verificationOTP} from "../../../redux/reducers/verificationSlice";

const VerificationOtp = () => {
    const navigate = useNavigate()
    const {data, status, error} = useSelector((store) => store.verificationSlice)
    const dispatch = useDispatch()

    const [values, setValues] = useState(Array(4).fill(''))
    const { fields } = usePinInput({
        values,
        onChange: setValues,
    })


    const handleSubmitVerification = async(e) => {
        e.preventDefault()
        const code = values.join("")
        await dispatch(verificationOTP({code}))
        await setValues(["","","",""])
    }

    const nextPage = () => {
        if (status === "done") {
            navigate("/login/password/verification/password")
        }else{
            alert("Введите верный код")
        }
    }

    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>OTP Verification</h1>
                <p className={styles.subtitle}>Check your email to see the verification code</p>
                <form className={styles.form} onSubmit={handleSubmitVerification}>
                    <div className={styles.pinInput}>
                        {fields.map((propsField, index) => (
                            <input key={index} className={styles.pinInputField} {...propsField} />
                        ))}
                    </div>
                    <button onClick={nextPage} className={styles.btn} type="submit">Verify</button>
                </form>
            </div>
        </div>
    );
};

export default VerificationOtp;