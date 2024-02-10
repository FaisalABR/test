import { getUser } from "@/app/lib/api/users";
import Link from "next/link";

export interface BlogCardTypes {
  id?: number;
  title: string;
  body: string;
  user_id: number;
}

const BlogCard = async ({ id, title, body, user_id }: BlogCardTypes) => {
  const user = await getUser(user_id);
  const name = user.name ? user.name : "Unknown";

  return (
    <div className="px-5 py-3 rounded-lg shadow-md border-[1px]">
      <div className="flex flex-col">
        <p className="font-bold text-orange-500 line-clamp-2">{title}</p>
        <div className="flex items-center gap-1">
          <p className="text-gray-600 text-sm">{name}</p>
          {user.status ? (
            user.status === "active" ? (
              <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            ) : (
              <div className="w-[10px] h-[10px] bg-gray-500 rounded-full"></div>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="h-px w-full bg-slate-400 mt-3"></div>
      <p className="text-xs md:text-sm my-3 text-slate-700 line-clamp-5">
        {body}
      </p>
      <Link href={`/posts/${id}`}>
        <button className="px-3 py-2 transition bg-gradient-to-br hover:bg-gradient-to-tl from-purple-700 via-violet-600 to-orange-400 font-bold text-white rounded-md cursor-pointer text-xs md:text-sm">
          Details
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
