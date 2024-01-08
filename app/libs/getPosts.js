export const getPosts = async () => {
  const posturl = process.env.BLOG_API;
  try {
    const res = await fetch(posturl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
