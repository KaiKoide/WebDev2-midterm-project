import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./Header"

function HeroSection() {
  const heroStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
  return (
    <>
      <Header />
      <section id='hero' className="h-screen w-screen bg-cover bg-no-repeat bg-center text-center text-zinc-200 bg-hero-image">
        <div className="absolute left-0 right-0 top-[56px] h-full w-full overflow-hidden bg-fixed flex flex-col justify-center"
    style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <div className='items-center'>
            <h1 className='text-[80px] uppercase'>Ink Infinity</h1>
            <h2 className='text-[24px]'>Infinite ideas, overflowing in a sea of ink.</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

