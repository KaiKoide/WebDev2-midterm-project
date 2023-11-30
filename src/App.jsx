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

  // console.log("cartProducts", cartProducts)

  const updateCart = (product) => {
    // console.log("Product", product);
    // console.log("cartProducts",cartProducts)
    const fn = cartProducts.find((el) => el.title === product.title);
     console.log('fn', fn);
    if(fn){
     console.log('true');
     setCartProducts((prev) => {
      return [...prev,
        {
          ...fn,
          qty: fn.qty + 1
        }
      ]
    });
    } else {
      setCartProducts((prev) => {
        return [...prev, product]
      });
    }
  }

  const value = {
    cartProducts,
    setCartProducts,
    updateCart
  }

  return (
    <>
      <ProductArray.Provider value={value}>
        <HeroSection />
        <MenuSection />
      </ProductArray.Provider>
    </>
  )
}

export default App
