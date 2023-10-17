import React from 'react';
import repost from "../../../images/svg/modal/Repost.svg";
import quote from "../../../images/svg/modal/quote.svg";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const CommentModal = ({modal, setModal}) => {
    const {data} = useSelector((store) => store.threadSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()




    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={() => setModal(false)}>
            <form className={modal ? "modalMain__content active" : "modalMain__content"}
                  onClick={e => e.stopPropagation()}>
                <div className="modal__repost">
                    <div className="modalRepost">
                        <button type="button" className="modalImage__text border btn"
                                onClick={e => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                }}>
                            Repost
                        </button>
                        <img className="img line" src={repost} alt="Repost"/>
                    </div>


                    <div className="modalRepost">
                        <button type="button" className="modalImage__text btn" onClick={e => {
                            e.stopPropagation()
                            e.preventDefault()
                        }}>
                            Quote
                        </button>
                        <img className="img" src={quote} alt="Repost"/>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default CommentModal;