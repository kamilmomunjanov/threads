import React,{useEffect, useState} from 'react';
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
import CommentModal from "./CommentModal";
import {useDispatch, useSelector} from "react-redux";
import {getTheadId} from "../../../../redux/reducers/getThreadsIdslice";
import {useForm} from "react-hook-form";
import {commentAdd, commentDelete, commentDeleteLocal, commentGet} from "../../../../redux/reducers/commentSlice";
import user from "../../../images/svg/main/unknown.svg";










const CommentPage = ({modal, setModal}) => {
    const [triggerEffects, setTriggerEffects] = useState(false);
    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.getThreadIdSlice)
    const {data:commentApi} = useSelector((store) => store.commentSlice)
    const {_data} = useSelector((store) => store.profileSlice)
    const [formattedTime, setFormattedTime] = useState("")
    const {
        register,
        handleSubmit,
    } = useForm({
        mode: "onChange",
    })


    useEffect(()=>{
        dispatch(getTheadId())
    },[])

    useEffect(() => {
        dispatch(commentGet())
        setTriggerEffects(false)
    },[triggerEffects])

    const handleAddComment = (data) => {
        const comment = data.text
        const id = data.id
        console.log(id)
        console.log(data)
        dispatch(commentAdd({comment, id}))
        dispatch(commentGet({id}))
        data.text = ""
        setTriggerEffects(true)
    }

    console.log(commentApi)


    const deleteComment = (id) => {
        dispatch(commentDeleteLocal(id))
        setTriggerEffects(true)
    }







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
                        <img className={styles.userImg}
                             style={{width: "40px", height: "40px", borderRadius: "50%"}}
                             src={data?.author?.photo} alt="user"/>
                        <img className={styles.subscribe} src={add} alt="add"/>
                    </div>
                    <div className={styles.contents}>
                        <div className={styles.contentTop}>
                            <p className={styles.title}>{data?.author?.username}</p>
                            <p className={styles.subtitle}>{data?.created}m</p>
                        </div>
                        <p className={styles.titleText}>{data?.content}</p>
                        <div className={styles.contentBot}>
                            <img style={{
                                width: "570px",
                                height: "316px",
                                cursor: "pointer",
                                borderRadius: "8px"
                            }} src={data?.photos[0]?.photo} alt="image"/>
                            <div className={styles.activity}>
                                <img className={styles.activityBtn} src={like} alt="like"/>
                                <img className={styles.activityBtn} src={comment} alt="comment"/>
                                <img onClick={() => setModal(true)} className={styles.activityBtn} src={repost} alt="repost"/>
                                <CommentModal modal={modal} setModal={setModal}/>
                                <img className={styles.activityBtn} src={send} alt="send"/>
                            </div>
                            <div className={styles.positionDot}>
                                <p className={styles.bodyText}>{data?.comments} replies</p>
                                <span className={styles.dot}>.</span>
                                <p className={styles.bodyText}>{data?.likes} likes</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    {
                        commentApi?.comments?.map(item =>
                            <div className={styles.threads}>
                                <div>
                                    {
                                        item?.author?.photo
                                            ? <img style={{
                                                cursor: "pointer",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className={styles.avatar}
                                                   src={item?.author?.photo}
                                                   alt="User-photo"/>
                                            : <img  className={styles.avatar} style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                    }
                                </div>

                                <div className={styles.body}>
                                    <div>
                                        <h3 className={styles.bodyTitle}>{item?.author?.username}</h3>
                                        <p className={styles.bodySubtitle}>{item?.content}</p>
                                        <div className={styles.icons}>
                                            <img className={styles.icon} src={like} alt="Like"/>
                                            <img className={styles.icon} src={comment} alt="Comment"/>
                                            <img  className={styles.icon} src={repostIcon} alt="Repost"/>
                                            <img className={styles.icon} src={send} alt="Send"/>
                                        </div>
                                        <p className={styles.bodyText}>{item?.likes} likes</p>
                                    </div>
                                    <div className={styles.commentData}>
                                    <p className={styles.timeAgo}>30m</p>
                                    <p className={styles.dotDelete} onClick={(e)=>{
                                        e.stopPropagation()
                                        e.preventDefault()
                                        deleteComment(item?.id)
                                    }}>...</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <form onSubmit={handleSubmit((data) => handleAddComment(data))}>
                <label className={styles.label}>
                    <img style={{width: "32px", height: "32px", borderRadius: "50%"}} className={styles.unknown} src={_data?.photo ? _data?.photo : unknown} alt=""/>
                    <input className={styles.input} {...register("text",)} type="text" placeholder={`Reply to ${data?.author?.username}`}/>
                    <input type="hidden" {...register(`id`)} value={data?.id}/>
                </label>
                </form>

            </div>
            <RightLayout/>
        </div>
    );
};

export default CommentPage;