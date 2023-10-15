import React, {useState, useEffect, useRef} from 'react';
import {useLocation, Link, useNavigate} from "react-router-dom";
import media from "../../images/svg/main/Vector.svg"
import Layout from "../../Layout/Layout";
import like from "../../images/svg/main/like.svg";
import comment from "../../images/svg/main/comment.svg";
import send from "../../images/svg/main/send.svg";
import add from "../../images/svg/main/add.svg";
import repost from "../../images/svg/main/repost.svg";
import user2 from "../../images/svg/main/user2.svg";
import img from "../../images/png/Image.png";
import styles from "./MainPage.module.css";
import RightLayout from "../../Layout/RightLayout";
import MainModal from "./Modal/MainModal";
import {useDispatch, useSelector} from "react-redux";
import {createThreads, getThreads} from "../../../redux/reducers/threadSlice";
import {useForm} from "react-hook-form";
import user from "../../images/svg/main/unknown.svg";
import {oneUser} from "../../../redux/reducers/profilUserSlice";
import {threadsFollowing} from "../../../redux/reducers/threadsFollowing";
import {likeThread} from "../../../redux/reducers/likeSlice";
import activity  from "../../UI/svg1/like.svg";
import axios from "axios";


const MainPage = ({modal, setModal}) => {
    const [activeTab, setActiveTab] = useState(1)
    const [triggerEffect, setTriggerEffect] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [readOnly, setReadOnly] = useState("Anyone can reply")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const imageAddRef = useRef(null)
    const textRef = useRef(null)
    const {data} = useSelector((store) => store.threadSlice)
    const {_data} = useSelector((store) => store.profileSlice)
    const {data: userOne} = useSelector((store) => store.profileUserSlice)
    const {data: threadFollow} = useSelector((store) => store.threadsFollowingSlice)
    const {likeDone} = useSelector((store) => store.likeSlice)
    const [threads, setThreads] = useState()
    const [text, setText] = useState("")
    const [getLike, setGetLike] = useState(null)
    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onChange",
    })

    useEffect(() => {
        dispatch(threadsFollowing())
            }, [])


    console.log(threadFollow)

    const oneUserProfile = (username) => {
        dispatch(oneUser({username}))
    }

    const handleLike = (id) => {
        axios.post(`http://aldiyar-backender.org.kg/api/thread/${id}/like/`,null,
        {
            headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
        }).then(({data}) => console.log(data))


    }

    // const datetimeString = data.created
    //
    //
    // const datetime = new Date(datetimeString);
    //
    // const hours = datetime.getUTCHours().toString().padStart(2, '0');
    // const minutes = datetime.getUTCMinutes().toString().padStart(2, '0');
    // const seconds = datetime.getUTCSeconds().toString().padStart(2, '0');
    //
    // const timeString = `${hours}:${minutes}:${seconds}`;


    const handleSubmitThread = (data, e) => {
        console.log(imageAddRef.current.files[0])
        try {
            const content = data.text
            const photo = imageAddRef.current.files[0]
            const formData = new FormData()
            formData.append("content", content);
            formData.append("photos", photo)
            dispatch(createThreads(formData))
            setText("")
            setTriggerEffect(true)
        } catch (error) {
            console.warn(error)
            alert("Ошибка при добавлении треда")
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentTime(new Date());
    //     }, 1000);
    //
    //     return () => clearInterval(interval);
    // }, []);
    //
    // const hour = currentTime.getHours().toString().padStart(2, '0');
    // const minute = currentTime.getMinutes().toString().padStart(2, '0');
    // const second = currentTime.getSeconds().toString().padStart(2, '0');
    // const timeToday = `${hour}:${minute}:${second}`;


    // const startDate = new Date(); // Начальная дата
    // const endDate = new Date();   // Конечная дата
    //
    // startDate.setHours(datetime.getUTCHours()); // Устанавливаем часы начальной даты
    // endDate.setHours(currentTime.getHours());   // Устанавливаем часы конечной даты
    //
    // const timeDifference = endDate - startDate; // Разница в миллисекундах
    // const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Переводим в часы
    // const minutesDifference = hoursDifference * 60; // Переводим в минуты
    //
    // const hoursMinus = hoursDifference
    // const minutesMinus = hoursDifference % 60;
    //
    // const displayTime = hoursMinus > 0 ? `${hoursMinus}h` : `${minutesMinus}m`;


    useEffect(() => {
        dispatch(getThreads())
        setTriggerEffect(false)
    }, [triggerEffect])



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
                <form onSubmit={handleSubmit(handleSubmitThread)} className={styles.threads}>
                    <div className={styles.top}>
                        <div className={styles.writeThreads}>
                            <img style={{width: "40px", height: "40px", borderRadius: "50%"}} src={_data.photo}
                                 alt="Avatar"/>
                            <div className={styles.createThreads}>
                                <h4 className={styles.name}>{_data.username}</h4>
                                <textarea ref={textRef} {...register("text",)} className={styles.textarea}
                                          placeholder="Start a thread..."></textarea>
                            </div>
                        </div>
                        <div className={styles.sendThreads}>
                            <button type="onSubmit" className={styles.btn}>Post</button>
                        </div>
                    </div>
                    <div className={styles.under}>
                        <div>
                            <img onClick={(e) => {
                                e.stopPropagation()
                                imageAddRef.current.click()
                            }} className={styles.media} src={media} alt="media"/>
                            <input ref={imageAddRef} className={styles.input} type="file"/>
                        </div>
                        <p className={styles.text} onClick={e => {
                            e.stopPropagation()
                            setModal(true)
                        }}>{readOnly}</p>
                        <MainModal read={readOnly} setRead={setReadOnly} modal={modal} setModal={setModal}/>
                    </div>
                </form>

                <div>

                    {
                        data.map((item) =>
                            <div className={activeTab === 1 ? "tabs__content active" : "tabs__content"}>
                                <div className={styles.feed}>
                                    <div className={styles.userPhoto}>
                                        {
                                            item.author.photo
                                                ? <>
                                                    <img style={{width: "40px", height: "40px", borderRadius: "50%"}}
                                                         src={item.author.photo} alt="Avatar"/>
                                                    <img className={styles.subscribe} src={add} alt="add"/>
                                                </>
                                                : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                        }
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.contentTop}>
                                            <p className={styles.title} onClick={(e) => {
                                                e.stopPropagation()
                                                oneUserProfile(item?.author?.username)
                                                navigate("/home/other-user")
                                            }}>{item.author.username}</p>
                                            <p className={styles.subtitle}>{
                                                item.created
                                            }</p>
                                        </div>
                                        <p className={styles.titleText}>{item.content}</p>
                                        <div className={styles.contentBot}>
                                            {
                                                item.photos[0]?.photo
                                                    ? <img style={{
                                                        width: "570px",
                                                        height: "316px",
                                                        cursor: "pointer",
                                                        borderRadius: "8px"
                                                    }}
                                                           src={item.photos[0]?.photo} alt="image"/>
                                                    : ""
                                            }




                                            <div className={styles.activity}>
                                                <Link to="#">

                                                    {
                                                        getLike === "like thread"
                                                            ? <img className={styles.activityBtn} src={activity}
                                                                   alt="like" onClick={(e) => {
                                                                e.preventDefault()
                                                                e.stopPropagation()
                                                                handleLike(item.id)
                                                            }}/>
                                                            : <img className={styles.activityBtn} src={like}
                                                                   alt="like" onClick={(e) => {
                                                                e.preventDefault()
                                                                e.stopPropagation()
                                                                handleLike(item.id)
                                                            }}/>
                                                    }

                                                    </Link>
                                                <Link to="/home/comment"><img className={styles.activityBtn}
                                                                              src={comment}
                                                                              alt="comment"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={repost}
                                                                  alt="repost"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={send}
                                                                  alt="send"/></Link>
                                            </div>
                                            <div className={styles.positionDot}>
                                                <p className={styles.bodyText}>0 replies</p>
                                                <span className={styles.dot}>.</span>
                                                <p className={styles.bodyText}>{item.likes}{
                                                    item.likes < 1000 ? "" : "K"
                                                } likes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {
                        threadFollow?.map((item) =>
                            <div className={activeTab === 2 ? "tabs__content active" : "tabs__content"}>
                                <div className={styles.feed}>
                                    <div className={styles.userPhoto}>
                                        {
                                            item.author.photo
                                                ? <>
                                                    <img style={{width: "40px", height: "40px", borderRadius: "50%"}}
                                                         src={item.author.photo} alt="Avatar"/>
                                                    <img className={styles.subscribe} src={add} alt="add"/>
                                                </>
                                                : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                        }
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.contentTop}>
                                            <p className={styles.title} onClick={(e) => {
                                                e.stopPropagation()
                                                oneUserProfile(item?.author?.username)
                                                navigate("/home/other-user")
                                            }}>{item.author.username}</p>
                                            <p className={styles.subtitle}>{
                                                item.created
                                            }</p>
                                        </div>
                                        <p className={styles.titleText}>{item.content}</p>
                                        <div className={styles.contentBot}>
                                            {
                                                item.photos[0]?.photo
                                                    ? <img style={{
                                                        width: "570px",
                                                        height: "316px",
                                                        cursor: "pointer",
                                                        borderRadius: "8px"
                                                    }}
                                                           src={item.photos[0]?.photo} alt="image"/>
                                                    : ""
                                            }


                                            <div className={styles.activity}>
                                                <Link to="#">{
                                                    getLike === "like thread"
                                                        ? <img className={styles.activityBtn} src={like}
                                                               alt="like"/>
                                                        : <img className={styles.activityBtn} src={activity}
                                                               alt="like"/>
                                                }
                                                    </Link>
                                                <Link to="/home/comment"><img className={styles.activityBtn}
                                                                              src={comment}
                                                                              alt="comment"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={repost}
                                                                  alt="repost"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={send}
                                                                  alt="send"/></Link>
                                            </div>
                                            <div className={styles.positionDot}>
                                                <p className={styles.bodyText}>0 replies</p>
                                                <span className={styles.dot}>.</span>
                                                <p className={styles.bodyText}>{item.likes}{
                                                    item.likes < 1000 ? "" : "K"
                                                } likes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>


            </div>
            <RightLayout/>
        </div>
    );
};

export default MainPage;