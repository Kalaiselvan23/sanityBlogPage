import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar bg-transparent bg-white border-b-2 border-black px-24 sticky z-30 top-0">
        <div className="flex-1 max-sm:justify-center">
          <Link href={"/"} className="normal-case text-xl">
            <Image src={"/assets/logo.png"} height={200} width={200} alt={"logo"}/>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-md max-sm:hidden">
            <li><Link href={"/"}>Our Story</Link></li>
            <li><Link href={"https://658ff805929bea582b85f875--keen-trifle-c7fb5a.netlify.app"}>Studio</Link></li>
            <li><Link href={"https://658ff805929bea582b85f875--keen-trifle-c7fb5a.netlify.app"}>Write</Link></li>
            <li><Link href={"https://658ff805929bea582b85f875--keen-trifle-c7fb5a.netlify.app"}>Sign in</Link></li>
            <li><a className='bg-black text-white rounded-2xl'>Get Started</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar
