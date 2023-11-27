import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"

function HeroSection() {
  return (
    <>
      <Header />
      <section id='hero' className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center text-center content-center bg-slate-800 text-zinc-200 bg-hero-image">
        <div className='items-center'>
          <h1 className='text-[80px] uppercase'>Ink Infinity</h1>
          <h2 className='text-[24px]'>Infinite ideas, overflowing in a sea of ink.</h2>
        </div>
      </section>
    </>
  )
}

export default HeroSection

