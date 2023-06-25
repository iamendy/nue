import Layout from "@/components/Layout";

import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Plans from "@/components/Plans";
const Pricing = () => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] xl:py-28 mx-auto">
        <div className="mb-8 lg:mb-14">
          <h1 className="font-medium text-[35px] leading-[120%] mb-4 lg:text-[55px]">
            Pricing plans
          </h1>
          <p className="text-lg leading-[1.5em] text-features lg:w-[60%] lg:leading-[120%]">
            Safely collect, process, and share your data with the plan that’s
            right for you.
          </p>
        </div>

        <Plans />
      </section>

      <Testimonial />

      <Faq />
    </Layout>
  );
};
export default Pricing;
