import React, { useState } from "react";
import { getBreedsName } from "../redux/actions";
import styles from '../styles/search.module.css'

export default function SearchBar({ setCurrentPage, dispatch }) {

    const [name, setName] = useState('');
    console.log('==>', name);
    const handleState = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const letter = new RegExp('^[A-Z]+$', 'i');
        const pattern = new RegExp(/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/);


        if (pattern.test(name)) {
            alert('special characters are not allowed')

        } else if (/^[0-9]*$/.test(name)) {
            alert('Numbers are not allowed')

        } else if (!letter.test(name)) {
            alert('Numbers and special characters are not allowed')
        } else {
            !name ? alert('you must write a name', 'Please try again') :
                dispatch(getBreedsName(name.trim()))
            setName('')
            setCurrentPage(1)
        }

    }

    return (
        <div className={styles.search_container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.search}>
                    <i class="bi bi-search" />
                    <input type="search" onChange={(e) => handleState(e)} placeholder='  search...'/>
                </div>
            </form>
        </div>
    )
}


/**NOTA
 * validar number
 * LIMPIAR LA ENTRADA
 */