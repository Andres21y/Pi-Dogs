import React from "react";
import { Link } from "react-router-dom";
import s from '../styles/card.module.css'
import g from '../image/rock.png'

export default function Card(props) {
    let temp = props.temperaments ? props.temperaments : [];

    function jurasic(val) {
        let data = temp && val.map(e => {
            if (e.hasOwnProperty('name')) return e.name
            else { return (e) }
        })


        return data

    }

    return (
        <div className={s.container_Nayor}>
            <section className={s.container}>
                <div className={s.card}>
                    <Link to={`/Details/${props.id}`}>
                        <div className={s.back}>
                            <p>
                                <span className={s.click}>
                                    click me!
                                </span><br />
                            </p>
                                <span>
                                    to see more  details
                                </span>
                                <h2>{props.name}</h2>
                        </div>
                    </Link>
                    <div className={s.front}>
                        <img id="ima" src={props.image ? props.image : g} alt='dogs' />
                        <div className={s.card}>
                            <h2>{props.name}</h2>

                            <div className={s.card_min}>
                                <br />
                                <span>
                                    {
                                        props.created ?
                                            <div>
                                                <h4>Life_span: &nbsp;
                                                    <code>{props.life_span_min}</code> - <code>{props.life_span_max}</code> years
                                                </h4>
                                            </div>
                                            :
                                            <h4>
                                                Life_span: &nbsp;
                                                {props.life_span}
                                            </h4>
                                    }
                                </span>
                                {/* <div>
                                    <h4>Weight
                                        <span>&nbsp;&nbsp;&nbsp;<b>-</b>&nbsp;<code>{props.min_Weight} kg</code></span>&nbsp;&nbsp;&nbsp;
                                        <span>&nbsp;&nbsp;&nbsp;<b>+</b>&nbsp;<code>{props.max_Weight} kg</code></span>
                                    </h4>
                                </div> */}
                                <div className={s.cont_op}>
                                    <h4>Temperaments:    </h4>
                                    {
                                        jurasic(temp).map(e => {
                                            return (<code key={`js4${e}`}>*{e}. &nbsp;</code>)
                                        })
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


