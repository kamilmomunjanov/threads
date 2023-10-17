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
import {createThreads, deleteThreads, getThreads} from "../../../redux/reducers/threadSlice";
import {useForm} from "react-hook-form";
import user from "../../images/svg/main/unknown.svg";
import {oneUser} from "../../../redux/reducers/profilUserSlice";
import {threadsFollowing} from "../../../redux/reducers/threadsFollowing";
import activity  from "../../UI/svg1/like.svg";
import axios from "axios";
import {getTheadId} from "../../../redux/reducers/getThreadsIdslice";
import {profileUser} from "../../../redux/reducers/profileSlice";
import {repostThread} from "../../../redux/reducers/repostSlice";



const MainPage = ({modal, setModal}) => {
    const [activeTab, setActiveTab] = useState(1)
    const [triggerEffects, setTriggerEffects] = useState(false);
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
    const [likedThreads, setLikedThreads] = useState([])
    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onChange",
    })

    useEffect(() => {
        dispatch(threadsFollowing())
            }, [])

    useEffect(()=>{
        dispatch(profileUser())
    },[])


    const oneUserProfile = (username) => {
        dispatch(oneUser({username}))
    }

    const handleLike = (id) => {
        if (likedThreads.includes(id)) {
            // Пользователь уже лайкнул этот тред, выполните действие отмены лайка
            axios.post(`http://aldiyar-backender.org.kg/api/thread/${id}/like/`, null, {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
            }).then(({data}) => {
                setLikedThreads(prevLikedThreads => prevLikedThreads.filter(threadId => threadId !== id));
            });
        } else {
            // Пользователь еще не лайкнул этот тред, выполните действие лайка
            axios.post(`http://aldiyar-backender.org.kg/api/thread/${id}/like/`, null, {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
            }).then(({data}) => {
                setLikedThreads(prevLikedThreads => [...prevLikedThreads, id]);
            });
        }
        setTriggerEffects(true)

    }



    const handleSubmitThread = (data, e) => {
        try {
            const content = data.text
            const photo = imageAddRef.current.files[0]
            const formData = new FormData()
            formData.append("content", content);
            formData.append("photos", photo)
            dispatch(createThreads(formData))
            data.text = ""
            setTriggerEffects(true)
        } catch (error) {
            console.warn(error)
            alert("Ошибка при добавлении треда")
        }
    }




    useEffect(() => {
        dispatch(getThreads())
        setTriggerEffects(false)
    }, [triggerEffects])


    const handleGetThead = (id) => {
        dispatch(getTheadId({id}))
    }

    const deleteThread = (id) => {
        dispatch(deleteThreads({id}))
        setTriggerEffects(true)
    }

    // const quoteAdd = (id) => {
    //     const content = data?.map(item => item.content)
    //     dispatch(repostThread({id, content}))
    // }


    console.log(data)

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
                            <img style={{width: "40px", height: "40px", borderRadius: "50%"}} src={_data?.photo}
                                 alt="Avatar"/>
                            <div className={styles.createThreads}>
                                <h4 className={styles.name}>{_data?.username}</h4>
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
                        data?.map((item) =>
                            <div className={activeTab === 1 ? "tabs__content active" : "tabs__content"}>
                                <div className={styles.feed}>
                                    <div className={styles.userPhoto}>
                                        {
                                            item?.author?.photo
                                                ? <>
                                                    <img style={{width: "40px", height: "40px", borderRadius: "50%"}}
                                                         src={item?.author?.photo} alt="Avatar"/>
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
                                            }}>{item?.author?.username}</p>
                                            <p className={styles.subtitle}>5m
                                                 <span className={styles.dotDelete} onClick={(e)=>{
                                                    e.stopPropagation()
                                                    e.preventDefault()
                                                    deleteThread(item?.id)
                                                }}>...</span>
                                            </p>
                                        </div>
                                        <p className={styles.titleText}>{item?.content}</p>
                                        <div className={styles.contentBot}>
                                            {
                                                item?.photos[0]?.photo
                                                    ? <img style={{
                                                        width: "570px",
                                                        height: "316px",
                                                        cursor: "pointer",
                                                        borderRadius: "8px"
                                                    }}
                                                           src={item?.photos[0]?.photo} alt="image"/>
                                                    : ""
                                            }




                                            <div className={styles.activity}>
                                                <Link to="#">

                                                    {
                                                        likedThreads?.includes(item.id)
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
                                                                              src={comment} onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    handleGetThead(item.id)
                                                    navigate("/home/comment")
                                                }}
                                                                              alt="comment"/></Link>
                                                <Link to="#">
                                                    <img onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        // quoteAdd(item.id)
                                                    }} className={styles.activityBtn} src={repost} alt="repost"/>
                                                </Link>
                                                <Link to="#"><img className={styles.activityBtn} src={send}
                                                                  alt="send"/></Link>
                                            </div>
                                            <div className={styles.positionDot}>
                                                <p className={styles.bodyText}>0 replies</p>
                                                <p className={styles.bodyText}>{item?.likes}{
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
                                            }}>{item?.author?.username}</p>
                                            <p className={styles.subtitle}>5m
                                                <span className={styles.dotDelete} onClick={(e)=>{
                                                    e.stopPropagation()
                                                    e.preventDefault()
                                                    deleteThread(item?.id)
                                                }}>...</span>
                                            </p>
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
                                                {
                                                    likedThreads?.includes(item.id)
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
                                                <Link to="/home/comment"><img className={styles.activityBtn}
                                                                              src={comment} onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    handleGetThead(item.id)
                                                    navigate("/home/comment")
                                                }}
                                                                              alt="comment"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={repost}
                                                                  alt="repost"/></Link>
                                                <Link to="#"><img className={styles.activityBtn} src={send}
                                                                  alt="send"/></Link>
                                            </div>
                                            <div className={styles.positionDot}>
                                                <p className={styles.bodyText}>0 replies</p>
                                                <span className={styles.dot}>.</span>
                                                <p className={styles.bodyText}>{item?.likes}{
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