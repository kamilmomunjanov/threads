import React,{useEffect, useState} from 'react';
import styles from "./EditProfile.module.css";
import Layout from "../../Layout/Layout";
import arrow from "../../images/svg/editProfile/Arrow.svg";
import user from "../../images/png/user.png";
import toggle from "../../images/png/Toggle.png";
import ModalPage from "../modalPage/ModalPage";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {profileUser} from "../../../redux/reducers/profileSlice";
import {profileUpdate} from "../../../redux/reducers/profileSlice";
import instance from "../../../config/axios";


const EditProfile = ({modal, setModal}) => {
    const navigate = useNavigate()
    const [getPhoto, setGetPhoto] = useState(null)
    const dispatch = useDispatch()
    const {_data, status, error} = useSelector((store) => store.profileSlice)
    const {_data:photoData} = useSelector((store) => store.photoProfile)
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onChange",
        values: _data
    })

    useEffect(()=>{
        dispatch(profileUser())
    },[])

    const handleSubmitProfileUpdate = async(data) => {
        try {

            const user = window.localStorage.getItem("id")
            const username = data.username
            const name = data.name
            const bio = data.bio
            const is_private = false


            await dispatch(profileUpdate({user,username,name,bio,is_private}))
            await dispatch(profileUser())

        }catch (error) {
            console.warn(error)
            alert("Ошибка при загрузке файла")
        }
    }

    useEffect(()=>{
        instance.get("user/me/update-profile-photo/",
            {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
            }).then(({data}) => setGetPhoto(data.photo))
    },[getPhoto])

if (_data) {
    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                <div className={styles.top}>
                    <h2 className={styles.title} onClick={() => navigate(-1)}><img src={arrow} alt="Arrow"/>Edit profile</h2>
                    <p className={styles.subtitle}>Done</p>
                </div>

                <form noValidate onSubmit={handleSubmit(handleSubmitProfileUpdate)}>

                    {
                        getPhoto ? <img className={`${styles.imgUser} ${styles.imgUserUpdate}`} src={`${getPhoto}`} alt=""/> :<img className={styles.imgUser} src={user} alt="User"/>
                    }
                    <p onClick={() => setModal(true)} className={styles.addPhoto}>Edit photo</p>
                    <ModalPage getPhoto={getPhoto} setGetPhoto={setGetPhoto} modal={modal} setModal={setModal}/>
                    <div className={styles.editCard}>

                        <label className={styles.label}>
                            <div className={styles.username}>
                                <span className={styles.label}>Username</span>
                                <input {...register("username", )} className={errors.username && errors.username?.message ? `${styles.input} ${styles.error}` : `${styles.input}`}
                                       type="text" readOnly  />
                            </div>
                        </label>

                        <label className={styles.label}>
                            <div className={styles.username}>
                                <span className={styles.label}>Name</span>
                                <input {...register("name", {
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
                                })} className={errors.name && errors.name?.message ? `${styles.input} ${styles.field} ${styles.error}` : `${styles.input} ${styles.field}`}
                                       type="text"    placeholder="+ Add name"/>
                            </div>
                        </label>
                        <label className={styles.label}>
                            <div className={styles.username}>
                                <span className={styles.label}>Bio</span>
                                <input {...register("bio", {
                                })} className={errors.name && errors.name?.message ? `${styles.input} ${styles.field} ${styles.error}` : `${styles.input} ${styles.field}`}
                                       type="text"    placeholder="+ Write bio"/>
                            </div>
                        </label>

                        <label className={styles.label}>
                            <div className={styles.username}>
                                <span className={styles.label}>Link</span>
                                <input {...register("link", {
                                })} className={errors.name && errors.name?.message ? `${styles.input} ${styles.field} ${styles.error}` : `${styles.input} ${styles.field}`}
                                       type="text"   placeholder="+ Add link"/>
                            </div>
                        </label>
                        <button className={styles.btn} type='submit'>Change</button>


                        <div className={styles.private}>
                            <p className={styles.privateText}>Private profile</p>
                            <img className={styles.toggle} src={toggle} alt="Toggle"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
    return <h2>Loading...</h2>
};

export default EditProfile;