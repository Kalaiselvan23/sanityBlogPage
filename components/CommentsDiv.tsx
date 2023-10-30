import { Comment } from '@/types'
import React from 'react'

const CommentsDiv = ({comments}:{comments:Comment[]}) => {
  return (
    <div className='flex flex-col gap-4 rounded-lg mb-5' id='comments'>
        {comments.length>0?comments.map(comment=>{
            return <div key={comment._id} className='border-2 border-gray-300 p-3'>
              <div className='flex justify-between mb-2 items-center'>
              <span className='font-semibold text-lg max-sm:text-sm text-orange-500'>{comment.name}</span>
              <span className='text-gray-500 max-sm:text-xs'>[{new Date(comment._createdAt).toLocaleDateString()+" "+new Date(comment._createdAt).toLocaleTimeString()}]</span>
              </div>
              <p className='text-md max-sm:text-xs'>{comment.comment}</p>
              </div>
        }):<p>No comments to show</p>}
       
    </div>
  )
}

export default CommentsDiv
