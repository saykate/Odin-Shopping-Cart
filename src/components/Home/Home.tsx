import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeCard}></div>
            <Link className={styles.shopLink} to="shop">SHOP</Link>
        </div>
    )
}

export default Home