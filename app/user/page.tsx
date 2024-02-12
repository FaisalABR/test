import { MdOutlinePerson2 } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { getUser } from "../lib/api/users";
import Blog from "@/components/Blog";
import Link from "next/link";

export const dynamic = "force-dynamic";

const page = async () => {
  const id = 6262422;
  const user = await getUser(id);

  return (
    <div className="w-full pt-20">
      <div className="wrap px-10 md:px-24">
        <h1 className="head_text purple_gradient">My Profile</h1>
        <p className="desc my-2">Welcome to your personalized page.</p>
        <div className="mt-7">
          <p className="flex items-center gap-2">
            <MdOutlinePerson2 size={25} color="orange" /> {user?.name}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineMail size={25} color="orange" /> {user?.email}
          </p>
          <p className="flex items-center gap-2">
            <AiOutlineMail size={25} color="orange" /> {user?.gender}
          </p>
          <div className="flex gap-2 items-center my-3">
            {user?.status === "active" ? (
              <div className="w-fit px-2 py-1 rounded-xl bg-orange-400 flex gap-2 items-center my-2">
                <div className="h-[20px] w-[20px] rounded-full bg-green-400"></div>
                <span className="text-white font-semibold text-xs">Active</span>
              </div>
            ) : (
              <div className="w-fit px-2 py-1 rounded-xl bg-orange-400 flex gap-2 items-center my-2">
                <div className="h-[20px] w-[20px] rounded-full bg-red-400"></div>
                <span className="text-white text-xs">Inactive</span>
              </div>
            )}
            <Link href="/user/edit">
              <button className="px-3 py-2 transition bg-gradient-to-br from-purple-700 via-violet-600 to-orange-400 font-semibold text-white rounded-md cursor-pointer text-xs md:text-sm">
                Edit Profile
              </button>
            </Link>
            <Link href="/user/search">
              <button className="px-3 py-2 transition border-[1px] border-orange-400 text-orange-400 rounded-md cursor-pointer text-xs md:text-sm">
                Search User
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-orange-400">My Post</h2>
            <Link href="/user/upload">
              <button className="px-3 py-2 transition bg-orange-400   text-white rounded-md cursor-pointer text-xs md:text-sm flex items-center gap-2">
                <FaPlus /> Posts
              </button>
            </Link>
          </div>
          <Blog id={id} name={user.name} />
        </div>
      </div>
    </div>
  );
};

export default page;
