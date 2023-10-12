import React from 'react';
import "./aside.css";
import styles from "./Layout.module.css";
import ava from "../images/svg/main/avatar.svg";
import {useDispatch, useSelector} from "react-redux";

const Aside = ({aside, setAside}) => {
    const dispatch = useDispatch()
    const {_data} = useSelector((store) => store.profileSlice)


    return (
        <div className={aside ? "aside active" : "aside"}>
            <div className={aside ? "aside__content active" : "aside__content"}>
                <h4 className="search" onClick={(e) => {
                    e.stopPropagation()
                    setAside(false)
                }}>Search</h4>
                <input className="input__search" type="text" placeholder="Search"/>

                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                            <p className="followers">50 followers</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Following</button>
                </div>

                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                            <p className="followers">789 followers</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>

                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                            <p className="followers">123 followers</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>

                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                            <p className="followers">5.3K followers</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>

                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                            <p className="followers">1.2K followers</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Following</button>
                </div>
            </div>
        </div>
    );
};

export default Aside;