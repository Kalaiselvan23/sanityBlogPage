import { Post } from "@/types"
import Image from "next/image"
import PostCard from "./PostCard"
import Link from "next/link";
export const getPosts = async (): Promise<Post[]> => {
  let query = encodeURIComponent(`*[_type=="post"]`);
  let Url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`
  try {
    const res = await fetch(Url, {
      next: {
        revalidate: 10,
      }
    });
    const data = await res.json();
    return data.result;
  }
  catch (err) {
    return [];
  }
}
const TrendingPosts = async () => {
  const posts = await getPosts();
  return (
    <div className="px-20 max-md:px-12 max-sm:px-auto my-4">
      <div className="flex justify-between max-sm:flex-col">
      <h4 className="font-semibold text-3xl my-3 mx-5 max-sm:text-center">Trending Posts</h4>
      </div>
    <div className="grid p-5 grid-cols-4 gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
      {posts.slice(0,5).map(post => (
        <Link key={post._id} href={`post/${post._id}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default TrendingPosts
