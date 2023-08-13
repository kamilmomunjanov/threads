import React from 'react';
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div id={styles.notfound}>
            <div className={styles.notfound}>
                <div className={styles.notfoundPage}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <a href="#">Report</a>
                <a href="http://localhost:3000/" target="_blank">Homepage</a>

            </div>
        </div>
    );
};

export default NotFoundPage;