import React, { useState } from "react";
import { getBreedsName } from "../redux/actions";
import styles from '../styles/search.module.css'

export default function SearchBar({ setCurrentPage, dispatch }) {

    const [name, setName] = useState('');

    const handleState = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/.test(name)) {
            alert('special characters are not allowed')

        } else if (/^[0-9]*$/.test(name)) {
            alert('Numbers are not allowed')

        } else {
            !name ? alert('you must write a name', 'Please try again') :
            console.log('despa');
            dispatch(getBreedsName(name.trim()))
            setName('')
            setCurrentPage(1)
        }

    }

    return (
        <div className={styles.search_container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="search" onChange={e => handleState(e)} placeholder="Search ..." />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}


/**NOTA
 * validar number
 * LIMPIAR LA ENTRADA
 */