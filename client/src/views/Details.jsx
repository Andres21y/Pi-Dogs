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

    let dispatch = useDispatch()

    const details = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetails(id))
        return () => {
            dispatch(resetDetail())
        }
    }, [dispatch, id])

    let temp = details.temperaments !== null ? details.temperaments : ['has no temperament']


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
                    <span><i>from</i>&nbsp;<code>{details.min_Height}&nbsp;cm</code></span>
                    &nbsp;<i>to</i>&nbsp;<span><code>{details.max_Height} cm</code></span>
                </div>
            )

        } else {
            return (
                details.min_Height === null || details.max_Height === null ?
                    <span>
                        <code>min &nbsp; 0 &nbsp;cm</code>&nbsp;<i>to</i> &nbsp;
                        <code>max  &nbsp; 0  &nbsp;cm</code>
                    </span>
                    :
                    <div>
                        <span>
                        <i>from</i><code>&nbsp;{details.min_Height}&nbsp;</code>
                        </span>&nbsp;<i>to</i>&nbsp;
                        <span>
                            <code>&nbsp;{details.max_Height}&nbsp;cm</code>
                        </span>
                    </div>
            )
        }
    }

    const dbImage = [balto, dog, blue, illustration]
    let random = Math.floor(Math.random() * dbImage.length)

    return (
        <div className={styles.detail}>
            <nav>
                <div className={styles.h3}>
                    <h2>Wellcome to Details</h2>
                </div><br />
                <div className={styles.btn_container}>
                    <div className={styles.btn_home_d}>
                        <Link to={'/Home'}>
                         <button id="re" ><i class="bi bi-house-fill" />&nbsp; Home</button>
                        </Link>
                    </div>
                    <div className={styles.btn_create}>
                        <Link to={'/Create'} >
                            <button className={styles.btn_create}>Create &nbsp;<i class="bi bi-box-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className={styles.card_container}>
                    {
                        details.hasOwnProperty('name') ?
                            <div className={styles.container_de}>
                                <div className={styles.cardw}>
                                    <div className={styles.card_iw}>
                                        <img src={details.image ? details.image : dbImage[random]} alt='no igame now' />
                                    </div>
                                    <div className={styles.card_name}>
                                        <h2>{details.name}</h2>
                                    </div>
                                </div>

                                <div className={styles.temp}>
                                    {
                                        <div className={styles.container_det}>
                                            <h4>Height:</h4>
                                                <code>{data()}</code>                                        

                                            <h4>Weight:</h4>
                                            <div>
                                                <code><i>from</i>&nbsp;{details.min_Weight}&nbsp;kg</code> &nbsp;<i>to</i> &nbsp;
                                                <code>{details.max_Weight}&nbsp;kg</code>
                                            </div>
                                            {/* <i class="bi bi-activity"></i> */}
                                            <h4> Life_span </h4>
                                            <div>
                                                {
                                                    details.hasOwnProperty('created') ?
                                                        <span>
                                                            <code>{details.life_span_min}</code>&nbsp; <i>to</i> &nbsp;
                                                            <code>{details.life_span_max} years</code>
                                                        </span>
                                                        :
                                                        <span>
                                                            <code>{details.life_span}</code>
                                                        </span>
                                                }
                                            </div>

                                            <h4>Temperaments </h4>
                                            <div className={styles.temperaments_o}>
                                                {
                                                    jurasic(temp).map(e => {
                                                        return (<option key={`2${e}`}>*{e.toString()}&nbsp;</option>)
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
                <div>

                </div>
            </div>

        </div>
    )
}