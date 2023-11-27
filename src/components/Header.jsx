// import { func } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { IoCartOutline } from "react-icons/io5"
import { GiBlackBook } from "react-icons/gi"

function Header() {
  return (
    <>
      <header className='flex sm:justify-start w-full text-sm py-4 bg-slate-800 text-zinc-200'>
        <nav className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'>
          <a className='hover:opacity-80 transition-all duration-100' href='#'><GiBlackBook  className='text-2xl' /></a>
          <div className='flex'>
            <ul className='flex px-5 gap-3'>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#hero'>home</a></li>
              <li className='uppercase duration-100 hover:opacity-80'><a href='#menu'>products</a></li>
            </ul>
            <a href="#"><IoCartOutline className='text-2xl' /></a>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header