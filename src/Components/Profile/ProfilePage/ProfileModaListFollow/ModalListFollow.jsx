import React, {useState, useEffect} from 'react';
import close from "../../../images/svg/followers/close.svg";
import search from "../../../images/svg/followers/search.svg";
import avatar from "../../../images/svg/followers/Avatar.svg";
import ava from "../../../images/svg/followers/Left.svg";
import image from "../../../images/svg/followers/Avat.svg";
import "./ModalListFollow.css";
import {useDispatch, useSelector} from "react-redux";
import {profileUsername} from "../../../../redux/reducers/otherProfile";
import {followYou} from "../../../../redux/reducers/followYouSlice";
import {allUser} from "../../../../redux/reducers/allUserSlice";
import {followMe} from "../../../../redux/reducers/followSlice";
import user from "../../../images/svg/main/unknown.svg";
import {followUser} from "../../../../redux/reducers/followByUserSlice";
import {useNavigate} from "react-router-dom";
import {oneUser} from "../../../../redux/reducers/profilUserSlice";

const ModalListFollow = ({modal, setModal}) => {
    const [active, setActive] = useState(1)

    const dispatch = useDispatch()
    const {data: allUserGet} = useSelector((store) => store.allUserSlice)
    const [triggerEffect, setTriggerEffect] = useState(false);
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
        dispatch(followMe())
        setTriggerEffect(false)
    }, [triggerEffect])

    useEffect(() => {
        dispatch(allUser())
    }, [])

    useEffect(() => {
        dispatch(followYou())
        setTriggerEffect(false)
    }, [triggerEffect])

    function handleFollowUser(id) {
        dispatch(followUser({id}))
        setTriggerEffect(true)
    }


    const allUserThreads = allUserGet?.results?.map(item => item.username)
    const allFollowsThreads = dataF?.following?.map((user) => user.follows)
    const followers = data?.following?.map(item => item.followers)
    const handleInput = allUserGet?.results?.filter(item => allFollowsThreads?.includes(item?.username))
    const myFollowers = allUserGet?.results?.filter(item => followers?.includes(item?.username))



    return (
        <div className={modal ? "modalFollow active" : "modalFollow"}>
            <div className={modal ? "modalFollow__content active" : "modalFollow__content"}
                 onClick={e => e.stopPropagation()}>
                <img onClick={() => setModal(false)} className="closeIcon" src={close} alt="Close"/>
                <div className="header">
                    <h3 className={`${active === 1 ? 'active' : ''} header__title followers`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActive(1)
                        }}>Followers</h3>
                    <h3 className={`${active === 2 ? 'active' : ""} header__title following`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActive(2)
                        }}>Following</h3>
                    <h3 className={`${active === 3 ? 'active' : ''} header__title pending`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActive(3)
                        }}>Pending</h3>
                </div>
                <form className="searchField">
                    <button className="form__btn" type="submit"><img className="searchImg" src={search}
                                                                     alt="Search"/></button>
                    <input className="inputField" type="text" placeholder="Search"/>
                </form>

                <div className={active === 1 ? "tabs__content active" : "tabs__content"}>
                    {
                        myFollowers?.map((item,idx)=>
                            <div className="followers__list">
                                <div className="user">
                                    {
                                        item.photo
                                            ? <img style={{
                                                cursor: "pointer",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className="user__image"
                                                   src={item.photo}
                                                   alt="User-photo"/>
                                            : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                    }
                                    <div className="user__info">
                                        <h4 className="user__info-title"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                oneUserProfile(item.username)
                                                navigate("/home/other-user")
                                            }}
                                        >{item.username}</h4>
                                        <p className="user__info-subtitle">{
                                           item
                                                ?
                                                <p className="user__info-subtitle">{item.bio}</p>
                                                : ""
                                        }</p>
                                    </div>
                                </div>
                                <button className={
                                    dataF?.following?.some((user) => user.follows === item.username) ? `followers__list-btn` : `followers__list-btn follow`
                                } onClick={() => {
                                    handleFollowUser(item.user)
                                }}>{
                                    dataF?.following?.some((user) => user.follows === item.username) ? "Following" : "Follow"
                                }</button>
                            </div>
                        )
                    }
                </div>


                <div className={active === 2 ? "tabs__content active" : "tabs__content"}>
                    {

                        handleInput?.map((item, idx) =>
                                <div className="followers__list">
                                    <div className="user">

                                        {
                                            item?.photo
                                                ? <img style={{
                                                    cursor: "pointer",
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%"
                                                }} className="user__image"
                                                       src={item?.photo}
                                                       alt="User-photo"/>
                                                : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                        }
                                        <div className="user__info">
                                            <h4 className="user__info-title"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    navigate("/home/other-user")
                                                }}
                                            >{item.username}</h4>
                                            {
                                                item
                                                    ?
                                                    <p className="user__info-subtitle">{item.bio}</p>
                                                    : ""
                                            }

                                        </div>
                                    </div>
                                    <button className={
                                        dataF?.following?.some((user) => user.follows === item.username) ? `followers__list-btn` : `followers__list-btn follow`
                                    } onClick={() => {
                                        handleFollowUser(item.user)
                                    }}>{
                                        dataF?.following?.some((user) => user.follows === item.username) ? "Following" : "Follow"
                                    }</button>
                                </div>
                            )
                    }


                </div>


                <div className={active === 3 ? "tabs__content active" : "tabs__content"}>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">iamnalimov</h4>
                                <p className="user__info-subtitle">UX/UI</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Following</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">lily.rose</h4>
                                <p className="user__info-subtitle">Rose</p>
                            </div>
                        </div>
                        <button className="followers__list-btn follow">Follow</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">iamnalimov</h4>
                                <p className="user__info-subtitle">UX/UI</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Following</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">lily.rose</h4>
                                <p className="user__info-subtitle">Rose</p>
                            </div>
                        </div>
                        <button className="followers__list-btn follow">Follow</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={image} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalListFollow;