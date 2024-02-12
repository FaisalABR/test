import React, { Suspense } from "react";
import MyBlogCard from "./MyBlogCard";
import BlogCardWrapper from "./BlogCardWrapper";
import { getUserPost } from "@/app/lib/api/users";
import { BlogCardTypes } from "@/app/lib/definitions";

export const dynamic = "force-dynamic";

const Blog = async ({ id, name }: { id: number; name: string }) => {
  const posts = await getUserPost(id);

  return (
    <Suspense fallback={<BlogCardWrapper />}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10 ">
        {posts.map((item: BlogCardTypes) => (
          <MyBlogCard
            key={item.id}
            id={item.id}
            name={name}
            user_id={item.user_id}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Blog;
