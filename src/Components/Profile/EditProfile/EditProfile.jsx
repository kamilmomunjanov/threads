import React from 'react';
import styles from "./EditProfile.module.css";
import Layout from "../../Layout/Layout";
import arrow from "../../images/svg/editProfile/Arrow.svg";
import user from "../../images/png/user.png";
import toggle from "../../images/png/Toggle.png";


const EditProfile = () => {
    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                <div className={styles.top}>
                    <h2 className={styles.title}><img src={arrow} alt="Arrow"/>Edit profile</h2>
                    <p className={styles.subtitle}>Done</p>
                </div>
                <img className={styles.imgUser} src={user} alt="User"/>
                <p className={styles.addPhoto}>Edit photo</p>
                <form className={styles.editCard}>
                    <div className={styles.username}>
                        <label className={styles.label} htmlFor="text">Username</label>
                        <input className={styles.input} name="text" type="text" placeholder="malevicz"/>
                    </div>
                    <div className={styles.username}>
                        <label className={styles.label} htmlFor="text">Name</label>
                        <input className={styles.input} name="text" type="text" placeholder="Design lead"/>
                    </div>
                    <div className={styles.username}>
                        <label className={styles.label} htmlFor="text">Bio</label>
                        <input className={`${styles.input} ${styles.field}`} name="text" type="text" placeholder="+ Write bio"/>
                    </div>
                    <div className={styles.username}>
                        <label className={styles.label} htmlFor="text">Link</label>
                        <input className={`${styles.input} ${styles.field}`} name="text" type="text" placeholder="+ Add link"/>
                    </div>
                    <div className={styles.private}>
                        <p className={styles.privateText}>Private profile</p>
                        <img className={styles.toggle} src={toggle} alt="Toggle"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;