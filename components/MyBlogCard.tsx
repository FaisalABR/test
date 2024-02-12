import Link from "next/link";
import { delPost } from "@/app/lib/action";
import { BlogCardTypes } from "@/app/lib/definitions";

const MyBlogCard = async ({ title, name, body, id }: BlogCardTypes) => {
  const removeWithId = delPost.bind(this, id);
  return (
    <div className="px-5 py-3 flex flex-col justify-between rounded-lg shadow-md border-[1px]">
      <div>
        <div className="flex flex-col">
          <p className="font-bold text-orange-500 line-clamp-2">{title}</p>
          <div className="flex items-center gap-1">
            <p className="text-gray-600 text-sm">{name}</p>
          </div>
        </div>
        <div className="h-px w-full bg-slate-400 mt-3"></div>
        <p className="text-xs md:text-sm my-3 text-slate-700 line-clamp-5">
          {body}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={`/posts/${id}`}>
          <button className="px-3 py-2 transition bg-gradient-to-br hover:bg-gradient-to-tl from-purple-700 via-violet-600 to-orange-400 font-bold text-white rounded-md cursor-pointer text-xs md:text-sm">
            Details
          </button>
        </Link>

        <form action={removeWithId}>
          <button className="px-3 py-2 transition bg-red-400 font-bold text-white rounded-md cursor-pointer text-xs md:text-sm">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyBlogCard;
