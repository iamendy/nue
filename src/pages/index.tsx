import Layout from "@/components/Layout";
import Mesh from "@/components/Mesh";
export default function Home() {
  return (
    <Layout>
      <section className="px-4 py-10 lg:py-20 lg:px-10 flex flex-col lg:flex-row lg:gap-x-16 lg:items-center space-y-20 lg:space-y-0">
        <div className="lg:flex-1">
          <h1 className="font-manrope font-medium text-[35px] mb-2 lg:text-[55px] lg:leading-[120%]">
            Modern network <span className="text-red">security</span> solutions
          </h1>

          <p className="font-slackey text-gray-50 text-lg leading-[1.5em] w-[80%]">
            Improve your security architecture to protect your business against
            advanced threats and malware.
          </p>

          <div className="my-9 lg:mb-11">
            <button className="bg-white text-sm rounded-lg leading-none px-4 py-3 lg:px-6 lg:py-3 lg:text-lg  text-gray-400 hover:bg-red hover:text-white transition-colors">
              Book a demo
            </button>
          </div>

          <div>
            <span className="text-gray-50">Trusted by companies globally</span>

            <div className="flex items-center lg:w-[90%] space-x-2 my-5">
              <div className="flex-1">
                <img
                  src="/img/coinfuse.svg"
                  alt=""
                  className="w-full scale-[90%]"
                />
              </div>
              <div className="flex-1">
                <img
                  src="/img/deepdive.svg"
                  alt=""
                  className="w-full scale-[90%]"
                />
              </div>

              <div className="hidden lg:block flex-1">
                <img
                  src="/img/quorum.svg"
                  alt=""
                  className="w-full scale-[90%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-[500px] lg:h-[500px]">
          <img
            src="/img/security.svg"
            alt="security alert"
            className="w-full"
          />
        </div>
      </section>

      <section className="overflow-hidden">
        <Mesh />
      </section>

      <section></section>
    </Layout>
  );
}
