// import { useState } from 'react'
// import './App.css'
import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'

export const ProductArray = createContext();

function App() {

  // const [cartsVisibility, setCartsVisibility] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  console.log("cartProducts", cartProducts)

  const updateCart = (product) => {
    console.log("Product", product)
    setCartProducts((prev) => [...prev, product])
  }

  const value = {
    cartProducts,
    updateCart
  }

  return (
    <>
      <HeroSection />
      <ProductArray.Provider value={value}>
        <MenuSection />
      </ProductArray.Provider>
    </>
  )
}

export default App
