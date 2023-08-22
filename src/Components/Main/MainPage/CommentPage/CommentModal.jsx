import React from 'react';
import repost from "../../../images/svg/modal/Repost.svg";
import quote from "../../../images/svg/modal/quote.svg";

const CommentModal = ({modal, setModal}) => {
    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={() => setModal(false)}>
            <form className={modal ? "modalMain__content active" : "modalMain__content"}
                  onClick={e => e.stopPropagation()}>
                <div className="modal__repost">
                    <div className="modalRepost">
                        <button type="button" className="modalImage__text border btn"
                                onClick={e => e.stopPropagation()}>
                            Repost
                        </button>
                        <img className="img line" src={repost} alt="Repost"/>
                    </div>


                    <div className="modalRepost">
                        <button type="button" className="modalImage__text btn" onClick={e => e.stopPropagation()}>
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