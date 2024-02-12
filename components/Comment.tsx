"use client";
import React, { useState } from "react";
import { useComments } from "./CommentProvider";
import { addComment } from "@/app/lib/action";

const Comment = ({ id }: { id: string }) => {
  const [comments, setComments] = useComments();

  const [input, setInput] = useState({
    body: "",
    name: "Faisal Abu Bakar Riza",
    email: "faisal@gmail.com",
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setComments(await addComment(id, input.body, input.name, input.email));
    setInput({ ...input, body: "" });
  };

  return (
    <>
      <div className="rounded-lg bg-orange-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  px-2 py-2 my-5">
        <h3 className="text-purple-500 font-bold">Comments</h3>
        {comments.length !== 0 ? (
          comments?.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white border-[1px] border-orange-400 rounded-md px-2 py-1  my-3"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.name}
              </h3>
              <p className="text-sm text-black">{item.body}</p>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-400">
            No comments left, be the first!
          </p>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-3"
      >
        <input
          type="text"
          value={input.body}
          placeholder="share your thoughts..."
          onChange={(e) => setInput({ ...input, body: e.target.value })}
          className="px-2 py-1 my-2 shadow-md rounded-md w-full md:w-6/12"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white shadow-md bg-orange-400 px-2 py-1 w-full md:w-min hover:bg-orange-300 transition-all  rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Comment;
