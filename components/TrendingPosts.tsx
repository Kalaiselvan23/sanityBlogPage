import { Post } from "@/types"
import Image from "next/image"
import PostCard from "./PostCard"
const getPosts=async():Promise<Post[]>=>{
  let query=encodeURIComponent(`*[_type=="post"]`);
  let Url=`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`
  try
  {
    const res=await fetch(Url);
    const data=await res.json();
    return data.result;
  }
  catch(err)
  {
    return [];
  }
}
const TrendingPosts = async() => {
  console.log("Trending posts");
  const posts=await getPosts();
  return (
    <div className="px-20 max-md:px-12 max-sm:px-auto my-4 flex gap-2 flex-wrap">
        {posts.map(post=><PostCard key={post._id} post={post}/>)}
        {/*  */}
    </div>
  )
}

export default TrendingPosts
