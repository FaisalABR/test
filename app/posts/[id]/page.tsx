import { getCommentPost, getPost } from "@/app/lib/api/post";
import { getUser } from "@/app/lib/api/users";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import Comment from "@/components/Comment";
import CommentsProvider from "@/components/CommentProvider";

export const dynamic = "force-dynamic";

const pages = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const post = await getPost(id);
  const user = await getUser(post?.user_id);
  const commentsPost = await getCommentPost(id);
  const name = user.name ? user.name : "Unknown";
  const email = user.email ? user.email : "Unknown";

  return (
    <CommentsProvider comments={commentsPost}>
      <div className="w-full pt-20  ">
        <div className="wrap px-10 md:px-24 ">
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
      </div>
    </CommentsProvider>
  );
};

export default pages;
