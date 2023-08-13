import React from 'react';
import {Link} from "react-router-dom";
import styles from "./ProfilePage.module.css";
import logo from "../../images/svg/profile/Vector.svg";
import home from "../../images/svg/profile/Home.svg";
import like from "../../images/svg/profile/like.svg";
import search from "../../images/svg/profile/Search.svg";
import write from "../../images/svg/profile/Write.svg";
import profile from "../../images/svg/profile/profile.svg";
import content from "../../images/svg/profile/content.svg";

const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <div className={styles.tabBar}>
                <div className={styles.tab__logo}>
                    <img src={logo} alt="Threads-Logo"/>
                </div>
                <div className={styles.tab__asideText}>
                    <img src={home} alt="Home"/>
                    <Link to="#" className={styles.tab__text}>Home</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <img src={search} alt="Search"/>
                    <Link to="#" className={styles.tab__text}>Search</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <img src={write} alt="Write a threads"/>
                    <Link to="#" className={styles.tab__text}>Write a threads</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <img src={like} alt="Activity"/>
                    <Link to="#" className={styles.tab__text}>Activity</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <img src={profile} alt="Activity"/>
                    <Link to="/profile" className={styles.tab__text}>Profile</Link>
                </div>
                <div className={`${styles.tab__asideText} ${styles.content}`}>
                    <img src={content} alt="More"/>
                    <p className={styles.tab__text}>More</p>
                </div>
            </div>

            <div className={styles.loginPage__right}>

            </div>
        </div>
    );
};

export default ProfilePage;