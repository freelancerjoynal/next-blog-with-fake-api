import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <header className="py-5 bg-blue-500">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">
              <h3 className="text-white"><Link href={'/'}>FMan</Link></h3>
            </div>
            <div className="flex items-center text-white font-bold text-xl gap-2">
              <Link href={"/"}>Home</Link>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"/products"}>Products</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


