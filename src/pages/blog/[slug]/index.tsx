import Link from "next/link";
import Layout from "@/components/Layout";
import Check from "@/components/icons/Check";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { BlogType } from "@/types/blog";
import { blogs } from "@/constants/blogs";
import Blogs from "@/components/Blogs";

const Index = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:pt-20 lg:pb-0 lg:px-10 ">
        <div className="lg:flex  pb-14 border-b border-b-features/20">
          <div className="mb-8 lg:mb-14  lg:w-[50%]">
            <h3 className="text-sm text-red leading-[1.5em] mb-4">Security</h3>
            <h1 className="font-manrope text-[25px] leading-[130%] mb-4 lg:mb-5 lg:text-[35px] lg:w-[80%]">
              {blog?.title}
            </h1>
            <p className="text-[16px] text-features leading-[1.5em] mb-4 lg:mb-5  lg:w-[80%]">
              {blog?.header}
            </p>

            <div className="flex items-center space-x-4 mb-8 lg:mb-0">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_APP_URL}/${blog.author.dp}`}
                  alt={blog.author.dp}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm">
                <p className="">{blog.author.name}</p>
                <p className="text-features">{blog.date}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-min-content lg:h-max  lg:w-[50%] ">
            <div className="lg:h-[350px] w-full rounded-lg overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src={`${process.env.NEXT_PUBLIC_APP_URL}/${blog.coverImage}`}
                alt={`${blog?.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:pb-0 lg:pt-20 lg:px-10 ">
        <div className="lg:flex lg:justify-between lg:gap-x-16  pb-14 border-b border-b-features/20">
          <div className="lg:w-[60%]">
            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              {blog.main}
            </p>

            {blog?.paragraphs.map((pg, i) => (
              <div key={i}>
                <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
                  {pg.header}
                </h3>

                <p className="text-[18px] leading-[1.5em] text-features pb-5">
                  {pg.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-[18px] leading-[1.5em] text-features pb-5"
                    >
                      {p}
                    </p>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:w-[40%]">
            <div className="subscribe p-6 rounded-xl w-[90%]">
              <h3 className="font-manrope font-medium text-[20px] mb-5">
                Subscribe to our newsletter
              </h3>
              <p className="text-[14px] text-features leading-[1.5em] mb-5">
                Stay up-to-date with the latest trends, best practices, and
                expert insights in the world of security networks.
              </p>
              <div className="flex flex-col space-y-5">
                <input
                  placeholder="Email address"
                  type="text"
                  className="p-[15px] bg-[#303036] rounded-[8px] focus-within:outline-none focus:outline-red/20"
                />
                <button className="p-[15px] bg-white rounded-[8px]  text-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:pt-20 lg:pb-0 lg:px-10 ">
        <h1 className="text-[20px] font-manrope font-medium leading-[130%] mb-9">
          More on the blog
        </h1>

        <Blogs />
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="scale px-6 py-8 rounded-[10px] space-y-8 lg:flex lg:items-center justify-between lg:p-10">
          <div className="">
            <h3 className="font-manrope mb-3 text-[25px] font-medium leading-[130%] lg:text-[35px] lg:mb-4">
              Scale with <span className="text-red">security</span>
            </h3>
            <p className="font-inter text-[16px] leading-[1.5em] text-gray mb-5 lg:mb-10">
              Are you ready to take your network security to the next level?
            </p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-4">
                <Check />
                <span className="text-sm">Stay ahead of threats</span>
              </div>

              <div className="flex items-center space-x-4">
                <Check />
                <span className="text-sm">Customized pricing options</span>
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-transparent border border-features/30 w-full py-3 rounded-lg text-sm lg:w-[200px] hover:text-white hover:bg-red transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  blog: BlogType;
}> = ({ params }) => {
  const blog = blogs.filter((b: BlogType) => b.slug == params?.slug);

  return { props: { blog: blog[0] } };
};
export default Index;
