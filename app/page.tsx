import BlogCard, { BlogCardTypes } from "@/components/BlogCard";

import { getPosts } from "./lib/api/post";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="w-full pt-16 px-10 md:px-24">
      <h1 className="head_text purple_gradient text-center ">Blogify</h1>
      <p className="text-center mt-10 desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, tenetur.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
        {posts.map((item: BlogCardTypes) => (
          <BlogCard
            key={item.id}
            id={item.id}
            title={item?.title}
            body={item?.body}
            user_id={item?.user_id}
          />
        ))}
      </div>
    </div>
  );
}
