import React,{useRef, useEffect} from 'react';
import addPhoto from "../../images/svg/modal/Picture.svg";
import removePhoto from "../../images/svg/modal/RemovePicture.svg";
import repost from "../../images/svg/modal/Repost.svg";
import quote from "../../images/svg/modal/quote.svg";
import "./ModalPage.css";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {profilePhoto} from "../../../redux/reducers/photoProfile";
import {profileUser} from "../../../redux/reducers/profileSlice";
import instance from "../../../config/axios";

const ModalPage = ({modal, setModal, getPhoto, setGetPhoto}) => {
    const imageAddRef = useRef(null)
    const location = useLocation()
    const dispatch = useDispatch()
    const {_data, status, error} = useSelector((store) => store.photoProfile)




    const submitAddPhoto = async (e) => {
        e.stopPropagation()

        console.log(imageAddRef.current.files[0])
        try {
            const formData = new FormData()
            const file = imageAddRef.current.files[0]
            formData.append('photo', file)
            instance.put("user/me/update-profile-photo/", formData,
                {
                    headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
                }).then((res) => console.log(res))
            setGetPhoto()
            setModal(false)
        }catch (error) {
            console.warn(error)
            alert("Ошибка при загрузке файла")
        }
    }

    const deletePhoto = () => {
        instance.delete("user/me/update-profile-photo/",
            {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("accessToken") }
            }).then(({data}) => setGetPhoto(data.photo))
        setModal(false)
    }



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
                                <button type="button" onClick={() => imageAddRef.current.click()} className="modalImage__text">New profile picture</button>
                                <input ref={imageAddRef} onChange={submitAddPhoto}  type="file" hidden/>
                            </div>
                        }

                        {
                            location.pathname === "/profile/edit" &&
                            <div className="modalImage">
                                <img src={removePhoto} alt=""/>
                                <button type="button" onClick={(e) => {
                                    e.stopPropagation()
                                    deletePhoto()
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