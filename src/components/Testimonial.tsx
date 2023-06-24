const Testimonial = () => {
  return (
    <section className="py-16 px-4 lg:py-20 lg:px-10">
      <div className="mb-8 lg:mb-14">
        <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
          Don't take our word for it
        </h3>
        <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[40%]">
          Hear what our customers are saying - discover why our security network
          product is trusted by organizations worldwide.
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
  );
};
export default Testimonial;
