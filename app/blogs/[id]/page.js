import { getPostInfo } from "@/app/libs/getPostInfo";


export async function generateMetadata({params}){
  const {id} = params;
  const details = await getPostInfo(id);
  const {title, description, photo_url } = await details.blog;

  return {
    title: title,
    description: description,
    keywords: description,
    openGraph: {
      images: photo_url,
    },
  }
}

async function BlogInformation({ params }) {
  const { id } = params;
  const details = await getPostInfo(id) ;
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

