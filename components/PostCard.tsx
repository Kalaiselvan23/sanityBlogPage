import { sanityClient, urlFor } from '@/sanity'
import { Post } from '@/types'
import Image from 'next/image';

type props={
    post:Post,
}
const PostCard = ({ post}: props) => {
    const dateObj = new Date(post._updatedAt);
    const todayDate=new Date();
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={urlFor(post.mainImage.asset._ref).quality(30).url().toString()} width={400} height={400} alt='image' className='object-fill' />
            </figure>
            <div className="card-body relative">
                <div className='absolute max-sm:text-xs top-0 text-gray-600 text-opacity-40 font-bold text-sm my-3 left-8 flex items-center'>
                    <span>Last Updated:{dateObj.toLocaleTimeString()}</span>
                </div>
                <h2 className="card-title">
                    {post.title}
                  {dateObj.toLocaleDateString()===todayDate.toLocaleDateString()?<div className="badge badge-secondary">NEW</div>:null}
                </h2>
                <p className="line-clamp-2">{post.description}</p>

            </div>
        </div>
    )
}


export default PostCard
