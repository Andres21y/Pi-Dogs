import React from "react"
import NavBar from "../components/NavBar"
import styles from '../styles/landing.module.css'


export default function Landing() {
    return (
        <div className={styles.container_landing}>
            <NavBar />
        </div>
    )
}