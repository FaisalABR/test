export const getUser = async (id: number | string) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${id}`
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
