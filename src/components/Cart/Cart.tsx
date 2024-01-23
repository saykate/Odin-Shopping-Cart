import styles from './Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.cartContainer}>
            <h1>This is the Shopping Cart</h1>
            <div className="cartItems">
            {/* map through cartItems and display Name, qty and Price (via Id?) */}
            </div>
        </div>
    )
}

export default Cart