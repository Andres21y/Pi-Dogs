import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBreed, getTemperaments } from "../redux/actions";
import validate from '../components/validation'
import styles from '../styles/create.module.css'
import { Link } from "react-router-dom";

export default function Create() {
    
    let dispatch = useDispatch();
    let lisTemperaments = useSelector(state => state.temperament)


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

    console.log('===>', input);

    function handleSet(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.name === 'life_span_max' || e.target.name === 'life_span_min' || e.target.name === 'name' ? e.target.value.trimStart() : parseInt(e.target.value)
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    function handleSetBreed(e) {
        if (input.temperament.includes(e.target.value)) {
            alert( `${e.target.value} had already been selected`);
        } else {
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value]
            })
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        if (input.temperament.length === 1) {
            setInput({
                ...input,
                temperament: []
            })
        }

        validate({ ...input, temperament: '' })

        let desable = document.getElementById('del').disabled
        if (desable === false) {
            dispatch(postBreed(input))
            alert('Process Suscesfull')
            window.location.reload()
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
        }
    };

    function handleDelete(e) {
        if (input.temperament.length > 1) {
            let droped = input.temperament.filter(x => x !== e)
            setInput({
                ...input,
                temperament: droped,
            })
        } else {
            document.getElementById('temp').value = (document.getElementById('as47d').value)
            setInput({
                ...input,
                temperament: []
            })
            
            setError({
                ...input,
                name: '',
                min_Height: '',
                max_Height: '',
                min_Weight: '',
                max_Weight: '',
                life_span: '',
                life_span_min: '',
                life_span_max: '',
                temperament: 'choose one or  more tempmperament please',
            })
        }
    };

    let data = error.name || error.min_Height || error.max_Height || error.min_Weight || error.max_Weight || error.life_span
        || error.temperament || !input.name || !input.min_Height || !input.max_Height || !input.max_Weight
        || !input.min_Weight || !input.life_span_min || !input.life_span_max || !input.temperament || input.temperament.length < 1 ? true : false;


    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])


    return (
        <div className={styles.container_create}>
            <h1 >Create New Breed</h1>

            <div className={styles.main_create}>
                <form onSubmit={(e) => handleSubmit(e)} className={styles.formy}>

                    {/* ===================================================== NAME ================================================================================ */}
                    <div>
                        <label>Name:  &nbsp;&nbsp;</label>
                        <input type="text" name='name' onChange={e => handleSet(e)} placeholder='   name' />
                    </div>
                    {error.name && (<p className={styles.err}>{error.name}</p>)}
                    <br />

                    {/* ===================================================== MIN HEIGHT ================================================================================ */}
                    <div className={styles.height}>
                        <label htmlFor="">Min Height:&nbsp;</label>
                        <input name="min_Height" placeholder="   min" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>cm</code>
                    </div>
                    {error.min_Height && (<p className={styles.err}>{error.min_Height}</p>)}
                    <br />


                    {/* ===================================================== MAX HEIGHT ================================================================================ */}
                    <div className={styles.height}>
                        <label htmlFor="">Max Height:&nbsp;</label>
                        <input name="max_Height" placeholder="   max" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>cm</code>
                    </div>
                    {error.max_Height && (<p className={styles.err}>{error.max_Height}</p>)}
                    <br />

                    {/* ===================================================== MIN Weight: ================================================================================ */}

                    <div className={styles.Weight}>
                        <label htmlFor="">Min Weight:  </label>
                        <input name="min_Weight" placeholder="   min" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;<code>kg</code>
                    </div>
                    {error.min_Weight && (<p className={styles.err}>{error.min_Weight}</p>)}
                    <br />

                    {/* ===================================================== Max Weight: ================================================================================ */}

                    <div className={styles.Weight}>
                        <label htmlFor="">Max Weight:  </label>
                        <input name="max_Weight" placeholder="   max" type="text" onChange={e => handleSet(e)} />&nbsp;&nbsp;&nbsp;<code>kg</code>
                    </div>
                    {error.max_Weight && (<p className={styles.err}>{error.max_Weight}</p>)}
                    <br />

                    {/* ===================================================== LIFE ================================================================================ */}

                    <div className={styles.life_span2} >
                        <label htmlFor=""> Life Span:</label>
                        <input name="life_span_min" type="text" placeholder="  from " onChange={e => handleSet(e)} />
                        <input name="life_span_max" type="text" placeholder="   to " onChange={e => handleSet(e)} /> &nbsp;&nbsp;<code>years</code>
                    </div>
                    {error.life_span && (<p className={styles.err}>{error.life_span}</p>)}
                    <br />

                    {/* ===================================================== Temperaments ================================================================================ */}
                    <label >Temperaments:   </label>
                    <div className={styles.temp}>
                        <select id="temp" name="temperament" onChange={e => handleSetBreed(e)}>
                            <option id='as47d' hidden={true} key={'as47d'} > -- select temperament -- </option>
                            {
                                lisTemperaments?.map(e => (
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
                    {/* ==========================================================button==Create================================================================================== */}
                    <div className={styles.create} >
                        <button type="reset">Reset</button>
                        <button id="del" type="submit" disabled={data} >Create</button>
                    </div>
                </form>
            </div>
            {/* ==========================================================button==Home================================================================================== */}
            <div className={styles.btn_land}>
                <Link to={'/Home'}>
                    <button id="re">Home</button>
                </Link>
            </div>
        </div>

    )
}