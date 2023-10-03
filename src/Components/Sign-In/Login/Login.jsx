import React, {useEffect, useState} from 'react';
import Logo from "../../images/svg/Pattern.svg";
import eye from "../../images/svg/eyeoff.svg";
import google from "../../images/svg/google.svg";
import apple from "../../images/svg/apple.svg";
import styles from "./Login.module.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../../redux/reducers/loginSlice";


const Login = () => {
    const [passwordView, setPasswordView] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    const handleSubmitLogin = (data) => {

        const username = data.username
        const password = data.password
        dispatch(loginUser({username, password}))
    }
    useEffect(() => {
        if (status === "done") {
            navigate("/home")
        }else if (status === "error") {
            alert("Такой логин не существует")
        }
    },[status])



    // function handleCallbackResponse(response) {
    //     console.log("Encoded JWT ID token: " + response.credential)
    // }
    //
    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: "53241340026-0409635helovf9i53a54lime8v32g659.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })
    //
    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //     {theme: "outline", size: "large"}
    //     )
    // },[])

    const signInGoogle = () => {

    }



    return (
        <div className={styles.login}>
            <img src={Logo} alt="Logotype"/>
            <div>
                <h1 className={styles.title}>Let’s sign you in</h1>
                <p className={styles.subtitle}>We’ve missed you</p>
                <form noValidate onSubmit={handleSubmit(handleSubmitLogin)} className={styles.form}>
                    <label className={styles.form__label}>
                        <p className={styles.register__labelErrorUser}>
                            {errors.username && errors.username?.message}
                        </p>
                        <input name="email" {...register("username", {
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
                        })}
                               className={errors.username && errors.username?.message ? `${styles.email} ${styles.error}` : `${styles.email}`}
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
                                    message: "Пароль должен содержать не менее 8 символов, заглавную букву или число",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} className={errors.password && errors.password?.message ? `${styles.password} ${styles.error}` : `${styles.password}`}
                                   type={passwordView ? "text" : "password"} placeholder="Password"/>

                            <img onClick={viewPassword} className={styles.eye} src={eye} alt="EyeOff-Password"/>
                        </div>
                    </label>


                    <p className={styles.forgotPassword} onClick={() => navigate("/login/password")}>Forgot password
                        ?</p>
                    <button className={styles.btn} type="submit">Log in</button>
                </form>
                <p className={styles.text}>or</p>
                <div className={styles.buttons}>
                    <div className={styles.alternative}>
                        <img className={styles.logo} src={google} alt="Google-Icon"/>
                        <button id="signInDiv" onClick={signInGoogle} className={styles.google}>Login with Google</button>
                    </div>
                    <div className={styles.alternative}>
                        <img className={styles.logo} src={apple} alt="Apple-Icon"/>
                        <button className={styles.apple}>Login with Apple</button>
                    </div>
                </div>
                <p className={styles.footerText}>Don’t have account yet ? <span onClick={() => navigate("/register")}
                                                                                className={styles.footerSpan}>Sign up</span>
                </p>
            </div>

        </div>
    );
};

export default Login;