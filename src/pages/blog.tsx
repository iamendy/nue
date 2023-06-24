import Layout from "@/components/Layout";

const Blog = () => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:pt-20 lg:pb-0 lg:px-10 ">
        <div className="lg:flex lg:space-x-9 pb-14 border-b border-b-features/20">
          <div className="mb-8 lg:mb-14 lg:flex-1">
            <h3 className="text-sm text-red leading-[1.5em] mb-4">Security</h3>
            <h1 className="font-manrope text-[25px] leading-[130%] mb-4 pr-3 lg:text-[35px] lg:w-[80%]">
              Protect Yourself: Why Network Security Should be Your Top Priority
            </h1>
            <p className="text-[16px] text-features leading-[1.5em] mb-4 pr-3 lg:w-[80%]">
              Understand the importance of protecting your personal information
              and network security.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src="/img/user1.webp"
                  alt="Nicole Hamm"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm">
                <p className="">Nicole Hamm</p>
                <p className="text-features">May 26th, 2023</p>
              </div>
            </div>

            <div>
              <button className="p-2 bg-white text-black rounded-lg transition-colors lg:py-3 lg:px-4 hover:bg-red hover:text-white">
                Read more
              </button>
            </div>
          </div>

          <div className="w-full h-[200px] lg:h-max rounded-lg overflow-hidden lg:flex-1 items-stretch">
            <img
              className="w-full h-full"
              src="/img/blog1.webp"
              alt="Protect Yourself: Why Network Security Should be Your Top Priority"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-20 lg:px-10 ">
        <h1 className="text-[20px] font-manrope font-medium leading-[130%] mb-9">
          Recent posts
        </h1>

        <div className="space-y-14 lg:space-y-0 lg:flex lg:gap-x-9">
          <div className="flex lg:flex-1 flex-col space-y-4">
            <div className="w-full h-[200px] rounded-md overflow-hidden">
              <img src="/img/blog1.webp" alt="" />
            </div>
            <span className="text-sm text-red">Security</span>
            <h3 className="font-manrope text-lg font-medium">
              Protect Yourself: Why Network Security Should be Your Top Priority
            </h3>
            <p className="text-features">
              Understand the importance of protecting your personal information
              and network security.
            </p>
          </div>

          <div className="flex flex-col space-y-4 lg:flex-1">
            <div className="w-full h-[200px] rounded-md overflow-hidden">
              <img src="/img/blog2.webp" alt="" />
            </div>
            <span className="text-sm text-red">Security</span>
            <h3 className="font-manrope text-lg font-medium">
              10 Essential Security Measures to Protect Your Network
            </h3>
            <p className="text-features">
              Discover 10 crucial security measures every organization should
              implement to safeguard their network.
            </p>
          </div>

          <div className="flex flex-col space-y-4 lg:flex-1">
            <div className="w-full h-[200px] rounded-md overflow-hidden">
              <img src="/img/blog4.webp" alt="" />
            </div>
            <span className="text-sm text-red">Engineering</span>
            <h3 className="font-manrope text-lg font-medium">
              The Role of Engineering in Building Secure Networks
            </h3>
            <p className="text-features">
              Learn how engineering builds strong network infrastructures,
              emphasizing security.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-20 lg:px-10 ">
        <div className="secured flex flex-col p-6 lg:flex-row lg:items-center lg:p-16 lg:space-x-9">
          <div className="lg:flex lg:items-center lg:space-x-6">
            <div className="w-20 h-20 mb-9 lg:mb-0 lg:w-30 lg:h-30">
              <img
                src="/img/secured.png"
                alt="secured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-10 lg:mb-0">
              <h2 className="text-[22px] font-manrope font-medium leading-[130%] pr-3 mb-5 lg:text-[28px]">
                Subscribe for the latest security insights
              </h2>
              <p className="text-[16px] leading-[1.5em] text-features pr-3">
                Stay up-to-date with the latest trends, best practices, and
                expert insights in the world of security networks.
              </p>
            </div>
          </div>

          <div className="flex bg-[#303036] space-x-4 py-3 px-4 rounded-lg">
            <input
              placeholder="Email address"
              type="text"
              className="bg-[#303036]  placeholder:text-features focus:outline-red/20 px-1"
            />
            <button className="bg-white rounded-md text-black p-2 ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;
