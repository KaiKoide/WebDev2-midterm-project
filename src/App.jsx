import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';

export const ProductArray = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  // console.log("cartProducts", cartProducts)

  const updateCart = (product) => {
    const existingProduct = cartProducts.find((el) => el.id === product.id);
    console.log('existingProduct', existingProduct);
    if(existingProduct){
      setCartProducts((prev) => {
        return prev.map((item) =>
          item.id === existingProduct.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      });
    } else {
      setCartProducts((prev) => {
        return [...prev, product]
      });
    }
  }
  // console.log(cartProducts);

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
