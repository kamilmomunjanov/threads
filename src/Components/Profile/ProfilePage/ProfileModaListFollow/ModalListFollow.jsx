import React from 'react';
import close from "../../../images/svg/followers/close.svg";
import search from "../../../images/svg/followers/search.svg";
import avatar from "../../../images/svg/followers/Avatar.svg";
import "./ModalListFollow.css";

const ModalListFollow = ({modal, setModal}) => {
    return (
        <div className={modal ? "modalFollow active" : "modalFollow"}>
            <div className={modal ? "modalFollow__content active" : "modalFollow__content"}
                 onClick={e => e.stopPropagation()}>
                <img onClick={() => setModal(false)} className="closeIcon" src={close} alt="Close"/>
                <div className="header">
                    <h3 className="header__title followers">Followers</h3>
                    <h3 className="header__title following">Following</h3>
                    <h3 className="header__title pending">Pending</h3>
                </div>
                <form className="searchField">
                    <button className="form__btn" type="submit"><img className="searchImg" src={search} alt="Search"/></button>
                    <input className="inputField" type="text" placeholder="Search"/>
                </form>
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
                        <img className="user__image" src={avatar} alt="User-photo"/>
                        <div className="user__info">
                            <h4 className="user__info-title">lily.rose</h4>
                            <p className="user__info-subtitle">Rose</p>
                        </div>
                    </div>
                    <button className="followers__list-btn follow">Follow</button>
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
                        <img className="user__image" src={avatar} alt="User-photo"/>
                        <div className="user__info">
                            <h4 className="user__info-title">lily.rose</h4>
                            <p className="user__info-subtitle">Rose</p>
                        </div>
                    </div>
                    <button className="followers__list-btn follow">Follow</button>
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
        </div>
    );
};

export default ModalListFollow;