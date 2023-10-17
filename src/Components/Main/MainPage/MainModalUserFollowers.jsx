import React,{useEffect, useState} from 'react';
import style from "./MainModalUserFollowers.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {allUser} from "../../../redux/reducers/allUserSlice";
import {followMe} from "../../../redux/reducers/followSlice";
import {followUser} from "../../../redux/reducers/followByUserSlice";
import close from "../../images/svg/followers/close.svg";
import search from "../../images/svg/followers/search.svg";
import user from "../../images/svg/main/unknown.svg";
import image from "../../images/svg/followers/Avat.svg";
import {oneUser, oneUserInfo} from "../../../redux/reducers/profilUserSlice";
import {followersOtherUser} from "../../../redux/reducers/followersOtherUser";
import {followYou} from "../../../redux/reducers/followYouSlice";

const MainModalUserFollowers = ({modal, setModal}) => {
    const dispatch = useDispatch()
    const {data: allUserGet} = useSelector((store) => store.allUserSlice)
    const {data: followerOtherUser} = useSelector((store) => store.followerOtherUserSlice)
    const [triggerEffects, setTriggerEffects] = useState(false)
    const {data} = useSelector((store) => store.followSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const {_data} = useSelector((store) => store.otherProfileSlice)
    const [getData, setGetData] = useState(null)
    const [getDataFollowers, setGetDataFollowers] = useState(null)
    const navigate = useNavigate()

    const oneUserProfile = (username) => {
        dispatch(oneUser({username}))
        navigate("/home/other-user")
    }

    useEffect(() => {
        dispatch(allUser())
    }, [])

    useEffect(() => {
        dispatch(followYou())
        setTriggerEffects(false)
    }, [triggerEffects])

    useEffect(() => {
        dispatch(followersOtherUser())
        setTriggerEffects(false)
    }, [triggerEffects])

    useEffect(() => {
        dispatch(followMe())
        setTriggerEffects(false)
    }, [triggerEffects])


    function handleFollowUser(id) {
        dispatch(followUser({id}))
        setTriggerEffects(true)
    }

    const followers = followerOtherUser?.following?.map(item => item.followers)
    const myFollowers = allUserGet?.results?.filter(item => followers?.includes(item?.username))

    return (
        <div className={modal ? `${style.modalFollow} ${style.active}` : `${style.modalFollow}`}>
            <div className={modal ? `${style.modalFollow__content} ${style.active}` : `${style.modalFollow__content}`}
                 onClick={e => e.stopPropagation()}>
                <img onClick={() => setModal(false)} className={style.closeIcon} src={close} alt="Close"/>
                <div className={style.header}>
                    <h3 className={style.header__title}>Followers</h3>
                </div>
                <form className={style.searchField}>
                    <button className={style.form__btn} type="submit"><img className={style.searchImg} src={search}
                                                                     alt="Search"/></button>
                    <input className={style.inputField} type="text" placeholder="Search"/>
                </form>

                <div className={style.tabs__content}>
                    {
                        myFollowers?.map((item,idx)=>
                            <div className={style.followers__list}>
                                <div className={style.user}>
                                    {
                                        item.photo
                                            ? <img style={{
                                                cursor: "pointer",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className={style.user__image}
                                                   src={item.photo}
                                                   alt="User-photo"/>
                                            : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                    }
                                    <div className={style.user__info}>
                                        <h4 className={style.userInfoTitle}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                oneUserProfile(item.username)
                                                navigate("/home/other-user")
                                            }}
                                        >{item.username}</h4>
                                        <p className={style.userInfoSubtitle}>{
                                            item
                                                ?
                                                <p className={style.userInfoSubtitle}>{item.bio}</p>
                                                : ""
                                        }</p>
                                    </div>
                                </div>
                                <button className={
                                    dataF?.following?.some((user) => user.follows === item.username) ? `${style.followers__listBtn}` : `${style.followers__listBtn} ${style.follow}`
                                } onClick={(e) => {
                                    e.stopPropagation()
                                    handleFollowUser(item.user)
                                }}>{
                                    dataF?.following?.some((user) => user.follows === item.username) ? "Following" : "Follow"
                                }</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainModalUserFollowers;