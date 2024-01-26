import Navbar from './components/Navbar/Navbar'
import Cart from "./components/Cart/Cart.tsx";
import Shop from "./components/Shop/Shop.tsx";
import Home from "./components/Home/Home.tsx";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export type ProductType = {
  id: number; 
  title: string; 
  price: number; 
  category: string;
  description: string; 
  image: string; 
  qty: number;
}

export type ButtonType = 'increment' | 'decrement'; 

function App() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [cartQty, setCartQty] = useState(0);

  const addToCart = (product: ProductType, qty: number) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      const newCartItems = cartItems.map((item) =>
        item.id === existingItem.id ? { ...item, qty: item.qty + qty } : item
      );
      setCartItems(newCartItems);
    } else {
      const newItem = { ...product, qty, uniqueId: Date.now() };
      setCartItems([...cartItems, newItem]);
    }
  
    setCartQty(cartQty + qty);
  };
  

  const updateCartQty = (id: number, buttonType: ButtonType) => {
    const newCartItems = cartItems.map(item => {
      if (item.id !== id) {
        return item
      } 
      if (buttonType === 'increment') {
        return {...item, qty: item.qty + 1}
      }
      return {...item, qty: item.qty - 1} 
    }) 
    setCartItems(newCartItems)
 };

 const handleCartQtyChange = (id: number, qty: number) => {
  const newCartItems = cartItems.map((item) => 
    item.id === id ? { ...item, qty } : item
  )
  setCartItems(newCartItems)

  const newCartQty = newCartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  setCartQty(newCartQty);
}

  const deleteCartItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id)
      setCartItems(newCartItems)
    const newCartQty = newCartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
      setCartQty(newCartQty)
    }

  return (
    <div className=''>
      <BrowserRouter >
       <Navbar cartQty={cartQty}/>
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<Shop 
            addToCart={addToCart} />} path='/shop'/>
          <Route element={<Cart 
            cartItems={cartItems}
            updateCartQty={updateCartQty}
            deleteCartItem={deleteCartItem}
            handleCartQtyChange={handleCartQtyChange} />} path='/cart'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
