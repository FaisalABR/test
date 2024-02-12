import BlogCard from "@/components/BlogCard";
import { getPosts } from "./lib/api/post";
import { Suspense } from "react";
import BlogCardWrapper from "@/components/BlogCardWrapper";
import Pagination from "@/components/Pagination";
import { BlogCardTypes } from "./lib/definitions";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const posts = await getPosts(currentPage);

  return (
    <div className="w-full pt-20 ">
      <div className="wrap px-10 md:px-24">
        <h1 className="head_text purple_gradient text-center ">Blogify</h1>
        <p className="text-center mt-10 desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          tenetur.
        </p>
        <div className="w-full flex justify-center items-center md:justify-end">
          <Pagination currentPage={currentPage} />
        </div>
        <Suspense fallback={<BlogCardWrapper />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-5 mb-10">
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
        </Suspense>
      </div>
    </div>
  );
}
