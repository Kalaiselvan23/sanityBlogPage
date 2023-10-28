import Hero from '@/components/Hero'
import TrendingPosts from '@/components/TrendingPosts'
import { post } from '@/types';
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <Hero/>
   <TrendingPosts/>
    </>
  )
}

