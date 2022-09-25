import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/landing.module.css'



export default function Landing() {
    return (
        <div className={styles.container_landing}>
            <div className={styles.home_ciner}>

                <Link to={'/About'}>
                    <button>About</button>
                </Link>

                <Link to={'/Contact' }>
                    <button>Contact</button>
                </Link>

                <Link to={'/More Information'}>
                    <button>More Information</button>
                </Link>

            </div>
            <h1>WellCome to Breeds App</h1>
            <div className={styles.btn_land}>
                <Link to={'/Home'} >
                    <button className={styles.btn_landd}>Home</button>
                </Link>
            </div>
        </div>
    )
}