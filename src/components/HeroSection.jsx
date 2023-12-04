import Header from "./Header";

function HeroSection() {
  return (
    <>
      <Header />
      <section id='hero' className="h-screen w-screen bg-cover bg-no-repeat bg-center text-center text-zinc-200 bg-hero-image">
        <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex flex-col justify-center"
    style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <div className='items-center'>
            <h1 className='text-[80px] uppercase font-Eczar'>Ink Infinity</h1>
            <h2 className='text-[24px] font-Eczar'>Infinite ideas, overflowing in a sea of ink.</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

