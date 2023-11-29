// import { useState } from 'react'
// import './App.css'
import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import HeroSection from './components/HeroSection'
import MenuSection from './components/MenuSection'

export const ProductArray = createContext();

function App() {

  // const [cartsVisibility, setCartsVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const value = {
    products,
    setProducts
  }


  return (
    <>
      <HeroSection />
      <ProductArray.Provider value={value}>
        <MenuSection products={products} setProducts={setProducts}  />
      </ProductArray.Provider>
    </>
  )
}

export default App
