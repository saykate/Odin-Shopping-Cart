import { FC } from 'react'
import Item from "../Item/Item";
import styles from "./Shop.module.css"
import { CartItem } from "../../App";

export type ShopProps = {
  addToCart: (item: CartItem, qty: number) => void;
}

const Shop: FC<ShopProps> = ({ addToCart }) => {

  return (
    <div className={styles.shopContainer}>
      <h1>This is the Shop</h1>
      <div className={styles.itemGrid}>
        <Item addToCart={addToCart}/>
        <Item addToCart={addToCart}/>
        <Item addToCart={addToCart}/>
      </div>
    </div>
  );
};

export default Shop;
