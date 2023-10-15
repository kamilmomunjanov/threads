import React, {useEffect,useState, useLayoutEffect} from 'react';
import styles from "./Layout.module.css";
import {allUser} from "../../redux/reducers/allUserSlice";
import {followUser} from "../../redux/reducers/followByUserSlice";
import user from "../images/svg/main/unknown.svg";
import {useDispatch, useSelector} from "react-redux";
import followYouSlice, {followYou} from "../../redux/reducers/followYouSlice";

import {followMe} from "../../redux/reducers/followSlice";
import {useNavigate} from "react-router-dom";
import {oneUser} from "../../redux/reducers/profilUserSlice";


const RightLayout = () => {
    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.allUserSlice)
    const [triggerEffect, setTriggerEffect] = useState(false);
    const {_data} = useSelector((store) => store.profileSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const {data: followMe} = useSelector((store) => store.followSlice)
    const {data: followUserDone} = useSelector((store) => store.followByUserSlice)
    const navigate = useNavigate()
    const follows = JSON.parse(JSON.stringify(dataF))
    const [follow, setFollow] = useState(follows)




    const oneUserProfile = (username) => {
        dispatch(oneUser({username}))
    }

    // useLayoutEffect(() => {
    //     // Выполнять синхронные действия после изменений DOM
    //     dispatch(followYou())
    // }, [/* зависимости */dataF]);

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



    // const filteredButtons = dataF?.following?.some((item) => item.follows === data.username);


    return (
        <div className={styles.aside}>
            <div className={styles.suggest}>
                <div className={styles.user}>
                    <img style={{width: "40px", height: "40px", borderRadius: "50%"}} src={_data.photo} alt="avatar"/>
                    <div>
                        <h4 className={styles.title}>{_data.username}</h4>
                        <p className={styles.subtitle}>{_data.bio}</p>
                    </div>
                </div>
                <p className={styles.switch}>Switch</p>
            </div>
            <div className={styles.suggested}>
                <div><span className={styles.subtitle}>Suggested for you</span></div>
                <div><span className={styles.title}>See All</span></div>
            </div>
            {
                data?.results?.map((item, index) =>
                    <div className={styles.suggest}>
                        <div className={styles.user}>

                            {
                                item?.photo
                                    ?
                                    <img style={{cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%"}}
                                         src={item.photo} alt="avatar"/>
                                    : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                            }
                            <div>
                                <h4 className={styles.title} onClick={(e) => {
                                    e.stopPropagation()
                                    oneUserProfile(item.username)
                                    navigate("/home/other-user")
                                }}>{item.username}</h4>
                                <p className={styles.subtitle}>
                                {dataF?.following?.some((user) => user.follows === item.username) ? "Follows you" : "Unfollows you"}
                                </p>
                            </div>
                        </div>

                        <button type="button" onClick={() => {
                            handleFollowUser(item.user)
                        }} className={
                            dataF?.following?.some((user) => user.follows === item.username) ? `${styles.btn}` : `${styles.button} ${styles.btn}`
                            }>
                            {dataF?.following?.some((user) => user.follows === item.username) ? "Following" : "Follow"}
                        </button>

                    </div>
                )
            }

        </div>
    );
};

export default RightLayout;