const token =
  "eb6f165cd6b636b4e0950758d31a5093e262a78fa8e1ccb091b0d7c5a1447113";

export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://gorest.co.in/public/v2/posts?page=1&per_page=15"
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
};

export const getPost = async (id: string) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}`
    ).then((response) => response.json());

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

export const createComment = async (id: string, data) => {
  try {
    const response = await fetch(
      `https://gorest.co.in//public/v2/posts/${id}/comments`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "POST",
        body: {
          data,
        },
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};
