import Layout from "@/components/Layout";
import Devices from "@/components/icons/Devices";
import User from "@/components/icons/User";
import Check from "@/components/icons/Check";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

const Pricing = () => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:py-20 lg:px-10 ">
        <div className="mb-8 lg:mb-14">
          <h1 className="font-medium text-[35px] leading-[120%] mb-4 lg:text-[55px]">
            Pricing plans
          </h1>
          <p className="text-lg leading-[1.5em] text-features lg:w-[60%] lg:leading-[120%]">
            Safely collect, process, and share your data with the plan that’s
            right for you.
          </p>
        </div>

        <div className="space-y-9 mb-9 lg:flex lg:space-y-0 lg:gap-x-9">
          <div className="plan p-8 rounded-xl">
            <div>
              <h3 className="font-manrope font-medium text-lg leading-[130%] mb-4 lg:text-[20px]">
                Starter
              </h3>
              <p className="text-features text-sm leading-[1.5em] mb-4">
                Essential security measures for small businesses.
              </p>
              <div className="mb-4">
                <h4 className="font-manrope text-[28px] font-medium leading-[130%]">
                  $100
                </h4>
                <span className="text-features">per month</span>
              </div>

              <button className="bg-white rounded-lg mb-6 leading-none px-4 py-4 w-full lg:py-3 text-gray-400 hover:bg-red hover:text-white transition-colors">
                Book a demo
              </button>

              <div className="flex-col flex space-y-2 text-sm mb-4">
                <div className="flex items-center space-x-4">
                  <User />
                  <span className="text-features">
                    Up to <span className="text-white">10</span> user accounts
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <Devices />
                  <span className="text-features">
                    Up to <span className="text-white">5</span> devices
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-features/30" />

            <div className="py-6 text-sm text-features">
              <h5 className="text-white mb-4">Starter includes:</h5>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Firewall protection</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Intrusion detector</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Content filtering</span>
                </div>
              </div>
            </div>
          </div>

          <div className="plan p-8 rounded-xl">
            <div>
              <h3 className="font-manrope font-medium text-lg leading-[130%] mb-4 lg:text-[20px]">
                Advance
              </h3>
              <p className="text-features text-sm leading-[1.5em] mb-4">
                Comprehensive solution for mid-sized companies.
              </p>
              <div className="mb-4">
                <h4 className="font-manrope text-[28px] font-medium leading-[130%]">
                  $600
                </h4>
                <span className="text-features">per month</span>
              </div>

              <button className="bg-white rounded-lg mb-6 leading-none px-4 py-4 w-full lg:py-3 text-gray-400 hover:bg-red hover:text-white transition-colors">
                Book a demo
              </button>

              <div className="flex-col flex space-y-2 text-sm mb-4">
                <div className="flex items-center space-x-4">
                  <User />
                  <span className="text-features">
                    Up to <span className="text-white">50</span> user accounts
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <Devices />
                  <span className="text-features">
                    Up to <span className="text-white">20</span> devices
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-features/30" />

            <div className="py-6 text-sm text-features">
              <h5 className="text-white mb-4">Everything in Starter, plus:</h5>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Advanced threat detection</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Data encryption</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Security analytics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="plan p-8 rounded-xl">
            <div>
              <h3 className="font-manrope font-medium text-lg leading-[130%] mb-4 lg:text-[20px]">
                Enterprise
              </h3>
              <p className="text-features text-sm leading-[1.5em] mb-4">
                Robust security suite for large-scale enterprises.
              </p>
              <div className="mb-4">
                <h4 className="font-manrope text-[28px] font-medium leading-[130%]">
                  $2000
                </h4>
                <span className="text-features">per month</span>
              </div>

              <button className="bg-white rounded-lg mb-6 leading-none px-4 py-4 w-full lg:py-3 text-gray-400 hover:bg-red hover:text-white transition-colors">
                Book a demo
              </button>

              <div className="flex-col flex space-y-2 text-sm mb-4">
                <div className="flex items-center space-x-4">
                  <User />
                  <span className="text-features">
                    <span className="text-white">unlimited</span> user accounts
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <Devices />
                  <span className="text-features">
                    <span className="text-white">unlimited</span> devices
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-features/30" />

            <div className="py-6 text-sm text-features">
              <h5 className="text-white mb-4">Everything in Advance, plus:</h5>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Advanced threat intelligence</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Cloud security</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Check />
                  <span>Compliance monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-6 rounded-xl  border border-features/20 lg:flex">
          <div>
            <h2 className="text-[22px] lg:text-[28px] font-manrope mb-4">
              Get custom pricing
            </h2>
            <p className="text-features mb-4 lg:text-[16px] lg:w-[60%]">
              Discover a personalized pricing solution designed exclusively for
              your unique requirements, ensuring optimal value and flexibility
              for your business.
            </p>
          </div>
          <div className="lg:w-[300px] flex justify-center items-center">
            <button className="border text-sm border-features/30 py-2 px-4 rounded-lg lg:py-3 lg:px-5 lg:text-lg hover:text-white hover:bg-red transition-colors">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      <Testimonial />

      <Faq />
    </Layout>
  );
};
export default Pricing;
