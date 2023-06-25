import Blog from "./Blog";
import { blogs } from "@/constants/blogs";
import { useRouter } from "next/router";

const Blogs = () => {
  const router = useRouter();

  //homepage
  if (router?.pathname == "/") {
    return (
      <div className="space-y-14 lg:space-y-0 lg:flex lg:gap-x-9">
        {blogs.slice(0, 3).map((blog, i) => (
          <Blog key={i} blog={blog} />
        ))}
      </div>
    );
  }

  //homepage
  if (router?.pathname == "/blog") {
    return (
      <div className="space-y-14 lg:space-y-0 lg:flex lg:gap-x-9">
        {blogs.slice(1, 4).map((blog, i) => (
          <Blog key={i} blog={blog} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-14 lg:space-y-0 lg:flex lg:gap-x-9">
      {blogs
        .filter((blog) => blog.slug !== router?.query?.slug)
        .map((blog, i) => (
          <Blog key={i} blog={blog} />
        ))}
    </div>
  );
};
export default Blogs;
