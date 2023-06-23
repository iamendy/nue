import Layout from "@/components/Layout";
import Mesh from "@/components/Mesh";
import Code from "@/components/Code";

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

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="space-y-8 lg:space-y-0 lg:flex lg:gap-x-8 items-center">
          <div className="feature relative flex space-x-4 border-b pb-8 border-b-features/40 lg:pb-0 lg:border-b-0 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="red"
              className="w-9 h-9 -mt-1"
            >
              <g>
                <path d="M220.06,84a102.06,102.06,0,1,1-24.31-32.27l24-24a6,6,0,0,1,8.48,8.49l-96,96a6,6,0,1,1-8.48-8.49l29.39-29.4a42,42,0,1,0,16.78,31.24,6,6,0,1,1,12-.68A54,54,0,1,1,161.7,85.83l25.54-25.55a89.91,89.91,0,1,0,22,28.93A6,6,0,1,1,220.06,84Z"></path>
              </g>
            </svg>
            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">
                Advance threat intelligence
              </h3>
              <p className="text-features">
                Stay ahead of cyber threats with our powerful threat
                intelligence.
              </p>
            </div>
          </div>

          <div className="feature relative flex space-x-4 border-b pb-8 border-b-features/40 lg:pb-0 lg:border-b-0 lg:pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              fill="red"
              className="w-9 h-9 -mt-1"
            >
              <g>
                <path d="M208,42H48A14,14,0,0,0,34,56v58.77c0,88.24,74.68,117.52,89.65,122.49a13.5,13.5,0,0,0,8.7,0c15-5,89.65-34.25,89.65-122.49V56A14,14,0,0,0,208,42Zm2,72.79c0,80-67.84,106.59-81.44,111.1a1.55,1.55,0,0,1-1.12,0C113.84,221.38,46,194.79,46,114.79V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-37.76-15a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z"></path>
              </g>
            </svg>

            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">Secure connectivity</h3>
              <p className="text-features">
                Secure your data and connections with our robust VPN solution.
              </p>
            </div>
          </div>

          <div className="flex space-x-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="red"
              className="w-9 h-9 -mt-1"
            >
              <g>
                <path d="M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"></path>
              </g>
            </svg>

            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">
                Intrusion detection system
              </h3>
              <p className="text-features lg:pr-5">
                Detect and prevent unauthorized access with our advanced IDS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="lg:flex lg:items-center">
          <div className="lg:flex-1">
            <h3 className=" text-red text-[16px] mb-6">Threat detection</h3>

            <h1 className="font-manrope font-medium text-[28px] leading-[130%] mb-4 pr-4 lg:text-[44px] lg:w-[80%]">
              Enhanced threat detection and real-time monitoring
            </h1>
            <p className="text-features leading-[1.5em] text-lg lg:w-[85%] pr-3">
              Our security network uses advanced technology for threat
              detection. Real-time monitoring and smart alerts ensure safety and
              security of your premises.
            </p>
          </div>

          <div className="mt-8 lg:flex-1">
            <img src="/img/threat.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="lg:flex lg:items-center">
          <div className="lg:flex-1 lg:order-2">
            <div className=" lg:w-[80%] lg:ml-auto">
              <h3 className=" text-red text-[16px] mb-6">Secure access</h3>

              <h1 className="font-manrope font-medium text-[28px] leading-[130%] mb-4 pr-4 lg:text-[44px] ">
                Proactive protection against unauthorized access
              </h1>
              <p className="text-features leading-[1.5em] text-lg pr-3 lg:pr-1">
                Our system offers peace of mind and robust protection for your
                premises. With proactive monitoring and swift response
                mechanisms, unauthorized access attempts are swiftly detected
                and mitigated.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:flex-1 lg:order-1">
            <img src="/img/login.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="mb-8">
          <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
            Why Nue?
          </h3>
          <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[40%]">
            Rest easy knowing that your sensitive information is shielded from
            ever-evolving cyber threats.
          </p>
        </div>

        <div className="space-y-8  lg:space-y-0 lg:flex lg:gap-x-8">
          <div className="card relative overflow-hidden px-8 pt-8 rounded-lg">
            <h4 className="font-manrope text-[20px] font-medium text-white mb-4">
              Seamless integration
            </h4>
            <p className="text-[16px] leading-[1.8em] mb-4">
              Nue product integrates smoothly with your existing infrastructure
              and workflows, whether they're on-premises, cloud-based, or
              hybrid.
            </p>

            <Code />
          </div>
          <div className="flex flex-col space-y-8">
            <div className="card overflow-hidden px-8 py-8 rounded-lg">
              <h4 className="font-manrope text-[20px] font-medium text-white mb-4">
                Flexible features
              </h4>
              <p className="text-[16px] leading-[1.8em]">
                We offer adaptable features to customize security protocols,
                access controls, and permissions to fit your business processes.
              </p>
            </div>
            <div className="card overflow-hidden px-8 py-8 rounded-lg">
              <h4 className="font-manrope text-[20px] font-medium text-white mb-4 pr-3">
                Consistent uptime you can rely on
              </h4>
              <p className="text-[16px] leading-[1.8em] mb-5">
                Uninterrupted uptime is crucial for business. Our network
                security product offers consistent reliability.
              </p>
              <div className="border border-white/10 w-fit bg-white/[0.05] rounded-[100px] py-3 px-4 text-sm flex items-center space-x-3">
                <div className="bg-green-200 rounded-full h-[6px] w-[6px] animate-ping flex"></div>
                <span className="text-white">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="mb-8 lg:mb-14">
          <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
            Don't take our word for it
          </h3>
          <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[40%]">
            Hear what our customers are saying - discover why our security
            network product is trusted by organizations worldwide.
          </p>
        </div>

        <div className="testimonials relative lg:flex lg:space-x-10">
          <div className="bg-white/[0.05] rounded-3xl backdrop-blur  p-10">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-4 items-center ">
                <div className="w-16 h-16  rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/img/user1.webp"
                    alt="user1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-inter flex flex-col space-y-2">
                  <p className="text-[16px] font-medium">Nnamdi</p>
                  <p className="leading-[1.5em] text-features text-sm">
                    CEO Axelar
                  </p>
                </div>
              </div>

              <p className="font-inter text-[16px]">
                "Comprehensive threat intelligence and real-time alerts, empower
                our team to proactively defend against emerging threats."
              </p>

              <div>
                <p className="text-sm text-red">Achieved result</p>
                <p>Rapid incidence report</p>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.05] rounded-3xl backdrop-blur  p-10">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-4 items-center ">
                <div className="w-16 h-16  rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/img/user1.webp"
                    alt="user1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-inter flex flex-col space-y-2">
                  <p className="text-[16px] font-medium">Nnamdi</p>
                  <p className="leading-[1.5em] text-features text-sm">
                    CEO Axelar
                  </p>
                </div>
              </div>

              <p className="font-inter text-[16px]">
                "Comprehensive threat intelligence and real-time alerts, empower
                our team to proactively defend against emerging threats."
              </p>

              <div>
                <p className="text-sm text-red">Achieved result</p>
                <p>Rapid incidence report</p>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.05] rounded-3xl backdrop-blur  p-10">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-4 items-center ">
                <div className="w-16 h-16  rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/img/user1.webp"
                    alt="user1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-inter flex flex-col space-y-2">
                  <p className="text-[16px] font-medium">Nnamdi</p>
                  <p className="leading-[1.5em] text-features text-sm">
                    CEO Axelar
                  </p>
                </div>
              </div>

              <p className="font-inter text-[16px]">
                "Comprehensive threat intelligence and real-time alerts, empower
                our team to proactively defend against emerging threats."
              </p>

              <div>
                <p className="text-sm text-red">Achieved result</p>
                <p>Rapid incidence report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10">
        <div className="mb-8 lg:mb-14">
          <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
            Explore our blog
          </h3>
          <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[40%]">
            Discover the emerging security challenges and advancements.
          </p>
        </div>
      </section>
    </Layout>
  );
}
