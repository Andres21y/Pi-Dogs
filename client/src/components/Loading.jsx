import React from "react";
import styles from '../styles/loading.module.css'
import image from '../image/227.jpg'
export default function Loading() {

    return (
        <div className={styles.main_load}>
            <div className={styles.loading}>
                <div id="percent" className={styles.ring}></div>
             <img src={image} alt="gif" /> 
            </div>
             <span> Loading . . .</span>
        </div>
    )
}