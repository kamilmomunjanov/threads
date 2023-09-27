import React from 'react';
import style from "./style.module.css";

const IncorrectUsername = () => {
    return (
        <div className={style.card}>
            <div className={style.incorrect}>
                <h3 className={style.title}>Incorrect Username</h3>
                <p className={style.subtitle}>The username you entered
                    doesn’t appear to belong to an
                    account. Please check your
                    username and try again.</p>
                <button className={style.btn} type="button">Try Again</button>
            </div>
        </div>
    );
};

export default IncorrectUsername;