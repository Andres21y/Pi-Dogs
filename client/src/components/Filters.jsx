import styles from '../styles/filters.module.css'
import { Link } from 'react-router-dom'
import { filterTemperament, orderName, orderWeight, orderBreeds } from '../redux/actions';
export default function Filters({ temp, setCurrentPage, dispatch, setOrder }) {



    const handleTemp = (e) => {
        e.preventDefault();
        dispatch(filterTemperament(e.target.value))
        setCurrentPage(1)
    }

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderName(e.target.value));
        setCurrentPage(1);
        setOrder(`order ${e.target.value}`)
    }

    const handleWeigth = (e) => {
        e.preventDefault();
        dispatch(orderWeight(e.target.value));
        setCurrentPage(1);
        setOrder(`order ${e.target.value}`)
    }
    const handleBreeds = (e) => {
        e.preventDefault();
        dispatch(orderBreeds(e.target.value));
        setCurrentPage(1);
        // setOrder(`order ${e.target.value}`)
    }

    return (
        <div className={styles.filter_main} >
            Filter by:
            <div className={styles.alfa}>
                <select onChange={e => handleSort(e)}>
                    <option hidden key={'Alpabyetic'}>-- Alpabyetic --</option>
                    <option value="ascending" key={'ending'}> Ascending</option>
                    <option value="descending" key={'Desc'}> Descending</option>
                </select>
            </div>
            <div className={styles.weig}>
                <select onChange={e => handleWeigth(e)}>
                    <option hidden key={'Weight'}> -- Weight -- </option>
                    <option value="max" key={'Max to Min'}> Max to Min </option>
                    <option value="min" key={'Min to Max'}> Min to Max </option>
                </select>
            </div>
            <div className={styles.breed}>
                <select onChange={e => handleBreeds(e)}>
                    <option hidden  key={'Breeds'}>-- Breeds --</option>
                    <option value="all"  key={'All'}> All </option>
                    <option value="existing"  key={'existing'}> existing </option>
                    <option value="created" key={'created'}> created </option>
                </select>
            </div>
            <div className={styles.tem}>
                {
                    !temp ? <p>No Tem yet</p> :
                        <select onChange={e => handleTemp(e)}>
                            <option key={'Temperaments'} value='all'  >-- Temperaments --</option>
                            {
                                temp.map(e => {
                                    return (
                                        <option key={e} value={e}>{e}</option>
                                    )
                                })}
                        </select>
                }
            </div>
            <div className={styles.create}>
                <Link to={'/Create'}>
                    <button className={styles.btn_create}>New Breed</button>
                </Link>
            </div>
        </div>
    )
}