import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postBreed, getTemperaments, getBreeds } from "../redux/actions";
import validate from '../components/validation';
import styles from '../styles/create.module.css';


export default function Create() {

    const allBreeds = useSelector(state => state.stateBreeds)
    let dispatch = useDispatch();
    let lisTemperaments = useSelector(state => state.temperament)
    let lisTemperaments2 = lisTemperaments.filter(e => e.name !== Array && e.name)

    const [error, setError] = useState({
        name: '',
        min_Height: '',
        max_Height: '',
        min_Weight: '',
        max_Weight: '',
        life_span: '',
        life_span_min: '',
        life_span_max: '',
        temperament: ''
    });

    const [input, setInput] = useState({
        name: '',
        min_Height: parseInt(''),
        max_Height: parseInt(''),
        min_Weight: parseInt(''),
        max_Weight: parseInt(''),
        life_span_min: parseInt(''),
        life_span_max: parseInt(''),
        temperament: []
    })


    function handleSet(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.name === 'life_span_max' || e.target.name === 'life_span_min' || e.target.name === 'name' ? e.target.value.trim() : parseInt(e.target.value)
        })
        setError(validate({ ...input, [e.target.name]: e.target.value }))
    };

    function handleSetBreed(e) {
        if (input.temperament.includes(e.target.value)) {
            alert(`${e.target.value} had already been selected`);
        }
        else {
            setInput({ ...input, temperament: [...input.temperament, e.target.value] })
            setError(validate({ ...input, [e.target.name]: e.target.value }))
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        if (input.temperament.length === 1) {
            setInput({ ...input, temperament: [] })
        }
        let active = document.getElementById('del').disabled
        if (active === false) {
            dispatch(postBreed(input))
            setInput({
                name: '',
                min_Height: '',
                max_Height: '',
                min_Weight: '',
                max_Weight: '',
                life_span_min: '',
                life_span_max: '',
                temperament: []
            })
            document.getElementById('form').reset();
            alert('Process Suscesfull')
        }
    };


    function handleDelete(e) {
        if (input.temperament.length > 1) {
            let drop = input.temperament.filter(x => x !== e)
            setInput({ ...input, temperament: drop })
        }
        else {
            document.getElementById('temp').value = (document.getElementById('as47d').value)
            setInput({ ...input, temperament: [] })
        }
    };

    let data = error.name || error.min_Height || error.max_Height || error.min_Weight || error.max_Weight || error.life_span
        || error.temperament || !input.name || !input.min_Height || !input.max_Height || !input.max_Weight
        || !input.min_Weight || !input.life_span_min || !input.life_span_max || !input.temperament || input.temperament.length < 1 ? true : false;


    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [dispatch])


    return (
        <div className={styles.container_create}>
            <div className={styles.container_nav_create}>
                <nav>
                    <div className={styles.h3}>
                        <h2>Wellcome to Creator</h2>
                    </div>
                    <div className={styles.container_icon}>
                        <Link to={'/Home'}>
                            <i class="bi bi-house-fill" />
                            <button>Home</button>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className={styles.main_create}>
                <form id='form' onSubmit={(e) => handleSubmit(e)} className={styles.formy}>

                    <div>
                        <label className={styles.name} >Name:  &nbsp;&nbsp;</label>
                        <input className={styles.name3} type="text" name='name' onChange={(e) => handleSet(e)} placeholder='   name' />
                    </div>
                    {error.name && (<p className={styles.err}>{error.name}</p>)}

                    <br />

                    <div className={styles.height}>
                        <label htmlFor="">Min Height:&nbsp;</label>
                        <input name="min_Height" placeholder="   min" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>cm</code>
                    </div>
                    {error.min_Height && (<p className={styles.err}>{error.min_Height}</p>)}
                    <br />

                    <div className={styles.height}>
                        <label htmlFor="">Max Height:&nbsp;</label>
                        <input name="max_Height" placeholder="   max" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>cm</code>
                    </div>
                    {error.max_Height && (<p className={styles.err}>{error.max_Height}</p>)}
                    <br />

                    <div className={styles.Weight}>
                        <label htmlFor="">Min Weight:  </label>
                        <input name="min_Weight" placeholder="   min" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>kg</code>
                    </div>
                    {error.min_Weight && (<p className={styles.err}>{error.min_Weight}</p>)}
                    <br />


                    <div className={styles.Weight}>
                        <label htmlFor="">Max Weight:  </label>
                        <input name="max_Weight" placeholder="   max" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;&nbsp;<code>kg</code>
                    </div>
                    {error.max_Weight && (<p className={styles.err}>{error.max_Weight}</p>)}
                    <br />

                    <div className={styles.life_span2} >
                        <label htmlFor=""> Life Span:</label>
                        <input name="life_span_min" type="text" placeholder="  from " onChange={e => handleSet(e)} />
                        <input name="life_span_max" type="text" placeholder="   to " onChange={e => handleSet(e)} /> &nbsp;&nbsp;<code>years</code>
                    </div>
                    {error.life_span && (<p className={styles.err}>{error.life_span}</p>)}
                    <br />

                    <label >Temperaments:   </label>
                    <div className={styles.temp}>
                        <select id="temp" name="temperament" onChange={e => handleSetBreed(e)} required={true}>
                            <option id='as47d' hidden={true} key={'as47d'} > -- select temperament -- </option>
                            {
                                lisTemperaments2.map(e => (
                                    <option id='op' disabled={false} name={e.name} value={e.name} key={`1${e.name}`}>  {e.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {error.temperament && (<p className={styles.err}>{error.temperament}</p>)}
                    <br /> <div className={styles.temp5}>
                        {
                            input.temperament?.map(e =>

                                <div className={styles.tempSsh}>
                                    {e}<h4>
                                        < option value={e} onClick={() => handleDelete(e)}> [ x ]  </option>
                                        <br />
                                    </h4>
                                </div>
                            )

                        }
                    </div>

                    <div className={styles.create} >
                        <button type="reset">Reset</button>
                        <button id="del" type="submit" disabled={data} >Create</button>
                    </div>
                </form>
            </div>

        </div>

    )
}