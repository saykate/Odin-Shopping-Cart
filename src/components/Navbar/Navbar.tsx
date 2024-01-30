import { Link } from "react-router-dom";
import { FC } from "react";
import styles from "./Navbar.module.css";

export type NavTypes = {
  cartQty: number;
};

const Navbar: FC<NavTypes> = ({ cartQty }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li className={styles.cartLi}>
          <Link className={styles.cart} to="cart">
            Cart
            <img src="/assets/cart-outline.svg" />
            {cartQty}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
