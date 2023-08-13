import React from 'react';
import styles from "./ProfilePage.module.css";
import Layout from "../../Layout/Layout";
import next from "../../images/svg/profile/Next.svg";
import avatar from "../../images/png/profilePhoto.png";


const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                    <div className={styles.info}>
                        <div className={styles.information}>
                            <img src={avatar} alt="Avatar"/>
                            <div className={styles.aboutUser}>
                                <h2 className={styles.title}>Design lead</h2>
                                <p className={styles.subtitle}>malevicz
                                    <a className={styles.threadsNet} target="_blank"
                                       href="https://www.threads.net/">threads.net</a>
                                </p>
                                <p className={styles.followers}>153K followers</p>
                            </div>
                        </div>
                        <img className={styles.nextPage} src={next} alt="Next page"/>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}>Edit profile</button>
                    <button className={styles.btn}>Share profile</button>
                </div>
                <p className={styles.text}>Threads</p>
                <p className={styles.textNotPost}>You haven’t posted any threads yet.</p>
            </div>
        </div>
    );
};

export default ProfilePage;