import React from 'react';
import styles from "./OtherUser.module.css";
import Layout from "../../../Layout/Layout";
import avatar from "../../../images/png/profilePhoto.png";
import next from "../../../images/svg/profile/Next.svg";
import repost from "../../../images/svg/profile/repost.svg";
import man from "../../../images/png/Avatar.png";
import like from "../../../images/svg/icons/Like.svg";
import comment from "../../../images/svg/icons/Comment.svg";
import repostIcon from "../../../images/svg/icons/Repost.svg";
import profilePhoto from "../../../images/svg/main/profilephoto.svg";
import dot from "../../../images/svg/main/dotshorizontal.svg";
import ModalPage from "../../../Profile/modalPage/ModalPage";
import send from "../../../images/svg/icons/Send.svg";
import woman from "../../../images/png/AvatarGirl.png";

const OtherUser = ({modal, setModal}) => {
    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                <div className={styles.info}>
                    <div className={styles.information}>
                        <img src={profilePhoto} alt="Avatar"/>
                        <div className={styles.aboutUser}>
                            <h2 className={styles.title}>Alex Elle</h2>
                            <p className={styles.subtitle}>alex_elle
                                <a className={styles.threadsNet} target="_blank"
                                   href="https://www.threads.net/">threads.net</a>
                            </p>
                            <p>153K followers</p>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}>Follow</button>
                    <img className={styles.threeDot} src={dot} alt="dot"/>
                </div>
                <p className={styles.text}>Threads</p>
                {/*<p className={styles.textNotPost}>You haven’t posted any threads yet.</p>*/}
                <div className={styles.repost}>
                    <img src={repost} alt="Repost-icon"/>
                    <span className={styles.span}>You reposted</span>
                </div>
                <div className={styles.thread}>
                    <img className={styles.avatar} src={man} alt="User-man"/>
                    <div className={styles.body}>
                        <div>
                            <h3 className={styles.bodyTitle}>mountain_mama</h3>
                            <p className={styles.bodySubtitle}>Innovation sets leaders apart from followers.</p>
                            <div className={styles.icons}>
                                <img className={styles.icon} src={like} alt="Like"/>
                                <img className={styles.icon} src={comment} alt="Comment"/>
                                <img onClick={() => setModal(true)} className={styles.icon} src={repostIcon} alt="Repost"/>
                                <ModalPage modal={modal} setModal={setModal}/>
                                <img className={styles.icon} src={send} alt="Send"/>
                            </div>
                            <p className={styles.bodyText}>87 likes</p>
                        </div>
                        <p className={styles.timeAgo}>3m</p>
                    </div>
                </div>
                <div className={styles.thread}>
                    <img className={styles.avatar} src={woman} alt="User-woman"/>
                    <div className={styles.body}>
                        <div>
                            <h3 className={styles.bodyTitle}>jhon_idon</h3>
                            <p className={styles.bodySubtitle}>When I look at you, I see someone who’s working hard</p>
                            <div className={styles.icons}>
                                <img className={styles.icon} src={like} alt="Like"/>
                                <img className={styles.icon} src={comment} alt="Comment"/>
                                <img className={styles.icon} src={repostIcon} alt="Repost"/>
                                <img className={styles.icon} src={send} alt="Send"/>
                            </div>
                            <div className={styles.positionDot}>
                                <p className={styles.bodyText}>2 replies</p>
                                <span className={styles.dot}>.</span>
                                <p className={styles.bodyText}>941 likes</p>
                            </div>
                        </div>
                        <p className={styles.timeAgo}>2h</p>
                    </div>
                </div>
                <div className={styles.thread}>
                    <img className={styles.avatar} src={man} alt="User-man"/>
                    <div className={styles.body}>
                        <div>
                            <h3 className={styles.bodyTitle}>mountain_mama</h3>
                            <p className={styles.bodySubtitle}>Innovation sets leaders apart from followers.</p>
                            <div className={styles.icons}>
                                <img className={styles.icon} src={like} alt="Like"/>
                                <img className={styles.icon} src={comment} alt="Comment"/>
                                <img className={styles.icon} src={repostIcon} alt="Repost"/>
                                <img className={styles.icon} src={send} alt="Send"/>
                            </div>
                            <p className={styles.bodyText}>87 likes</p>
                        </div>
                        <p className={styles.timeAgo}>3m</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherUser;