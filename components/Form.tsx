"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addPost } from "@/app/lib/action";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const maxChar = 500;
  const id = 6262422;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addPost(id, title, body);
      setTitle("");
      setBody("");
      router.push("/user");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-3 shadow-md bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-lg mt-10"
    >
      <div className="flex flex-col justify-start my-2">
        <label
          htmlFor="title"
          className="text-sm md:text-lg font-semibold my-2 text-orange-400"
        >
          Title
        </label>
        <input
          type="text"
          className="shadow-sm rounded-sm px-2 py-1 outline-[0]"
          name="title"
          value={title}
          placeholder="Enter your title blog..."
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col justify-start my-2">
        <div className="flex justify-between items-center">
          <label
            htmlFor="body"
            className="text-sm md:text-lg font-semibold my-2 text-orange-400"
          >
            Content
          </label>
          <span>{maxChar - body.length}/500</span>
        </div>
        <textarea
          className="shadow-sm rounded-sm px-2 py-1 h-[200px] outline-[0]"
          name="body"
          value={body}
          maxLength={500}
          placeholder="Enter your content blog..."
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleSubmit}
          className="px-3 py-2 transition bg-orange-400 font-bold text-white rounded-md cursor-pointer text-xs md:text-sm"
          disabled={submitting}
        >
          {submitting ? "Submit..." : "Submit"}
        </button>
        <Link href="/user">
          <button className="px-3 py-2 transition border-[1px] border-orange-400 font-bold text-orange-400 rounded-md cursor-pointer text-xs md:text-sm">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
