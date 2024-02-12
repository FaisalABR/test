"use client";
import { CommentTypes } from "@/app/lib/definitions";
import { useState, createContext, useContext } from "react";

const useCommentState = (initialComment: CommentTypes[]) => {
  return useState<CommentTypes[]>(initialComment);
};

export const CommentsContext = createContext<ReturnType<
  typeof useCommentState
> | null>(null);

export const useComments = () => {
  const comments = useContext(CommentsContext);
  if (!comments) {
    throw new Error("useComments must be used within a ReviewProvider");
  }
  return comments;
};

const CommentsProvider = ({
  comments: initialComment,
  children,
}: {
  comments: CommentTypes[];
  children: React.ReactNode;
}) => {
  const [comments, setComments] = useCommentState(initialComment);

  return (
    <CommentsContext.Provider value={[comments, setComments]}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
