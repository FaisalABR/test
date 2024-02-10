"use client";
import { createComment, getCommentPost } from "@/app/lib/api/post";
import React, { useEffect, useState } from "react";

const Comment = ({ id }: { id: string }) => {
  const [getComments, setGetComments] = useState([]);
  const [comments, setComments] = useState({
    post_id: id,
    body: "",
    name: "Faisal Abu Bakar Riza",
    email: "faisal@mail.com",
  });

  useEffect(() => {
    const fetchComment = async () => {
      const response = await getCommentPost(id);
      setGetComments(response);
    };

    fetchComment();
  }, []);

  const handleSubmit = async () => {
    const response = await createComment(id, comments);
    if (response.ok) {
      console.log("Sucess");
    }
    setComments({ ...comments, body: "" });
  };

  console.log("Comments>>>", getComments);

  return (
    <>
      <div className="rounded-lg bg-gray-200 px-1 py-2">
        {getComments.map((item) => (
          <div
            key={item.id}
            className="w-full bg-gray-600 rounded-md px-2 py-1  my-3"
          >
            <h3 className="text-sm text-orange-400">{item.name}</h3>
            <p className="text-sm text-white">{item.body}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={comments.body}
        placeholder="share your thoughts..."
        onChange={(e) => setComments({ ...comments, body: e.target.value })}
        className="px-2 py-1 my-2 shadow-md"
      />
      <button onSubmit={handleSubmit} className="text-white bg-black">
        Submit
      </button>
    </>
  );
};

export default Comment;
