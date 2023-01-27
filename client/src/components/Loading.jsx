import React from "react";
import styles from '../styles/loading.module.css'
import image from '../assets/img/227.jpg'
export default function Loading() {

    return (
        <div className={styles.main_load}>
            <div className={styles.loading}>
                <div id="percent" className={styles.loader}>
                <img src={image} alt="gif" />
                </div>
            </div>
            <span> Loading . . .</span>
        </div>
    )
}