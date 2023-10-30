import React from 'react'
import { fetchDetails } from '@/utils/getDetails';
import { Post } from '@/types';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity';
import {PiHandsClappingThin,PiChatCircleThin,PiBookmarksSimpleThin,PiPlayCircleThin,PiShareThin} from "react-icons/pi"
import CommentForm from '@/components/CommentForm';
import CommentsDiv from '@/components/CommentsDiv';
type Props={
    params:{
        id:string,
    }
}
type authorType={
  name:string,
  image:{
    _type:"image",
    asset:{
      _ref:string,
      _type:"reference",
    }
  }
}
const PostPage = async({params:{id}}:Props) => {
  const postQuery=`*[_type=="post" && _id=="${id}"]{
    _id,title,body,mainImage,_updatedAt,title,author,"comments":*[_type=='comment' && post._ref==^._id && approved==true]
  }`
  const postFetched:Post[]=await fetchDetails(postQuery)
  const post=postFetched[0];
  const authorQuery=`*[_id=="${post?.author._ref}"]{name,image}`
  const authorDetails:authorType[]=await fetchDetails(authorQuery);

  return (
    <div className='w-3/6 max-sm:w-5/6 mx-auto'>
      <h2 className='font-bold text-center my-5 max-sm:text-2xl'>{post.title}</h2>
      <div className='grid grid-cols-[3rem,auto] gap-x-3 my-4'>
        <img src={urlFor(authorDetails[0].image.asset._ref).quality(50).height(50).width(50).url()} className='rounded-full inline my-auto row-span-2'/>
        <p className='inline-block font-semibold'>{authorDetails[0].name}</p>
        <p className='col-start-2 font-medium text-gray-500 text-sm '>Last Updated: {new Date(post._updatedAt).toLocaleDateString()}</p>
      </div>
      <div className='flex justify-between w-full text-xl my-5'>
        <div className='flex gap-3'>
          <PiHandsClappingThin/>
          <a href='#comments' className='relative'>
          <PiChatCircleThin/>
          <span className='absolute top-0.5 text-sm left-1.5 font-thin'>{post.comments.length}</span>
          </a>
        </div>
        <div className='flex gap-3'>
          <PiBookmarksSimpleThin/>
          <PiPlayCircleThin/>
          <PiShareThin/>
        </div>
      </div>
      <img src={urlFor(post.mainImage.asset._ref).quality(50).url()} className='my-3' />
      <div className='leading-8'>
        <PortableText
        value={post.body}
        />
      </div>
      <div className='flex flex-col my-5'>
        <span className='text-sm text-orange-500'>Leave comments before you leave..</span>
        <h3 className='text-2xl font-semibold'>Comments</h3>
        <div>
          <CommentForm postId={post._id}/>
      </div>
      </div>
     <CommentsDiv comments={post.comments}/>
    </div>
  )
}

export default PostPage
