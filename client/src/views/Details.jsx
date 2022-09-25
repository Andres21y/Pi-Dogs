import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetails, resetDetail } from '../redux/actions';
import styles from '../styles/details.module.css';

import balto from '../image/balto.jpg'
import dog from '../image/black-dog.png'
import blue from '../image/dog-blue.jpg'
import illustration from '../image/illustration.jpg'
import Loading from "../components/Loading";


export default function Details() {

    let { id } = useParams(state => state.details);
    // console.log('id.details--->', id);

    let dispatch = useDispatch()

    const details = useSelector(state => state.details)
    // console.log('soy el details', details);

    useEffect(() => {
        dispatch(getDetails(id))
        return () => {
            dispatch(resetDetail())
        }
    }, [dispatch, id])

    let temp = details.temperaments
    //console.log('==/==/=>', temp);

    function jurasic(val) {
        let data = val.map(e => {
            if (e.hasOwnProperty('name')) return e.name
            else { return (e) }
        })
        return data
    }

    const data = () => {
        if (details.hasOwnProperty('created')) {
            return (
                <div>
                    <span> min <code>{details.min_Height}cm</code></span>&nbsp;&nbsp;
                    &nbsp;<span> max <code>{details.max_Height}cm</code></span>
                </div>
            )

        } else {
            return (
                details.min_Height === null || details.max_Height === null ?
                    <span>
                        <code> min 0cm</code>
                        <code> max 0cm</code>
                    </span>
                    :
                    <div>
                        <span>
                            <code> min {details.min_Height}cm</code>
                        </span>&nbsp;&nbsp;
                        <span>
                            <code> max {details.max_Height}cm</code>
                        </span>
                    </div>
            )
        }
    }

    // const time = setTimeout(message, 5000);

    // function message(){
    //  document.getElementById('pirulo').innerHTML='Please wait'
    // }
    const dbImage = [balto, dog, blue, illustration]
    let random = Math.floor(Math.random() * dbImage.length)

    return (
        <div className={styles.detail}>
            <div>
                <h1>Breeds Details</h1>
            </div>
            <div className={styles.card_container}>
                <div>
                    {
                        details.hasOwnProperty('name') ?
                            <div className={styles.container_de}>
                                <div className={styles.card_d}>
                                    <div className={styles.card_iw}>
                                        <img src={details.image ? details.image : dbImage[random]} alt='no igame now' />
                                    </div>
                                    <div className={styles.name}>
                                        <h2>{details.name}</h2>
                                    </div>
                                </div>

                                <div className={styles.temp}>
                                    {
                                        <div className={styles.container_det}>
                                            <h4>Height </h4>
                                            <div>
                                                <span>
                                                    <code>{data()}</code>
                                                </span>
                                            </div>

                                            <h4>Weight</h4>
                                            <div>
                                                <code>min {details.min_Weight}kg</code>&nbsp;&nbsp;&nbsp;
                                                <code>max {details.max_Weight}kg</code>
                                            </div>

                                            <h4>Life_span </h4>
                                            <div>
                                                {
                                                    details.hasOwnProperty('created') ?
                                                        <span>
                                                            <code>{details.life_span_min}</code>&nbsp; - &nbsp;
                                                            <code>{details.life_span_max} years</code>
                                                        </span>
                                                        :
                                                        <span>
                                                            <code>{details.life_span}</code>
                                                        </span>
                                                }
                                            </div>

                                            <h4>Temperaments </h4>
                                            <div className={styles.temp1}>
                                                {
                                                    jurasic(temp).map(e => {
                                                        return (<option key={`2${e}`}>*{e.toString()}</option>)
                                                    })
                                                }
                                            </div>
                                        </div>

                                    }

                                </div>
                            </div> :
                            <div>
                                <Loading />
                            </div>
                    }
                </div>
                <div>

                </div>
            </div>
            <div className={styles.btn_container}>
                <div className={styles.btn_land}>
                    <Link to={'/Home'} ><button>Home </button></Link>
                </div>
                <div className={styles.btn_land}>
                    <Link to={'/Create'} ><button className={styles.btn_create}>Create </button></Link>
                </div>
            </div>
        </div>
    )
}