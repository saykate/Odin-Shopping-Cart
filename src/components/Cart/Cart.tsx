import styles from './Cart.module.css';
import { FC, useState } from 'react'
import { ProductType } from '../../App';

export type CartProps = {
    cartItems: ProductType[];
  }

const Cart: FC<CartProps> = ({ cartItems }) => {

    const cartTotal = cartItems.reduce((total, item) => {
        const itemTotal = item.qty * item.price;
        return total + itemTotal
    }, 0)

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
                      <td className={styles.quant}><div className={styles.qtyButtonGroup}><button>-</button>{item.qty}<button>+</button></div></td>
                      <td><button>X</button></td>
                    </tr>              
                  ))}
                </tbody>
            </table> 
            <div className={styles.total}>Cart Total: {cartTotal}</div>
        </div>
    )
}

export default Cart