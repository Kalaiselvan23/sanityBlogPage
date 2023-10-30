import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <main className='px-24 py-4 bg-[#FFC017] flex items-center justify-around max-sm:flex-col-reverse'>
    <div className='flex flex-col gap-3'>
      <h2 className='max-sm:text-4xl'>Stay curious</h2>
      <p className='w-fit lg:w-96 text-xl max-sm:text-sm'>Discover stories,thinking and expertise from writers on any topic</p>
      <span className='btn bg-black rounded-2xl outline-none border-none w-fit hover:bg-black text-white max-sm:mx-auto'>Start Reading</span>
    </div>
      <Image src={"/assets/hero.gif"} width={400} height={400} alt="hero-gif" />
  </main>
  )
}

export default Hero
