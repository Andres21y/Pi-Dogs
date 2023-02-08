import React from "react"
import NavBar from "../components/NavBar"
import styles from '../styles/landing.module.css'

export default function Landing() {
    return (
        <div className={styles.container_landing}>
            <NavBar />
            <div className={styles.container_greet}>
                <h1><img className="logi" alt="logi" /> Bienvenidos a </h1>
            </div>
            <div className={styles.container_title}>
                <span>Breeds App</span>
            </div>
            <div className={styles.container_foot} />
            <div className={styles.container_bg} />
        </div>
    )
}