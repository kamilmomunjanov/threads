import React from 'react';
import world from "../../../images/svg/main/world.svg";
import people from "../../../images/svg/main/people.svg";
import dog from "../../../images/svg/main/dog.svg";
import "./MainModal.css";

const MainModal = ({modal, setModal, read, setRead}) => {
    return (
        <div className={modal ? "mainModal active" : "mainModal"} onClick={() => setModal(false)}>
            <div className={modal ? "mainModal__content active" : "mainModal__content"}
                 onClick={e => e.stopPropagation()}>
                <div className="modal__filter">
                    <div className="modalFilter">
                        <button type="button" className="modalFilter__text filter__btn"
                                onClick={e => {
                                    e.stopPropagation()
                                    setRead("Anyone can reply")
                                    setModal(false)
                                }}>
                            Anyone
                        </button>
                        <img src={world} alt="world"/>
                    </div>

                    <div className="modalFilter">
                        <button type="button" className="modalFilter__text filter__btn" onClick={e => {
                            e.stopPropagation()
                            setRead("Those you follow can reply")
                            setModal(false)
                        }}>
                            Profiles you follow
                        </button>
                        <img src={people} alt="people"/>
                    </div>

                    <div className="modalFilter">
                        <button type="button" className="modalFilter__text filter__btn" onClick={e => {
                            e.stopPropagation()
                            setRead("Those mentioned can answer.")
                            setModal(false)
                        }}>
                            Mentioned only
                        </button>
                        <img src={dog} alt="dog"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainModal;