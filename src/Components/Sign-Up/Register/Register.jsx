import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import styles from "./Register.module.css";
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import {useLocation, useNavigate} from "react-router-dom";
import {authUser} from "../../../redux/reducers/authSlice";

const Register = () => {
    const [passwordView, setPasswordView] = useState(false)
    const {data, status, error} = useSelector((store) => store.registerSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const password = useRef()

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

    const handleSubmitRegister = (data) => {
        const username = data.username
        const email = data.email
        const password = data.password
        const confirm_password = data.passwordRepeat
        dispatch(authUser({username, email, password, confirm_password}))
        console.log(data)
    }

    const viewPassword = () => {
        setPasswordView(prevState => !prevState)
    }

    password.current = watch("password")

    const nextPage = () => {
        if (status === 'done') {
            return navigate("/")
        }else{
            alert("Не удалось зарегистрироваться")
        }
    }


    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.subtitle}>Create account to start using Threads</p>
                <form noValidate className={styles.form} onSubmit={handleSubmit(handleSubmitRegister)}>
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

                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.username && errors.username?.message}
                        </p>
                        <input {...register("username", {
                            required: {
                                message: "Имя пользователя обязательно к заполнению",
                                value: true
                            },
                            minLength: {
                                message: "Минимум 2 символа",
                                value: 2
                            },
                            pattern: {
                                message: "Напишите правильно свое имя пользователя",
                                value: /^[а-яА-ЯёЁa-zA-Z]+$/
                            }
                        })} className={errors.username && errors.username?.message ? `${styles.name} ${styles.error}` : `${styles.name}`}
                               type="text" placeholder="Your name"/>

                    </label>


                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.password && errors.password?.message}
                        </p>
                        <div className={styles.passwordEye}>
                            <input {...register("password", {
                                required: {
                                    message: "Пароль обязателен к заполнению",
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
                                    value === password.current || "Неверно введён пароль"
                            })} className={errors.passwordRepeat && errors.passwordRepeat?.message ? `${styles.password} ${styles.error}` : `${styles.password}`}
                                   type={passwordView ? "text" : "password"} placeholder="Confirm password"/>

                            <img onClick={viewPassword} className={styles.eye} src={eye} alt="EyeOff-Password"/>
                        </div>
                    </label>

                    <button onClick={nextPage} className={styles.btn} type="submit">Create account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;