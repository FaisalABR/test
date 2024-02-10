import { getPost } from "@/app/lib/api/post";
import { getUser } from "@/app/lib/api/users";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Comment from "@/components/Comment";

interface UserPagesTypes {
  params: {
    id: string;
  };
}

const pages = async ({ params }: UserPagesTypes) => {
  const { id } = params;
  const post = await getPost(id);
  const user = await getUser(post?.user_id);
  const name = user.name ? user.name : "Unknown";
  const email = user.email ? user.email : "Unknown";
  console.log("User>>>", user);

  return (
    <div className="w-full px-10 md:px-24 pt-16">
      <h1 className="title_text purple_gradient">{post.title}</h1>
      <p className="text-sm my-2 flex gap-2 items-center font-bold">
        <LuPencilLine size={20} color="orange" /> {name}
      </p>
      <p className="text-sm my-2 flex gap-2 items-center">
        <MdOutlineEmail size={20} color="orange" /> {email}
      </p>
      <p className="text-sm my-3">{post.body}</p>
      <Comment id={id} />
    </div>
  );
};

export default pages;
