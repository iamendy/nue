import Layout from "@/components/Layout";
import Faq from "@/components/Faq";

const Contact = () => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:py-20  lg:px-10 ">
        <div>
          <h1 className="font-medium text-[35px] leading-[120%] mb-4 lg:text-[55px] lg:leading-[120%]">
            Contact us
          </h1>
          <p className="text-lg leading-[1.5em] text-features w-[100%]">
            Reach out to our expert team to discuss your security network needs.
          </p>
        </div>

        <div className="lg:flex lg:mt-9">
          <div className="space-y-7 mt-10 lg:flex-1">
            <div className="flex flex-col ">
              <h4 className="text-[16px] text-features mb-3 ">Email</h4>
              <div className="flex items-center space-x-4 text-[18px]">
                <div className="w-6 h-6">
                  <img src="/img/email.svg" alt="email" />
                </div>
                <span>hello@nue.com</span>
              </div>
            </div>

            <div className="flex flex-col ">
              <h4 className="text-[16px] text-features mb-3 ">Phone</h4>
              <div className="flex items-center space-x-4 text-[18px]">
                <div className="w-6 h-6">
                  <img src="/img/phone.svg" alt="email" />
                </div>
                <span>+1 454 855 00</span>
              </div>
            </div>

            <div className="flex flex-col ">
              <h4 className="text-[16px] text-features mb-3 ">Address</h4>
              <div className="flex items-center space-x-4 text-[18px]">
                <div className="w-6 h-6">
                  <img src="/img/pin.svg" alt="location" />
                </div>
                <span>Arsenalo g. 5, 01143 Vilnius</span>
              </div>
            </div>
          </div>

          <div className="flex mt-12 flex-col space-y-5 lg:flex-1">
            <div className="w-full flex gap-x-5">
              <div className="flex-1">
                <input
                  placeholder="Name"
                  type="text"
                  className="w-full py-4 px-6 bg-[#222226] placeholder:text-features rounded-[8px] focus-within:outline-none focus:outline-red/20"
                />
              </div>
              <div className="flex-1 w-full">
                <input
                  type="Email"
                  placeholder="email"
                  className="w-full py-4 px-6 bg-[#222226] placeholder:text-features rounded-[8px] focus-within:outline-none focus:outline-red/20"
                />
              </div>
            </div>
            <div>
              <textarea
                name="Message"
                placeholder="Enter message"
                className="w-full py-4 px-6 bg-[#222226] placeholder:text-features rounded-[8px] focus-within:outline-none focus:outline-red/20"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button className="bg-white p-4 w-full rounded-[8px] text-black hover:bg-white/70 active:bg-white transition-colors">
                Send a message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </Layout>
  );
};
export default Contact;
