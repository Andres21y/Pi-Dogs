import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from '../redux/actions';
import { Link } from "react-router-dom";
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import Paginated from '../components/Paginated'
import styles from '../styles/home.module.css'
import Loading from "../components/Loading";
export default function Home() {

    const allBreeds = useSelector(state => state.stateBreeds)
    const temperaments = useSelector(state => state.temperament)
    const temp = Array.isArray(temperaments) ? temperaments.map(e => e.name) : [];
    console.log('??>', allBreeds);
    let dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1)
    //console.log('currentPage-->', currentPage);
    
    const [breedPage] = useState(8)
    //console.log('breedPage-->', breedPage);
    
    const indexLast = currentPage * breedPage;
    //console.log('indexLast->', indexLast);
    
    const indexFirst = indexLast - breedPage
    // console.log('indexFirst->', indexFirst);
    
    const currentBreed = allBreeds.slice(indexFirst, indexLast)
    console.log('currentBreed_>', currentBreed);
    //console.log('XXXX>',currentBreed);
    
    const [, setOrder] = useState('')
    
    const upDater = (num) => {
        setCurrentPage(num)
    }
    
    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())

    }, [dispatch])
    
    return (
        <div className={styles.home_container}>
            <nav>
                <div className={styles.search}> <SearchBar setCurrentPage={setCurrentPage} dispatch={dispatch}/> </div>
            </nav>
            <br />
            <div className={styles.filters}>
                <Filters 
                setCurrentPage={setCurrentPage} 
                temp={temp} setOrder={setOrder} 
                dispatch={dispatch} />
            </div>

            <div>
                <Paginated 
                upDater={upDater} 
                allBreeds={allBreeds} 
                breedPage={breedPage} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} />
            </div>
            <br />

            <div className={styles.home_card}>
                {
                    currentBreed.length === 0 ? <Loading /> :
                        currentBreed.map(e => {
                            return (
                                <Card 
                                id={e.id} 
                                name={e.name} 
                                image={e.image} 
                                max_Weight={e.max_Weight} 
                                min_Weight={e.min_Weight} 
                                life_span={e.life_span} 
                                temperaments={e.temperaments} />
                            )
                        })
                }
            </div>
            <div className={styles.btn_land}>
                <Link to={'/'}>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    )
}