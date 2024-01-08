export const getPostInfo = async (id) => {
  try {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
