import React, {useState, useEffect, useRef} from 'react';
import {useLocation, Link, useNavigate} from "react-router-dom";
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
import {useDispatch, useSelector} from "react-redux";
import {createThreads, getThreads} from "../../../redux/reducers/threadSlice";
import {useForm} from "react-hook-form";


const MainPage = ({modal, setModal}) => {
    const [activeTab, setActiveTab] = useState(1)
    const [currentTime, setCurrentTime] = useState(new Date());
    const [text, setText] = useState("")
    const [readOnly, setReadOnly] = useState("Anyone can reply")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const imageAddRef = useRef(null)
    const textRef = useRef(null)
    const {data, status, error} = useSelector((store) => store.threadSlice)
    const {_data} = useSelector((store) => store.profileSlice)
    const {
        register,
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange",
        // values: _data
    })

    const datetimeString = data.threads[0].created;
    const datetime = new Date(datetimeString);

    const hours = datetime.getUTCHours().toString().padStart(2, '0');
    const minutes = datetime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = datetime.getUTCSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;


    const handleSubmitThread = (data, e) => {
        // console.log(data)
        // // console.log(data.image[0].name)
        // console.log(e.target[2].files[0])
        console.log(imageAddRef.current.files[0])
        try {
            const content = data.text
            const photo = imageAddRef.current.files[0]
            const formData = new FormData()
            formData.append("content", content);
            formData.append("photos", photo)
            dispatch(createThreads(formData))
        } catch (error) {
            console.warn(error)
            alert("Ошибка при добавлении треда")
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hour = currentTime.getHours().toString().padStart(2, '0');
    const minute = currentTime.getMinutes().toString().padStart(2, '0');
    const second = currentTime.getSeconds().toString().padStart(2, '0');
    const timeToday = `${hour}:${minute}:${second}`;



    const startDate = new Date(); // Начальная дата
    const endDate = new Date();   // Конечная дата

    startDate.setHours(datetime.getUTCHours()); // Устанавливаем часы начальной даты
    endDate.setHours(currentTime.getHours());   // Устанавливаем часы конечной даты

    const timeDifference = endDate - startDate; // Разница в миллисекундах
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Переводим в часы
    const minutesDifference = hoursDifference * 60; // Переводим в минуты

    const hoursMinus = hoursDifference
    const minutesMinus = hoursDifference % 60;

    const displayTime = hoursMinus > 0 ? `${hoursMinus}h` : `${minutesMinus}m`;



    useEffect(() => {
        dispatch(getThreads())
    }, [])

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
                            <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={_data.photo} alt="Avatar"/>
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

                    <div style={{display:"flex", flexDirection:"column"}}>

                    {
                        data.threads.map((item)=>
                            <div className={styles.feed}>
                                <div className={styles.userPhoto}>
                                    <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={_data.photo} alt="Avatar"/>
                                    <img className={styles.subscribe} src={add} alt="add"/>
                                </div>
                                <div className={styles.content}>
                            <div className={styles.contentTop}>
                                <p className={styles.title} onClick={(e) => {
                                    e.stopPropagation()
                                    navigate("/home/other-user")
                                }}>{item.author}</p>
                                <p className={styles.subtitle}>{
                                    displayTime
                                }</p>
                            </div>
                            <div className={styles.contentBot}>
                                <img style={{width:"567px",height:"316px",cursor: "pointer"}} src={item.photos[0]?.photo} alt="image"/>

                                <div className={styles.activity}>
                                    <Link to="#"><img className={styles.activityBtn} src={like} alt="like"/></Link>
                                    <Link to="/home/comment"><img className={styles.activityBtn} src={comment}
                                                                  alt="comment"/></Link>
                                    <Link to="#"><img className={styles.activityBtn} src={repost} alt="repost"/></Link>
                                    <Link to="#"><img className={styles.activityBtn} src={send} alt="send"/></Link>
                                </div>
                                <div className={styles.positionDot}>
                                    <p className={styles.bodyText}>640 replies</p>
                                    <span className={styles.dot}>.</span>
                                    <p className={styles.bodyText}>{item.likes}{
                                        item.likes < 1000 ? "" : "K"
                                    } likes</p>
                                </div>
                            </div>
                                </div>
                        </div>)
                    }

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

                {/*<div className={styles.feed}>*/}
                {/*    <div className={styles.userPhoto}>*/}
                {/*        <img className={styles.userImg} src={user} alt="user"/>*/}
                {/*        <img className={styles.subscribe} src={add} alt="add"/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.content}>*/}
                {/*        <div className={styles.contentTop}>*/}
                {/*            <p className={styles.title} onClick={(e) => {*/}
                {/*                e.stopPropagation()*/}
                {/*                navigate("/home/other-user")*/}
                {/*            }}>sarcastic_us</p>*/}
                {/*            <p className={styles.subtitle}>12h</p>*/}
                {/*        </div>*/}
                {/*        <div className={styles.contentBot}>*/}
                {/*            <img style={{cursor: "pointer"}} src={image} alt="image"/>*/}
                {/*            <div className={styles.activity}>*/}
                {/*                <Link to="#"><img className={styles.activityBtn} src={like} alt="like"/></Link>*/}
                {/*                <Link to="/home/comment"><img className={styles.activityBtn} src={comment}*/}
                {/*                                              alt="comment"/></Link>*/}
                {/*                <Link to="#"><img className={styles.activityBtn} src={repost} alt="repost"/></Link>*/}
                {/*                <Link to="#"><img className={styles.activityBtn} src={send} alt="send"/></Link>*/}
                {/*            </div>*/}
                {/*            <div className={styles.positionDot}>*/}
                {/*                <p className={styles.bodyText}>640 replies</p>*/}
                {/*                <span className={styles.dot}>.</span>*/}
                {/*                <p className={styles.bodyText}>12K likes</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={styles.feed}>*/}
                {/*    <div className={styles.userPhoto}>*/}
                {/*        <img className={styles.userImg} src={user2} alt="user"/>*/}
                {/*        <img className={styles.subscribe} src={add} alt="add"/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.content}>*/}
                {/*        <div className={styles.contentTop}>*/}
                {/*            <p className={styles.title}>iamnalimov</p>*/}
                {/*            <p className={styles.subtitle}>1m</p>*/}
                {/*        </div>*/}
                {/*        <p className={styles.titleText}>Focusing is about saying no. Stay focused on what truly*/}
                {/*            matters.</p>*/}
                {/*        <div className={styles.contentBot}>*/}
                {/*            <img style={{cursor: "pointer"}} src={img} alt="image"/>*/}
                {/*            <div className={styles.activity}>*/}
                {/*                <img className={styles.activityBtn} src={like} alt="like"/>*/}
                {/*                <img className={styles.activityBtn} src={comment} alt="comment"/>*/}
                {/*                <img className={styles.activityBtn} src={repost} alt="repost"/>*/}
                {/*                <img className={styles.activityBtn} src={send} alt="send"/>*/}
                {/*            </div>*/}
                {/*            <div className={styles.positionDot}>*/}
                {/*                <p className={styles.bodyText}>640 replies</p>*/}
                {/*                <span className={styles.dot}>.</span>*/}
                {/*                <p className={styles.bodyText}>12K likes</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <RightLayout/>
        </div>
    );
};

export default MainPage;