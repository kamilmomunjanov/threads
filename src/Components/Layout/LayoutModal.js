import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/reducers/loginSlice";
import "../Profile/modalPage/ModalPage.css";

const LayoutModal = ({modal, setModal}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={() => setModal(false)}>
            <div className={modal ? "modalMain__content logout active" : "modalMain__content logout"}
                 onClick={e => e.stopPropagation()}>
                <div className="modal__LogOut">
                    <h3 className="title">Log out of Threads ?</h3>
                    <div className="modalLogOut">
                        <button type="button" className="modalLog__text btn remove"
                                onClick={e => {
                                    e.stopPropagation()
                                    dispatch(logoutUser())
                                    navigate("/")
                                }}>
                            Log out
                        </button>
                    </div>

                    <div className="modalLogOut">
                        <button type="button" className="modalLog__text btn" onClick={e => {
                            e.stopPropagation()
                            navigate(-1)
                        }}>
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LayoutModal;