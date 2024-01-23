import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

export interface CartItem {
  id: number,
  title: string,
  price: number,
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem, qty: number) => {
    const newItem = { ...item, qty };
    setCartItems([...cartItems, newItem ]);
  };

  return (
    <div className=''>
      <Navbar />
      <Outlet context={{ cartItems, setCartItems, addToCart }} />
    </div>
  )
}

export default App
