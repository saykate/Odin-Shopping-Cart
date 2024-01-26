import styles from './Item.module.css'
import { FC, useState } from "react";
import { ProductType, ButtonType } from '../../App';

export type ItemProps = {
  product: ProductType;
  addToCart: (product: ProductType, qty: number) => void;
}

const Item: FC<ItemProps> = ({ product,  addToCart }) => {
  const [qty, setQty] = useState(0);

  const handleQtyClick = (buttonType: ButtonType) => {
    if(buttonType === 'increment') {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  }

  const handleAddToCart = () => {
    addToCart(product, qty)
    setQty(0);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQty(parseInt(e.target.value))
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <h2>{product.title}</h2>  
      <p>${product.price}</p>
      <p>{product.description}</p>
      <div className={styles.buttonGroup}>
        <div className={styles.countGroup}>
          <button onClick={() => handleQtyClick("decrement")} disabled={qty === 0}>-</button>
          <input type='number' className='itemCount' value={qty} onChange={handleChange}/>
          <button onClick={() => handleQtyClick("increment")}>+</button>
        </div>
        {qty > 0 && <button className="addToCart" onClick={handleAddToCart}>Add To Cart</button>}
      </div>
    </div>
  );
};

export default Item;
