import React,{useState, useEffect} from 'react';
import styles from "./ProfilePage.module.css";
import Layout from "../../Layout/Layout";
import next from "../../images/svg/profile/Next.svg";
import avatar from "../../images/png/profilePhoto.png";
import repost from "../../images/svg/profile/repost.svg";
import man from "../../images/png/Avatar.png";
import woman from "../../images/png/AvatarGirl.png";
import like from "../../images/svg/icons/Like.svg";
import comment from "../../images/svg/icons/Comment.svg";
import repostIcon from "../../images/svg/icons/Repost.svg";
import send from "../../images/svg/icons/Send.svg";
import ModalPage from "../modalPage/ModalPage";
import ProfileModal from "./ProfileModal";
import ModalListFollow from "./ProfileModaListFollow/ModalListFollow";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {followMe} from "../../../redux/reducers/followSlice";
import {followYou} from "../../../redux/reducers/followYouSlice";
import {profileUser} from "../../../redux/reducers/profileSlice";
import {profileUsername} from "../../../redux/reducers/otherProfile";
import {getQuoteThread} from "../../../redux/reducers/quoteSlice";


const ProfilePage = ({modal, setModal}) => {
    const [modalPage, setModalPage] = useState(false)
    const [modalFollow, setModalFollow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {_data} = useSelector((store) => store.profileSlice)
    const {data} = useSelector((store) => store.followSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const {_data:reposts} = useSelector((store) => store.repostSlice)


    useEffect(()=>{
        dispatch(followMe())
    },[])
    useEffect(()=>{
        dispatch(followYou())
    },[])

    useEffect(()=>{
        dispatch(profileUser())
    },[])

    useEffect(()=>{
        dispatch(profileUsername())
    },[])


    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                    <div className={styles.info}>
                        <div className={styles.information}>
                            <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src={_data?.photo} alt="Avatar"/>
                            <div className={styles.aboutUser}>
                                <h2 className={styles.title}>{_data?.bio}</h2>
                                <p className={styles.subtitle}>{_data?.username}
                                    <a className={styles.threadsNet} target="_blank"
                                       href="https://www.threads.net/">threads.net</a>
                                </p>
                                <p onClick={() => setModalFollow(true)} className={styles.followers}>{data && data.following ? data.following.length : 0}{
                                    data?.following?.length < 1000 ? "" : "K"
                                } followers</p>
                                <ModalListFollow modal={modalFollow} setModal={setModalFollow}/>
                            </div>
                        </div>
                        <img className={styles.nextPage} src={next} alt="Next page"/>
                    </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={() => navigate("/profile/edit")}>Edit profile</button>
                    <button onClick={() => setModalPage(true)} className={styles.btn}>Share profile</button>
                    <ProfileModal modal={modalPage} setModal={setModalPage}/>
                </div>
                <p className={styles.text}>Threads</p>
                {/*<p className={styles.textNotPost}>You haven’t posted any threads yet.</p>*/}
                <div className={styles.repost}>
                    <img src={repost} alt="Repost-icon"/>
                    <span className={styles.span}>You reposted</span>
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
                                <img onClick={() => setModal(true)} className={styles.icon} src={repostIcon} alt="Repost"/>
                                <ModalPage modal={modal} setModal={setModal}/>
                                <img className={styles.icon} src={send} alt="Send"/>
                            </div>
                            <p className={styles.bodyText}>87 likes</p>
                        </div>
                        <p className={styles.timeAgo}>3m</p>
                    </div>
                </div>
                <div className={styles.threads}>
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
                <div className={styles.threads}>
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

export default ProfilePage;