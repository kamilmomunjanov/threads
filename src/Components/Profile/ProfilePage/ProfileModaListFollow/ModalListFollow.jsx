import React, {useState,useEffect} from 'react';
import close from "../../../images/svg/followers/close.svg";
import search from "../../../images/svg/followers/search.svg";
import avatar from "../../../images/svg/followers/Avatar.svg";
import ava from "../../../images/svg/followers/Left.svg";
import image from "../../../images/svg/followers/Avat.svg";
import "./ModalListFollow.css";
import {useDispatch, useSelector} from "react-redux";
import {profileUsername} from "../../../../redux/reducers/otherProfile";

const ModalListFollow = ({modal, setModal}) => {
    const [active, setActive] = useState(1)
    const dispatch = useDispatch()
    const {data} = useSelector((store) => store.followSlice)
    const {dataF} = useSelector((store) => store.followYouSlice)
    const {_data} = useSelector((store) => store.otherProfileSlice)



    return (
        <div className={modal ? "modalFollow active" : "modalFollow"}>
            <div className={modal ? "modalFollow__content active" : "modalFollow__content"}
                 onClick={e => e.stopPropagation()}>
                <img onClick={() => setModal(false)} className="closeIcon" src={close} alt="Close"/>
                <div className="header">
                    <h3 className={active === 1 ? "header__title followers active" : "header__title followers"}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActive(1)
                        }}>Followers</h3>
                    <h3 className={active === 2 ? "header__title following active1" : "header__title following"}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActive(2)
                        }}>Following</h3>
                    <h3 className={active === 3 ? "header__title pending active2" : "header__title pending"}
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
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={avatar} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">iamnalimov</h4>
                                <p className="user__info-subtitle">UX/UI</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Following</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" style={{width:"36px",height:"36px",borderRadius:"50%"}}  src={_data?.photo} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">{data?.following[0]?.followers}</h4>
                                <p className="user__info-subtitle">{_data?.bio}</p>
                            </div>
                        </div>
                        <button className="followers__list-btn follow">
                            {
                               dataF.success ? "Follow" : "Following"
                            }
                        </button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={avatar} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                </div>

                <div className={active === 2 ? "tabs__content active" : "tabs__content"}>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">iamnalimov</h4>
                                <p className="user__info-subtitle">UX/UI</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Following</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">lily.rose</h4>
                                <p className="user__info-subtitle">Rose</p>
                            </div>
                        </div>
                        <button className="followers__list-btn follow">Follow</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">iamnalimov</h4>
                                <p className="user__info-subtitle">UX/UI</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Following</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">lily.rose</h4>
                                <p className="user__info-subtitle">Rose</p>
                            </div>
                        </div>
                        <button className="followers__list-btn follow">Follow</button>
                    </div>
                    <div className="followers__list">
                        <div className="user">
                            <img className="user__image" src={ava} alt="User-photo"/>
                            <div className="user__info">
                                <h4 className="user__info-title">gamingaddict</h4>
                                <p className="user__info-subtitle">Jenny</p>
                            </div>
                        </div>
                        <button className="followers__list-btn">Requested</button>
                    </div>
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