import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;