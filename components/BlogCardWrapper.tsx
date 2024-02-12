const BlogCardSkeleton = () => {
  return (
    <div className="px-5 py-3 rounded-lg shadow-md border-[1px]">
      <div className="flex flex-col">
        <p className="font-bold text-gray-200 line-clamp-2 bg-gray-200 rounded-md">
          title
        </p>
        <div className="flex items-center gap-1 my-2">
          <p className="text-gray-200 text-sm bg-gray-200 rounded-md">test</p>
        </div>
      </div>
      <div className="h-px w-full bg-slate-400 mt-3"></div>
      <p className="text-xs md:text-sm my-3 text-gray-200 line-clamp-5 bg-gray-200 rounded-md h">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque incidunt
        nesciunt exercitationem repudiandae. Consectetur quos nulla sunt ea
        unde? Beatae!
      </p>

      <button className="px-3 py-2 transition bg-gray-200 font-bold text-gray-200 rounded-md text-xs md:text-sm">
        Details
      </button>
    </div>
  );
};

const BlogCardWrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
};

export default BlogCardWrapper;
