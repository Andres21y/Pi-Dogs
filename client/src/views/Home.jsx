import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from '../redux/actions';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Paginated from '../components/Paginated';
import Card from '../components/Card';
import Loading from "../components/Loading";
import styles from '../styles/home.module.css';


export default function Home() {

    const allBreeds = useSelector(state => state.stateBreeds)
    const temperaments = useSelector(state => state.temperament)

    const tempes = temperaments.filter(e => e.name !== "" && e.name !== "[object Object]")
    const temp = tempes.map(e => e.name)

    let dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1)

    const [breedPage,] = useState(8)
    const indexLast = currentPage * breedPage;

    const indexFirst = indexLast - breedPage


    const currentBreed = allBreeds.slice(indexFirst, indexLast)

    const [, setOrder] = useState('')

    const upDater = (num) => {
        setCurrentPage(num)
    }

    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [dispatch])


    return (
        <div className={styles.home_content}>
            <div className={styles.home_container}>
                <div className={styles.ban}>
                    <nav className={styles.ban}>
                        <div className={styles.h3}>
                            <h3> Dog Breeds App</h3>
                        </div>
                        <div className={styles.search}> <SearchBar setCurrentPage={setCurrentPage} dispatch={dispatch} /> </div>
                    </nav>
                </div>
                <br />
                <div className={styles.filters}>
                    <Filters
                        setCurrentPage={setCurrentPage}
                        temp={temp} setOrder={setOrder}
                        dispatch={dispatch} currentBreed={currentBreed} />
                </div>
                <div className={styles.meet}>
                    <div className={styles.pagi_home}>
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
                                            life_span_max={e.life_span_max}
                                            life_span_min={e.life_span_min}
                                            temperaments={e.temperaments}
                                            created={e.created} />
                                    )
                                })
                        }
                    </div>

                </div>
                <div className={styles.btn_land}>
                    <Link to={'/'}>
                        <button>Landing</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}