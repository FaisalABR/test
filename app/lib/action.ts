"use server";
import { revalidatePath } from "next/cache";
import { createPost, editUser } from "./api/users";
import { createComment, removePost } from "./api/post";

export const addPost = async (id: number, title: string, body: string) => {
  try {
    await createPost(id, title, body);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/user");
};

export const updateProfile = async (
  id: number,
  name: string,
  gender: string,
  status: string
) => {
  try {
    await editUser(id, name, gender, status);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/user");
};

export const delPost = async (id: number) => {
  try {
    const remove = await removePost(id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/users");
};

export const addComment = async (
  id: string,
  body: string,
  name: string,
  email: string
) => {
  const comments = await createComment(id, {
    body,
    name,
    email,
  });
  revalidatePath(`/posts/${id}`);

  return comments || [];
};
