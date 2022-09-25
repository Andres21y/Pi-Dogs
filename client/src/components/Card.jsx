import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/card.module.css'
import g from '../image/rock.png'

export default function Card(props) {
let temp = props.temperaments?props.temperaments:[];
// console.log('==>temp',temp);
    function jurasic(val) {
        let data = temp && val.map(e => {
                if (e.hasOwnProperty('name')) return e.name
                else { return (e) }
            })
           
            // console.log('dta==>',data);
            return data
        
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.img_card}>
                <Link to={`/Details/${props.id}`}>
                    <img id="ima" src={props.image ? props.image : g} alt='dogs' />
                </Link>
            </div>
            <div className={styles.card_min}>
                <h2>{props.name}</h2>
                <br />
                <h4>LifeSpan:&nbsp;<code>{props.life_span}</code></h4>
                <div>
                    <h4>Weight
                    <span>&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;<code>{props.min_Weight} kg</code></span>&nbsp;&nbsp;&nbsp;
                    <span>&nbsp;&nbsp;&nbsp;<b>+</b>&nbsp;<code>{props.max_Weight} kg</code></span> 
                    </h4>
                </div>
                <div className={styles.cont_op}>
                    <h4>Temperaments:    </h4>
                    {  
                    jurasic(temp).map(e=>{
                        return( <code key={`js4${e}`}>{e}.</code> )
                    })
                    } 
                </div>

            </div>
        </div>
    )
}


