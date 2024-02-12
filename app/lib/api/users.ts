const token =
  "eb6f165cd6b636b4e0950758d31a5093e262a78fa8e1ccb091b0d7c5a1447113";
export const getUser = async (id: number | string) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (id: number | string) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${id}/posts`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (id: number, title: string, body: string) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${id}/posts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ user_id: id, title, body }),
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {}
};

export const editUser = async (
  id: number,
  name: string,
  gender: string,
  status: string
) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ name, gender, status }),
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://gorest.co.in/public/v2/users?page=1&per_page=15",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};
