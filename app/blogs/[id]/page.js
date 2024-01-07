import Head from "next/head";

const getPostInfo = async (id) => {
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

async function BlogInformation({ params }) {
  const { id } = params;
  const details = await getPostInfo(id);
  const { title, content_text, photo_url, description } = await details.blog;
  return (
    <>
      <h1 className="text-5xl font-bold py-6">{title}</h1>
      <img className="w-100 py-5 mx-auto" src={photo_url} alt={description} />
      <div className="description">{content_text}</div>
    </>
  );
}

export default BlogInformation;
