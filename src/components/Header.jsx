import { useState, useContext } from "react";
import ShoppingCart from './ShoppingCart'
import { ProductArray } from '../App';
import { IoCartOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";

function Header() {
  const [cartsVisibility, setCartsVisibility] = useState(false);
  const { cartProducts } = useContext(ProductArray);
  const totalProducts = cartProducts.reduce((amount, product) => amount + product.qty, 0);


  return (
    <>
      <header className='flex sm:justify-start w-full text-sm py-4 bg-slate-800 text-zinc-200 fixed z-10 shadow-xl'>
        <ShoppingCart visibility={cartsVisibility} onClose={() => setCartsVisibility(false)} />
        <nav className='max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between'>
          <a className='hover:opacity-80 transition-all duration-100' href='#'><GiBlackBook  className='text-2xl' /></a>
          <div className='flex'>
            <ul className='flex px-5 gap-3 items-center font-Roboto'>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#hero'>home</a></li>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#menu'>products</a></li>
            </ul>
            <button onClick={() => setCartsVisibility(true)} className='shopping-cart-btn flex hover:opacity-80 items-center gap-1'>
              <IoCartOutline className='text-2xl' />
              {cartProducts.length > 0 && <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">{totalProducts}</span>}
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header