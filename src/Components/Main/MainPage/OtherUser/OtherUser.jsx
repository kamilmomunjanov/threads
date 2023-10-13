import React,{useState, useEffect} from 'react';
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
import ProfileModal from "../../../Profile/ProfilePage/ProfileModal";
import OtherProfileModal from "./OtherProfileModal";
import {useDispatch, useSelector} from "react-redux";
import ModalListFollow from "../../../Profile/ProfilePage/ProfileModaListFollow/ModalListFollow";
import user from "../../../images/svg/main/unknown.svg";
import {followUser} from "../../../../redux/reducers/followByUserSlice";
import {followYou} from "../../../../redux/reducers/followYouSlice";
import {oneUser} from "../../../../redux/reducers/profilUserSlice";


const OtherUser = ({modal, setModal}) => {
    const [modalPage, setModalPage] = useState(false)
    const [modalFollow, setModalFollow] = useState(false)
    const {data} = useSelector((store) => store.profileUserSlice)
    const {data:followMe} = useSelector((store) => store.followSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const dispatch = useDispatch()

    function handleFollowUser(id) {
        dispatch(followUser({id}))
    }
    useEffect(() => {
        dispatch(followYou())
    }, [])

    useEffect(() => {
        dispatch(oneUser())
    }, [])



    return (
        <div className={styles.profilePage}>
            <Layout/>
            <div className={styles.loginPage__right}>
                <div className={styles.info}>
                    <div className={styles.information}>
                        {
                            data?.photo
                            ? <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src={data?.photo} alt="Avatar"/>
                                : <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src={user} alt=""/>
                        }

                        <div className={styles.aboutUser}>
                            <h2 className={styles.title}>{data?.username}</h2>
                            <p className={styles.subtitle}>{data?.name}
                                <a className={styles.threadsNet} target="_blank"
                                   href="https://www.threads.net/">threads.net</a>
                            </p>
                            <p onClick={() => setModalFollow(true)} className={styles.followers}>{data?.number_of_followers}{
                                data?.number_of_followers < 1000 ? "" : "K"
                            } followers</p>
                            <ModalListFollow modal={modalFollow} setModal={setModalFollow}/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button type="button" className={styles.btn} onClick={() => {
                        handleFollowUser(data.user)
                    }}>
                        {dataF?.following?.some((user) => user.follows === data?.username) ? "Following" : "Follow"}
                    </button>
                    <img onClick={() => setModalPage(true)} className={styles.threeDot} src={dot} alt="dot"/>
                    <OtherProfileModal modal={modalPage} setModal={setModalPage}/>
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