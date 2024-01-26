import styles from './Cart.module.css';
import { FC } from 'react'
import { ButtonType, ProductType } from '../../App';

export type CartProps = {
    cartItems: ProductType[];
    updateCartQty: (id: number, buttonType: ButtonType) => void; 
    deleteCartItem: (id: number) => void;
    handleCartQtyChange: (id: number, qty: number) => void;
  }

const Cart: FC<CartProps> = ({ cartItems, updateCartQty, deleteCartItem, handleCartQtyChange }) => {
  console.log(cartItems) 

    const cartTotal = cartItems.reduce((total, item) => {
        const itemTotal = item.qty * item.price;
        return total + itemTotal
    }, 0).toFixed(2)

    return (
        <div className={styles.cartContainer}>
            <h1>This is your Shopping Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th className={styles.product}>Product</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th className={styles.quant}>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                  {cartItems && cartItems.map((item) => (
                    <tr>
                      <td className={styles.product}><img src={item.image} alt={item.title} /></td>
                      <td className={styles.title}>{item.title}</td>
                      <td>${item.price}</td>
                      <td className={styles.quant}>
                        <div className={styles.qtyButtonGroup}>
                          <button onClick={() => updateCartQty(item.id, "decrement")} disabled={item.qty === 0}>-</button>
                          <input type="number" value={item.qty} onChange={(e) => handleCartQtyChange(item.id, Number(e.target.value))}/>
                          <button onClick={() => updateCartQty(item.id, "increment")}>+</button>
                        </div>
                      </td>
                      <td><button onClick={() => deleteCartItem(item.id)}>X</button></td>
                    </tr>              
                  ))}
                </tbody>
            </table> 
            <div className={styles.total}>Cart Total: {cartTotal}</div>
        </div>
    )
}

export default Cart