import React,{useState} from 'react';
import styles from "./MainPage.module.css";
import Layout from "../../Layout/Layout";

const MainPage = ({modal, setModal}) => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className={styles.mainPage}>
            <Layout/>
            <div className={styles.mainPage__right}>
                <h3 className={styles.homeTitle}>Home</h3>
                <div className={styles.sections}>
                    <h4 className={activeTab === 1 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`} onClick={e => {
                        e.stopPropagation()
                        setActiveTab(1)
                    }}>For you</h4>
                    <h4 className={activeTab === 2 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`} onClick={e => {
                        e.stopPropagation()
                        setActiveTab(2)
                    }}>Following</h4>
                </div>
            </div>
        </div>
    );
};

export default MainPage;