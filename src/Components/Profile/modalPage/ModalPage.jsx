import React,{useRef} from 'react';
import addPhoto from "../../images/svg/modal/Picture.svg";
import removePhoto from "../../images/svg/modal/RemovePicture.svg";
import repost from "../../images/svg/modal/Repost.svg";
import quote from "../../images/svg/modal/quote.svg";
import "./ModalPage.css";
import {useLocation} from "react-router-dom";

const ModalPage = ({modal, setModal}) => {
    const imageAddRef = useRef(null)
    const location = useLocation()

    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={()=>setModal(false)}>
            <form className={modal ? "modalMain__content active" : "modalMain__content"} onClick={e=>e.stopPropagation()}>
                {
                    location.pathname === "/profile" && <div className="modal__repost">
                        {
                            location.pathname === "/profile" && <div className="modalRepost">
                                <button type="button" className="modalImage__text btn remove" onClick={e => e.stopPropagation()}>
                                    Remove
                                </button>
                                <img className="img" src={repost} alt="Repost"/>
                            </div>
                        }

                        {
                            location.pathname === "/profile" && <div className="modalRepost">
                                <button type="button" className="modalImage__text btn" onClick={e => e.stopPropagation()}>
                                    Quote
                                </button>
                                <img className="img" src={quote} alt="Repost"/>
                            </div>
                        }
                    </div>
                }

                {
                    location.pathname === "/profile/edit" && <div className="modal__image">

                        {
                            location.pathname === "/profile/edit" &&
                            <div className="modalImage">
                                <img src={addPhoto} alt=""/>
                                <button type="button" onClick={(e) => {
                                    e.stopPropagation()
                                    imageAddRef.current.click()
                                }} className="modalImage__text">New profile picture</button>
                                <input ref={imageAddRef}  type="file" hidden/>
                            </div>
                        }

                        {
                            location.pathname === "/profile/edit" &&
                            <div className="modalImage">
                                <img src={removePhoto} alt=""/>
                                <button type="button" onClick={(e) => {
                                    e.stopPropagation()
                                }} className="modalImage__text remove">Remove current picture</button>
                            </div>
                        }

                    </div>
                }
            </form>
        </div>
    );
};

export default ModalPage;