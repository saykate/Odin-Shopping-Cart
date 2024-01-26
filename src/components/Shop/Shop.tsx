import { FC, useEffect, useState } from 'react'
import Item from '../Item/Item'
import { ProductType } from "../../App";
import styles from "./Shop.module.css"

export type ShopProps = {
  addToCart: (product: ProductType, qty: number) => void;
}

const Shop: FC<ShopProps> = ({ addToCart }) => {
  const [products, setProduct] = useState<ProductType[]>([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
            if (response.status >= 400) {
            throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setProduct(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    if (error) {
      return (
        <h1>Error fetching data...</h1>
      )
    }
  
  return (
    <div className={styles.shopContainer}>
      <h1>This is the Shop</h1>
      <div className={styles.itemGrid}>
      {products.map((product) => (
          <Item key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
