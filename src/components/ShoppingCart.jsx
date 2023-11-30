import react from 'react';
import "../style/shoppingCart.css";
import { useState, useContext } from "react";
import { ProductArray } from '../App';
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";



function ShoppingCart({
  // Visibility for the shopping cart
  visibility,
  // Products in the shopping cart
  products,
  // This prop will be run when we want to remove the products
  onProductRemove,
  // This prop will be run when we want to close the cart
  onClose,
  // This prop will be run when we want to change a quantity of a product in the cart
  onQuantityChange,
  addProductToCart
}) {
  const { cartProducts, setCartProducts } = useContext(ProductArray);

  // console.log('Shopping cart', cartProducts);

  const onRemoveProduct = (removedProduct) => {
    console.log('removedProduct', removedProduct);
    console.log('cartProducts', cartProducts);
    const newCartProducts = cartProducts.filter(product => product.id !== removedProduct.id);
    console.log('newCartProducts', newCartProducts);
    setCartProducts(newCartProducts);
  }

  const onRemoveAllProducts = () => {
    setCartProducts([]);
  }


  return (
    <>
      <div
        className='modal-custom'
        style={{
          display: visibility
            ? "block"
            : "none"
        }}>
        <div className='shopping-cart rounded-md'>
          <div className='header-custom p-3 rounded-md'>
            <h2 className='text-3xl font-bold capitalize'>shopping cart</h2>
            <button  className='close-btn text-2xl duration-200 hover:opacity-50' onClick={onClose}>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className='cart-products'>
            {cartProducts.length === 0 && (
              <span className='empty-text'>
                Your basket is currently empty
              </span>
            )}
            {cartProducts.map(product => (
              <div className='cart-product rounded-md' key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-[200px]'
                />
                <div className='product-info'>
                  <h3>
                    {product.title}
                  </h3>
                  <span className='product-price before:content-["$"]'>
                    {product.price * product.qty}
                  </span>
                </div>
                <select className='count' value={product.qty} onChange={(event) => {
                  // onQuantityChange(product.id, event.target.value);
                }}>
                  {
                    [...Array(5).keys()].map(number => {
                      const num = number + 1;
                      return <option value={num} key={num}>{num}</option>
                    })
                  }
                </select>
                <button className='btn remove-btn' onClick={() => onRemoveProduct(product)}>
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
            <div className='flex gap-3'>
              {cartProducts.length > 0 && <button className='btn checkout-btn bg-slate-800' onClick={onRemoveAllProducts}>All Clear</button>}
              {cartProducts.length > 0 && <button className='btn checkout-btn bg-slate-800'>Proceed to checkout</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart