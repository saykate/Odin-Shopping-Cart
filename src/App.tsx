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

function App() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [cartQty, setCartQty] = useState(0)

  const addToCart = (product: ProductType, qty: number) => {
    const newItem = { ...product, qty };
    setCartItems([...cartItems, newItem ]);
    setCartQty(qty + cartQty);
  };

  return (
    <div className=''>
      <BrowserRouter >
       <Navbar cartQty={cartQty}/>
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<Shop 
            addToCart={addToCart} />} path='/shop'/>
          <Route element={<Cart 
            cartItems={cartItems} />} path='/cart'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
