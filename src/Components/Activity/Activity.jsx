import React,{useState, useEffect} from 'react';
import styles from "./Activity.module.css";
import Layout from "../Layout/Layout";
import RightLayout from "../Layout/RightLayout";
import ava from "../images/svg/main/avatar.svg";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {oneUser} from "../../redux/reducers/profilUserSlice";
import {followMe} from "../../redux/reducers/followSlice";
import {allUser} from "../../redux/reducers/allUserSlice";
import {followYou} from "../../redux/reducers/followYouSlice";
import {followUser} from "../../redux/reducers/followByUserSlice";
import user from "../images/svg/main/unknown.svg";

const Activity = () => {
    const [activeTab, setActiveTab] = useState(1)
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
        <div className={styles.mainPage}>
            <Layout/>
            <div className={styles.mainPage__right}>
                <h3 className={styles.homeTitle}>Activity</h3>
                <div className={styles.section}>
                    <h4 className={activeTab === 1 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(1)
                        }}>Comments</h4>
                    <h4 className={activeTab === 2 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(2)
                        }}>Following</h4>
                    <h4 className={activeTab === 3 ? `${styles.sectionsTitle} ${styles.active}` : `${styles.sectionsTitle}`}
                        onClick={e => {
                            e.stopPropagation()
                            setActiveTab(3)
                        }}>Requests</h4>
                </div>
                <div className={activeTab === 1 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    <div className={styles.suggest}>
                        <p style={{fontSize:"20px"}} className={styles.title}>Comments not yet.</p>
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>mkbhd</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Following</button>*/}
                    {/*</div>*/}
                    {/*<div className={styles.suggest}>*/}
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>mkbhd</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Requested</button>*/}
                    {/*</div>*/}
                    {/*<div className={styles.suggest}>*/}
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>mkbhd</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Following</button>*/}
                    </div>
                </div>

                <div  className={activeTab === 2 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    {

                        handleInput?.map((item, idx) =>
                            <div className={styles.suggest}>
                                <div className={styles.user}>

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
                                    <div>
                                        <h4 className={styles.title}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                navigate("/home/other-user")
                                            }}
                                        >{item.username}</h4>
                                        {
                                            item
                                                ?
                                                <p className={styles.subtitle}>{item.bio}</p>
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

                <div className={activeTab === 3 ? `${styles.list} ${styles.active}` : `${styles.list}`}>
                    <div className={styles.suggest}>
                        <p style={{fontSize:"20px"}} className={styles.title}>Requests not yet.</p>
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>Lina</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Following</button>*/}
                    {/*</div>*/}
                    {/*<div className={styles.suggest}>*/}
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>Lina</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Requested</button>*/}
                    {/*</div>*/}
                    {/*<div className={styles.suggest}>*/}
                    {/*    <div className={styles.user}>*/}
                    {/*        <img style={{cursor:"pointer"}} src={ava} alt="avatar"/>*/}
                    {/*        <div>*/}
                    {/*            <h4 className={styles.title}>Lina</h4>*/}
                    {/*            <p className={styles.subtitle}>Followed you</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <button className={styles.btn}>Following</button>*/}
                    {/*</div>*/}
                    </div>
                </div>

            </div>
            <RightLayout/>
        </div>
    );
};

export default Activity;