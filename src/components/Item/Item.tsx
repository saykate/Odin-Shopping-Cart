import styles from './Item.module.css'
import { FC, useState } from "react";
import { ProductType } from '../../App';

export type ItemProps = {
  product: ProductType;
  addToCart: (product: ProductType, qty: number) => void;
}

const Item: FC<ItemProps> = ({ product,  addToCart }) => {
  const [qty, setQty] = useState(0);

  const handleQtyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetButton = e.target as HTMLButtonElement;
    if(targetButton.className === 'addProduct') {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  }

  const handleAddToCart = () => {
    addToCart(product, qty)
    setQty(0);
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
          <button className="subProduct" onClick={handleQtyClick} disabled={qty === 0}>-</button>
          {/* <input className="itemCount" placeholder={qty}>{}</input> */}
          <p className='itemCount'>{qty}</p>
          <button className="addProduct" onClick={handleQtyClick}>+</button>
        </div>
        {qty > 0 && <button className="addToCart" onClick={handleAddToCart}>Add To Cart</button>}
      </div>
    </div>
  );
};

export default Item;
