import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NotfoundPage = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <Link href={"/"}>
      <Image src={"/assets/not-found.gif"} height={600} width={600} alt="not-found" />
        </Link>
    </div>
  )
}

export default NotfoundPage
