import Link from "next/link";
import { BlogType } from "@/types/blog";

const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog?.slug}`}
      className="flex lg:flex-1 flex-col space-y-4"
    >
      <div className="w-full h-[200px] rounded-md overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_APP_URL}/${blog?.coverImage}`}
          alt={blog?.title}
        />
      </div>
      <span className="text-sm text-red">{blog?.tag}</span>
      <h3 className="font-manrope text-lg font-medium">{blog?.title}</h3>
      <p className="text-features">{blog?.header}</p>
    </Link>
  );
};
export default Blog;
