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
            e.target.disabled = false
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
                    {
                        pages.length && pages.map(num => {
                            return (
                                <button key={num} className={currentPage === num ? styles.btn_point : null } onClick={()=> upDater(num)} >{num}</button>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.move}>
                <button id="prev" name='prev' disabled={currentPage === 1 ? true : false} onClick={e => handleChange(e)} value={currentPage - 1} > Prev </button>
                <button id="next" name='next' disabled={currentPage === pages.length ? true : false} onClick={e => handleChange(e)} > Next </button>
            </div>
        </div>
    )
}