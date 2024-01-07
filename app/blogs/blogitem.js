import Link from "next/link";

function BlogItem({post}) {
    const {title, photo_url, description , id} = post
    return (
    <>
      <div className="card  bg-base-100 shadow-xl mt-3">
        <figure>
          <img
            src={photo_url}
            alt={description}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link href={`/blogs/${id}`} className="btn btn-sm btn-primary">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
