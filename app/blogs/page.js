import { Suspense } from "react";
import BlogItem from "./blogitem";
import Loading from "./loading";
import { getPosts } from "../libs/getPosts";





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
      </Suspense>
    </>
  );
}

export default Blogs;
