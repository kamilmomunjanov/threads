import React from 'react';
import link from "../../images/svg/modal/Link.svg";
import send from "../../images/svg/modal/Send.svg";
import "../modalPage/ModalPage.css";

const ProfileModal = ({modal, setModal}) => {
    return (
        <div className={modal ? "modalMain active" : "modalMain"} onClick={() => setModal(false)}>
            <div className={modal ? "modalMain__content active" : "modalMain__content logout"}
                 onClick={e => e.stopPropagation()}>
                <div className="modal__share">
                    <div className="modalShare">
                        <img src={link} alt="Link"/>
                        <button type="button" className="modalImage__text btn"
                                onClick={e => e.stopPropagation()}>
                            Copy link
                        </button>
                    </div>

                    <div className="modalShare">
                        <img src={send} alt="Send"/>
                        <button type="button" className="modalImage__text btn" onClick={e => e.stopPropagation()}>
                            Share via...
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileModal;