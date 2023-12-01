import { useState, createContext } from "react";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";

export const ProductArray = createContext();

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const updateCart = (product, qty = 1) => {
    const existingProduct = cartProducts.find((el) => el.id === product.id);
    if (existingProduct) {
      setCartProducts((prev) => {
        return prev.map((item) =>
          item.id === existingProduct.id ? { ...item, qty: item.qty + qty } : item
        );
      });

      return;
    }
    setCartProducts((prev) => [...prev, {...product, qty: 1 }]);
  };
  // console.log(cartProducts);

  const value = {
    cartProducts,
    setCartProducts,
    updateCart,
  };

  return (
    <>
      <ProductArray.Provider value={value}>
        <HeroSection />
        <MenuSection />
      </ProductArray.Provider>
    </>
  );
}

export default App;
