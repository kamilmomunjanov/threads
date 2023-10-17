import React, {useEffect, useState} from 'react';
import "./aside.css";
import styles from "./Layout.module.css";
import ava from "../images/svg/main/avatar.svg";
import {useDispatch, useSelector} from "react-redux";
import {allUser} from "../../redux/reducers/allUserSlice";
import {followYou} from "../../redux/reducers/followYouSlice";
import user from "../images/svg/main/unknown.svg";
import {followUser} from "../../redux/reducers/followByUserSlice";
import {useNavigate} from "react-router-dom";
import {oneUser} from "../../redux/reducers/profilUserSlice";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Aside = ({aside, setAside}) => {
    const dispatch = useDispatch()
    const [triggerEffect, setTriggerEffect] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const {_data} = useSelector((store) => store.profileSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const {data} = useSelector((store) => store.allUserSlice)
    const {data: followUserDone} = useSelector((store) => store.followByUserSlice)
    const navigate = useNavigate()
    const targetObject = data?.results?.map(item => item.username);
    const [dataSearch, setDataSearch] = useState(targetObject); // Ваши данные
    // const notify = () => toast("У вас новый запрос на подписку!");


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


    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(handleInput, "It is my handleInput")
    };


    // const handleSearch = (searchTerm) => {
    //     const lowercaseSearchTerm = searchTerm.toLowerCase()
    //     const results = dataSearch && dataSearch.filter(item => item.toLowerCase().includes(lowercaseSearchTerm)); // Пример фильтрации данных
    //     setSearchResults(results);
    //     console.log(results)
    // };


    const lowercaseSearchTerm = searchTerm.toLowerCase()
    const handleInput = data?.results?.filter((item) => item.username.toLowerCase().includes(lowercaseSearchTerm))


    const oneUserProfile = (username) => {
        dispatch(oneUser({username}))
    }


    return (
        <div className={aside ? "aside active" : "aside"}>
            <div className={aside ? "aside__content active" : "aside__content"}>
                <h4 className="search" onClick={(e) => {
                    e.stopPropagation()
                    setAside(false)
                }}>Search</h4>
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="input__search"
                    type="text"
                    placeholder="Search"/>

                {/*<button onClick={notify}>Получить уведомление</button>*/}
                {/*<ToastContainer />*/}
                {/*<ul>*/}
                {/*    {searchResults?.map((result, index) => (*/}
                {/*        <li key={index}>{result}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}


                {
                        handleInput?.map((item, idx) =>
                            <div className={styles.suggest}>
                                <div className={styles.user}>
                                    {
                                        item?.photo
                                            ?
                                            <img style={{
                                                cursor: "pointer",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }}
                                                 src={item.photo} alt="avatar"/>
                                            : <img style={{width: "40px", height: "40px"}} src={user} alt=""/>
                                    }
                                    <div>
                                        <h4 className={styles.title}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                oneUserProfile(item.username)
                                                navigate("/home/other-user")
                                            }}
                                        >{item.username}</h4>
                                        <p className={styles.subtitle}>
                                            {dataF?.following?.some((user) => user.follows === item.username) ? "Follows you" : "Unfollows you"}
                                        </p>
                                        <p className="followers">{item.number_of_followers} followers</p>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    handleFollowUser(item.user)
                                }}
                                        className={dataF?.following?.some((user) => user.follows === item.username) ? `${styles.btn}` : `${styles.button} ${styles.btn}`}>
                                    {dataF?.following?.some((user) => user.follows === item.username) ? "Following" : "Follow"}
                                </button>
                            </div>
                        )
                }


            </div>
        </div>
    );
};

export default Aside;