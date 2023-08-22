import React from 'react';
import {useLocation, Link, useNavigate} from "react-router-dom";
import styles from "./CommentPage.module.css";
import Layout from "../../../Layout/Layout";
import RightLayout from "../../../Layout/RightLayout";
import arrow from "../../../images/svg/main/arrow.svg";
import img from "../../../images/png/jobs.png";
import user2 from "../../../images/svg/main/user2.svg";
import add from "../../../images/svg/main/add.svg";
import like from "../../../images/svg/main/like.svg";
import comment from "../../../images/svg/main/comment.svg";
import repost from "../../../images/svg/main/repost.svg";
import send from "../../../images/svg/main/send.svg";
import unknown from "../../../images/svg/main/unknown.svg";
import man from "../../../images/png/Avatar.png";
import repostIcon from "../../../images/svg/icons/Repost.svg";
import ModalPage from "../../../Profile/modalPage/ModalPage";

const CommentPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.mainPage}>
            <Layout/>
            <div className={styles.mainPage__right}>
                <div className={styles.prev} onClick={e => {
                    e.stopPropagation()
                    navigate(-1)
                }}>
                    <img src={arrow} alt="arrow"/>
                    <h3 className={styles.homeTitle}>Threads</h3>
                </div>
                <div className={styles.feeds}>
                    <div className={styles.userPhoto}>
                        <img className={styles.userImg} src={user2} alt="user"/>
                        <img className={styles.subscribe} src={add} alt="add"/>
                    </div>
                    <div className={styles.contents}>
                        <div className={styles.contentTop}>
                            <p className={styles.title}>iamnalimov</p>
                            <p className={styles.subtitle}>1m</p>
                        </div>
                        <p className={styles.titleText}>Focusing is about saying no. Stay focused on what truly
                            matters.</p>
                        <div className={styles.contentBot}>
                            <img style={{cursor: "pointer"}} src={img} alt="image"/>
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
                <div className={styles.threads}>
                    <img className={styles.avatar} src={man} alt="User-man"/>
                    <div className={styles.body}>
                        <div>
                            <h3 className={styles.bodyTitle}>mountain_mama</h3>
                            <p className={styles.bodySubtitle}>Innovation sets leaders apart from followers.</p>
                            <div className={styles.icons}>
                                <img className={styles.icon} src={like} alt="Like"/>
                                <img className={styles.icon} src={comment} alt="Comment"/>
                                <img  className={styles.icon} src={repostIcon} alt="Repost"/>
                                <img className={styles.icon} src={send} alt="Send"/>
                            </div>
                            <p className={styles.bodyText}>87 likes</p>
                        </div>
                        <p className={styles.timeAgo}>3m</p>
                    </div>
                </div>

                <label className={styles.label}>
                    <img className={styles.unknown} src={unknown} alt=""/>
                    <input className={styles.input} type="text" placeholder="Reply to iamnalimov"/>
                </label>

            </div>
            <RightLayout/>
        </div>
    );
};

export default CommentPage;