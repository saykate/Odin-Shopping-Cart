// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default App
