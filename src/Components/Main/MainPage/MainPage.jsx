import React, {useState} from 'react';
import avatar from "../../images/svg/main/avatar.svg"
import media from "../../images/svg/main/Vector.svg"
import Layout from "../../Layout/Layout";
import user from "../../images/svg/main/user.svg";
import like from "../../images/svg/main/like.svg";
import comment from "../../images/svg/main/comment.svg";
import send from "../../images/svg/main/send.svg";
import add from "../../images/svg/main/add.svg";
import repost from "../../images/svg/main/repost.svg";
import user2 from "../../images/svg/main/user2.svg";
import image from "../../images/png/img.png";
import img from "../../images/png/Image.png";
import styles from "./MainPage.module.css";
import RightLayout from "../../Layout/RightLayout";
import MainModal from "./Modal/MainModal";

const MainPage = ({modal, setModal}) => {
    const [activeTab, setActiveTab] = useState(1)
    const [readOnly, setReadOnly] = useState("Anyone can reply")

    return (
        <div className={styles.mainPage}>
            <Layout/>
            <div className={styles.mainPage__right}>
                <h3 className={styles.homeTitle}>Home</h3>
                <div className={styles.sections}>
                    <h4 className={activeTab === 1 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(1)
                        }}>For you</h4>
                    <h4 className={activeTab === 2 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(2)
                        }}>Following</h4>
                </div>
                <div className={styles.threads}>
                    <div className={styles.top}>
                        <div className={styles.writeThreads}>
                            <img src={avatar} alt="Avatar"/>
                            <div className={styles.createThreads}>
                                <h4 className={styles.name}>malevicz</h4>
                                <textarea className={styles.textarea} name="threads"
                                          placeholder="Start a thread..."></textarea>
                            </div>
                        </div>
                        <div className={styles.sendThreads}>
                            <button className={styles.btn}>Post</button>
                        </div>
                    </div>
                    <div className={styles.under}>
                        <div>
                            <label htmlFor="image">
                                <img className={styles.media} src={media} alt="media"/>
                            </label>
                            <input className={styles.input} id="image" type="file"/>
                        </div>
                        <p className={styles.text} onClick={e => {
                            e.stopPropagation()
                            setModal(true)
                        }}>{readOnly}</p>
                        <MainModal read={readOnly} setRead={setReadOnly} modal={modal} setModal={setModal}/>
                    </div>
                </div>

                <div className={styles.feed}>
                    <div className={styles.userPhoto}>
                        <img className={styles.userImg} src={user} alt="user"/>
                        <img className={styles.subscribe} src={add} alt="add"/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTop}>
                            <p className={styles.title}>sarcastic_us</p>
                            <p className={styles.subtitle}>12h</p>
                        </div>
                        <div className={styles.contentBot}>
                            <img style={{cursor:"pointer"}} src={image} alt="image"/>
                            <div className={styles.activity}>
                                <img className={styles.activityBtn} src={like} alt="like"/>
                                <img className={styles.activityBtn} src={comment} alt="comment"/>
                                <img className={styles.activityBtn} src={repost} alt="repost"/>
                                <img className={styles.activityBtn} src={send} alt="send"/>
                            </div>
                            <div className={styles.positionDot}>
                                <p className={styles.bodyText}>640 replies</p>
                                <span className={styles.dot}>.</span>
                                <p className={styles.bodyText}>12K likes</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.feed}>
                    <div className={styles.userPhoto}>
                        <img className={styles.userImg} src={user2} alt="user"/>
                        <img className={styles.subscribe} src={add} alt="add"/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentTop}>
                            <p className={styles.title}>iamnalimov</p>
                            <p className={styles.subtitle}>1m</p>
                        </div>
                        <p className={styles.titleText}>Focusing is about saying no. Stay focused on what truly matters.</p>
                        <div className={styles.contentBot}>
                            <img style={{cursor:"pointer"}} src={img} alt="image"/>
                            <div className={styles.activity}>
                                <img className={styles.activityBtn} src={like} alt="like"/>
                                <img className={styles.activityBtn} src={comment} alt="comment"/>
                                <img className={styles.activityBtn} src={repost} alt="repost"/>
                                <img className={styles.activityBtn} src={send} alt="send"/>
                            </div>
                            <div className={styles.positionDot}>
                                <p className={styles.bodyText}>640 replies</p>
                                <span className={styles.dot}>.</span>
                                <p className={styles.bodyText}>12K likes</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <RightLayout/>
        </div>
    );
};

export default MainPage;