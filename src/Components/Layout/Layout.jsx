import React,{useState} from 'react';
import styles from "./Layout.module.css";
import logo from "../images/svg/profile/Vector.svg";
import home from "../images/svg/profile/Home.svg";
import {Link} from "react-router-dom";
import search from "../images/svg/profile/Search.svg";
import write from "../images/svg/profile/Write.svg";
import like from "../images/svg/profile/like.svg";
import profile from "../images/svg/profile/profile.svg";
import content from "../images/svg/profile/content.svg";
import ModalPage from "../Profile/modalPage/ModalPage";
import LayoutModal from "./LayoutModal";
import Aside from "./Aside";

const Layout = () => {
    const [openModal, setOpenModal] = useState(false)
    const [aside, setAside] = useState(false)

    return (
        <div className={styles.tabBar}>
            <Aside aside={aside} setAside={setAside}/>
            <div className={styles.positionFixed}>
                <div className={styles.tab__logo}>
                    <img src={logo} alt="Threads-Logo"/>
                </div>
                <div className={styles.tab__asideText}>
                    <Link to="/home"><img src={home} alt="Home"/></Link>
                    <Link to="/home" className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>Home</Link>
                </div>
                <div onClick={e => {
                    e.stopPropagation()
                    setAside(true)
                }} className={styles.tab__asideText}>
                    <img className={aside ? ` ${styles.border}` : `` } src={search} alt="Search"/>
                    <Link  to="#" className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>Search</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <Link to="/home"><img src={write} alt="Write a threads"/></Link>
                    <Link to="/home" className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>Write a threads</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <Link to="/home/activity"><img src={like} alt="Activity"/></Link>
                    <Link to="/home/activity" className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>Activity</Link>
                </div>
                <div className={styles.tab__asideText}>
                    <Link to="/profile"><img src={profile} alt="Profile"/></Link>
                    <Link to="/profile" className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>Profile</Link>
                </div>
                <div className={`${styles.tab__asideText} ${styles.content}`}>
                    <img src={content} alt="More"/>
                    <p onClick={() => setOpenModal(true)} className={aside ? `${styles.tab__text} ${styles.tab__none}` : `${styles.tab__text}`}>More</p>
                    <LayoutModal modal={openModal} setModal={setOpenModal}/>
                </div>
            </div>
        </div>
    );
};

export default Layout;