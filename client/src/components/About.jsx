import React from "react";
import { Link } from "react-router-dom"
import S from "../styles/about.module.css"


export default function About() {
    return (
        <div className={S.main}>
            <p>
                <span>
                    my Name...<br />
                    Andres Cordoba
                </span><br />
                <span>
                    I am a web developer passionate about technology, <br /> focused on mastering the JavaScript programming language,
                    among others.
                </span>

            </p>
            <Link to={'/'} >
                <div className={S.btn_about}>
                    <button> back </button>
                </div>
            </Link>
        </div>
    )
}


