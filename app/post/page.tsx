import React from 'react'
import { getPosts } from '@/components/TrendingPosts'
import post from '@/medium-clone/schemas/post';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
const Posts = async() => {
    const posts=await getPosts();
  return (
    <div className='grid p-5 grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3'>
      {posts.map((post)=><Link href={`/post/${post._id}`} key={post._id}>
      <PostCard post={post} />
      </Link>)}
    </div>
  )
}

export default Posts
