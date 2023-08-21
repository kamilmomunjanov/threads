import React from 'react';
import ava from "../images/svg/main/avatar.svg";
import styles from "./Layout.module.css";


const RightLayout = () => {
    return (
            <div className={styles.aside}>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>malevicz</h4>
                            <p className={styles.subtitle}>Design lead</p>
                        </div>
                    </div>
                    <p className={styles.switch}>Switch</p>
                </div>
                <div className={styles.suggested}>
                    <div><span className={styles.subtitle}>Suggested for you</span></div>
                    <div><span className={styles.title}>See All</span></div>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>mkbhd</h4>
                            <p className={styles.subtitle}>Follows you</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Following</button>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>marh9</h4>
                            <p className={styles.subtitle}>Follows you</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>madebyryan</h4>
                            <p className={styles.subtitle}>Suggested for you</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>madebyryan</h4>
                            <p className={styles.subtitle}>Suggested for you</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>
                <div className={styles.suggest}>
                    <div className={styles.user}>
                        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                        <div>
                            <h4 className={styles.title}>marh9</h4>
                            <p className={styles.subtitle}>Follows you</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Follow</button>
                </div>
            </div>
    );
};

export default RightLayout;