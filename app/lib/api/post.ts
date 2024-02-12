import { CommentTypes } from "../definitions";

const token =
  "eb6f165cd6b636b4e0950758d31a5093e262a78fa8e1ccb091b0d7c5a1447113";

export const getPosts = async (page: number = 1) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts?page=${page}&per_page=8`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentPost = async (id: string) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createComment = async (
  id: string,
  { body, name, email }: CommentTypes
) => {
  try {
    const response = await fetch(
      `https://gorest.co.in//public/v2/posts/${id}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ post_id: id, body, name, email }),
      }
    ).then((response) => response.json());
    const comments = await getCommentPost(id);

    return comments;
  } catch (error) {
    console.log(error);
  }
};

export const removePost = async (id: number) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "DELETE",
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};
