import { Suspense } from "react";
import BlogItem from "./blogitem";
import Loading from "./loading";
import Link from "next/link";


const getPosts = async () => {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=30`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function Blogs() {
  const posts = await getPosts();

  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <div className="grid grid-cols-3 gap-2">
          {posts.blogs ? (
            posts.blogs.map((post) => (
              <BlogItem key={post.id} post={post}></BlogItem>
            ))
          ) : (
            <h2>No blog post available</h2>
          )}
          
        </div>
        {/* <div className="flex gap-3 mt-5 text-xl justify-center">
          <Link href={'/blogs' }>Next Page {`>>`} </Link>
          ||
          <Link href={'/blogs' }>{`>>`} Previous Page  </Link>
           
        </div> */}
      </Suspense>
    </>
  );
}

export default Blogs;
