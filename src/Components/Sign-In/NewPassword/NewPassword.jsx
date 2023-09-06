import React,{useRef, useState} from 'react';
import styles from "./NewPassword.module.css";
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {newPassword} from "../../../redux/reducers/loginSlice";


const NewPassword = () => {
    const [passwordView, setPasswordView] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const password = useRef()

    const {data, status, error} = useSelector((store) => store.signInSlice)


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

    const viewPassword = () => {
        setPasswordView(prevState => !prevState)
    }

    password.current = watch("password")

    const handleSubmitPassword = (data) => {

        const password = data.password
        const passwordRepeat = data.passwordRepeat
        dispatch(newPassword({password, passwordRepeat}))
    }



    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Create new password</h1>
                <p className={styles.subtitle}>Your new password must be different from previous used passwords</p>
                <form className={styles.form} onSubmit={handleSubmit(handleSubmitPassword)}>
                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.password && errors.password?.message}
                        </p>
                        <div className={styles.passwordEye}>
                            <input {...register("password", {
                                required: {
                                    message: "Пароль обязателен к заполнению!",
                                    value: true
                                },
                                pattern: {
                                    message: "Пароль должен содержать не менее 8 символов, заглавную букву, число",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} className={errors.password && errors.password?.message ? `${styles.password} ${styles.error}` : `${styles.password}`}
                                   type={passwordView ? "text" : "password"} placeholder="Password"/>

                            <img onClick={viewPassword} className={styles.eye} src={eye} alt="EyeOff-Password"/>
                        </div>
                    </label>

                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.passwordRepeat && errors.passwordRepeat?.message}
                        </p>
                        <div className={styles.passwordEye}>
                            <input {...register("passwordRepeat", {
                                validate: value =>
                                    value === password.current || "Неверно введён пароль!"
                            })} className={errors.passwordRepeat && errors.passwordRepeat?.message ? `${styles.password} ${styles.error}` : `${styles.password}`}
                                   type={passwordView ? "text" : "password"} placeholder="Confirm password"/>

                            <img onClick={viewPassword} className={styles.eye} src={eye} alt="EyeOff-Password"/>
                        </div>
                    </label>
                    <button className={styles.btn} type="submit" >Continue</button>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;