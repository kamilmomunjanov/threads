import React from 'react';
import styles from "./ForgotPassword.module.css";
import Logo from "../../images/svg/Pattern.svg";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {forgotPassword} from "../../../redux/reducers/forgotPasswordSlice";


const ForgotPassword = () => {
    const navigate = useNavigate()
    const {data, status, error} = useSelector((store) => store.forgotPasswordSlice)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    })

    const handleSubmitForgotPassword = (data) => {
        const email = data.email
        dispatch(forgotPassword({email}))
    }

    const nextPage = () => {
        // if (status === "done") {
        //     navigate("/login/password/verification")
        // }
    }

    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Forgot password ?</h1>
                <p className={styles.subtitle}>Enter your email address to reset password</p>
                <form noValidate className={styles.form} onSubmit={handleSubmit(handleSubmitForgotPassword)}>
                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.email && errors.email?.message}
                        </p>
                        <input {...register("email", {
                            required: {
                                message: "Email обязателен к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 10 символов",
                                value: 10
                            },
                            pattern: {
                                message: "Напишите правильно свой Email",
                                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })} className={errors.email && errors.email?.message ? `${styles.email} ${styles.error}` : `${styles.email}`}
                               type="email" placeholder="Your email"/>

                    </label>
                    <button className={styles.btn} type="submit" onClick={nextPage}>Continue</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;