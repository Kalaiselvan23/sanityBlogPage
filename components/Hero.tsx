import React from 'react'

const Hero = () => {
  return (
    <main className='px-24 py-10 bg-[#FFC017]'>
    <div className='flex flex-col gap-3'>
      <h2 className='max-sm:text-4xl'>Stay curious</h2>
      <p className='w-fit text-xl max-sm:text-sm'>Discover stories,thinking and expertise from writers on any topic</p>
      <span className='btn bg-black rounded-2xl outline-none border-none w-fit hover:bg-black text-white'>Start Reading</span>
    </div>
  </main>
  )
}

export default Hero
