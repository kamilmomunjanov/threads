import React,{useState} from 'react';
import styles from "./Activity.module.css";
import Layout from "../Layout/Layout";
import RightLayout from "../Layout/RightLayout";
import ava from "../images/svg/main/avatar.svg";

const Activity = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <div className={styles.mainPage}>
            <Layout/>
            <div className={styles.mainPage__right}>
                <h3 className={styles.homeTitle}>Activity</h3>
                <div className={styles.section}>
                    <h4 className={activeTab === 1 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(1)
                        }}>Comments</h4>
                    <h4 className={activeTab === 2 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(2)
                        }}>Following</h4>
                    <h4 className={activeTab === 3 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(3)
                        }}>Requests</h4>
                </div>
                <div className={activeTab === 1 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>mkbhd</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>mkbhd</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Requested</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>mkbhd</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                </div>

                <div className={activeTab === 2 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Kamil</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Kamil</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Requested</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Kamil</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                </div>

                <div className={activeTab === 3 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Lina</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Lina</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Requested</button>
                    </div>
                    <div className={styles.suggest}>
                        <div className={styles.user}>
                            <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>
                            <div>
                                <h4 className={styles.title}>Lina</h4>
                                <p className={styles.subtitle}>Followed you</p>
                            </div>
                        </div>
                        <button className={styles.btn}>Following</button>
                    </div>
                </div>

            </div>
            <RightLayout/>
        </div>
    );
};

export default Activity;