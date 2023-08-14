import React from 'react';
import repost from "../images/svg/modal/Repost.svg";
import quote from "../images/svg/modal/quote.svg";
import "../Profile/modalPage/ModalPage.css";

const LayoutModal = ({modal, setModal}) => {
    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={() => setModal(false)}>
            <div className={modal ? "modalMain__content logout active" : "modalMain__content logout"}
                  onClick={e => e.stopPropagation()}>
                <div className="modal__LogOut">
                    <h3 className="title">Log out of Threads ?</h3>
                    <div className="modalLogOut">
                        <button type="button" className="modalLog__text btn remove"
                                onClick={e => e.stopPropagation()}>
                            Log out
                        </button>
                    </div>

                    <div className="modalLogOut">
                        <button type="button" className="modalLog__text btn" onClick={e => e.stopPropagation()}>
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LayoutModal;