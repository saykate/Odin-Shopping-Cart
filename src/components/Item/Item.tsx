import tempItem from "../tempItem";
import styles from './Item.module.css'
import { useState, FC } from "react";
import { CartItem } from "../../App";

export type ItemProps = {
  addToCart: (item: CartItem, qty: number) => void;
}

const Item: FC<ItemProps> = ({ addToCart }) => {
  const [qty, setQty] = useState(0)

  const handleQtyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetButton = e.target as HTMLButtonElement;
    if(targetButton.className === 'addProduct') {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  }

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetButton = e.target as HTMLButtonElement;
    console.log(targetButton)
    // addToCart(targetButton, qty)
  }

  return (
    <div className={styles.itemCard}>
      <img src={tempItem.image} alt="whale" />
      <h2 className="itemTitle">{tempItem.title}</h2>  
      <p className="itemPrice">${tempItem.price}</p>
      <div className={styles.buttonGroup}>
        <button className="subProduct" onClick={handleQtyClick} disabled={qty === 0}>-</button>
        <p className="itemCount">{qty}</p>
        <button className="addProduct" onClick={handleQtyClick}>+</button> 
      </div>
      {qty > 0 && <button className="addToCart" onClick={handleAddToCart}>Add To Cart</button>}
    </div>
  );
};

export default Item;
