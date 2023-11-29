// import { func } from 'prop-types'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import ShoppingCart from './ShoppingCart'
import { IoCartOutline } from "react-icons/io5"
import { GiBlackBook } from "react-icons/gi"

function Header() {
  const [cartsVisibility, setCartsVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProductsInCart([
      ...productsInCart,
      newProduct,
    ]);
  }

  return (
    <>
      <header className='flex sm:justify-start w-full text-sm py-4 bg-slate-800 text-zinc-200'>
        <ShoppingCart visibility={cartsVisibility} products={productsInCart} addProductToCart={addProductToCart} onClose={() => setCartsVisibility(false)} />
        <nav className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'>
          <a className='hover:opacity-80 transition-all duration-100' href='#'><GiBlackBook  className='text-2xl' /></a>
          <div className='flex'>
            <ul className='flex px-5 gap-3'>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#hero'>home</a></li>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#menu'>products</a></li>
            </ul>
            <button onClick={() => setCartsVisibility(true)} className='btn shopping-cart-btn flex hover:opacity-80'>
              <IoCartOutline className='text-2xl' />
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">0</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header