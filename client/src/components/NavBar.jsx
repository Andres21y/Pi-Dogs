import React from "react";
import { Link } from "react-router-dom";
import style from '../styles/nav.module.css'
export default function NavBar() {
    return (
  
            <nav className={style.nav_main}>
                <h2> Breeds App</h2>
                <div className={style.btn_contai}>
                    <Link to={'/Home'} >
                        <button><i class="bi bi-house-fill" />&nbsp;Home</button>
                    </Link>

                    <Link to={'/About'} >
                        <button><i class="bi bi-person-lines-fill" />&nbsp;About</button>
                    </Link>

                    <Link to={'/Create'} >
                        <button><i class="bi bi-box-arrow-right" />&nbsp;Creator</button>
                    </Link>

                </div>
            </nav >

    )
}