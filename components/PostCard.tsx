import { sanityClient, urlFor } from '@/sanity'
import { Post } from '@/types'
import Image from 'next/image';
export const fetchAuthor=async(ref:string)=>{
    let query=encodeURIComponent(`*[_type=="author"]`);
    let Url=`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`
   try{ 
    const res=await fetch(Url);
    const authorData=await res.json();
    return authorData;
    }
    catch(err){
        console.log(err);
    }
}
const PostCard = ({ post }: Post) => {
    const dateObj = new Date(post._updatedAt);
    fetchAuthor("948ce38a-bdf0-40e0-a21e-e6b97b76e0bc").then(data=>console.log(data)).catch(err=>console.log(err))
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img src={urlFor(post.mainImage.asset).quality(10).url().toString()} width={400} height={300} alt='image' />
            </figure>
            <div className="card-body relative">
                <div className='absolute top-0 text-gray-600 text-opacity-40 font-bold text-sm my-3 left-8 flex items-center'>
                    {/* <span>{dateObj.toLocaleDateString()}</span> */}
                    <span>Last Updated:{dateObj.toLocaleTimeString()}</span>
                </div>
                <h2 className="card-title">
                    {post.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{post?.description}</p>
                <div className="card-actions justify-end">
                    {post.categories.map((category, index: number) => {
                        return <div key={index} className="badge badge-outline">
                            {category._key}
                        </div>
                    })}
                </div>
                <div>
                    {/* {post.author} */}
                </div>
            </div>
        </div>
    )
}

export default PostCard
