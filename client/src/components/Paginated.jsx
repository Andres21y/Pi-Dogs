import React from "react";
import styles from '../styles/paginated.module.css';

export default function Paginated({ allBreeds, breedPage, upDater, currentPage, setCurrentPage }) {


    let pages = []
    for (let i = 1; i <= Math.ceil(allBreeds.length / breedPage); i++) {
        pages.push(i)
    }

    function handleChange(e) {
        if (e.target.name === 'prev') {
            breedPage === 1 ? upDater(1) :
                upDater(currentPage - 1)
                let activation = document.getElementById('prev')
                activation.disabled = false
        }


        if (e.target.name === 'next') {
            setCurrentPage(currentPage + 1)
            let activation = document.getElementById('next')
            activation.disabled = false
        }
    }
    return (
        <div>
            <div className={styles.container_P}>
                <ul >
                <button className={styles.prev} name="prev"  id="prev"   disabled={currentPage === 1 ? true : false} onClick={handleChange}>prev</button>
                    {
                        pages.length && pages.map(num => {
                            return (
                                <button key={num} className={currentPage === num && styles.btn_point} onClick={() => upDater(num)} >{num}</button>
                            )
                        })
                    }
                <button className={styles.next} name="next" id="next" disabled={currentPage === pages.length ? true : false} onClick={handleChange}>next</button>
                </ul>
            </div>
        </div>
    )
}