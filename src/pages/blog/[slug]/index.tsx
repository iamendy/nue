import Link from "next/link";
import Layout from "@/components/Layout";
import Check from "@/components/icons/Check";

const Index = () => {
  return (
    <Layout>
      <section className="px-4 py-10 lg:pt-20 lg:pb-0 lg:px-10 ">
        <div className="lg:flex  pb-14 border-b border-b-features/20">
          <div className="mb-8 lg:mb-14  lg:w-[50%]">
            <h3 className="text-sm text-red leading-[1.5em] mb-4">Security</h3>
            <h1 className="font-manrope text-[25px] leading-[130%] mb-4 lg:mb-5 lg:text-[35px] lg:w-[80%]">
              Protect Yourself: Why Network Security Should be Your Top Priority
            </h1>
            <p className="text-[16px] text-features leading-[1.5em] mb-4 lg:mb-5  lg:w-[80%]">
              Understand the importance of protecting your personal information
              and network security.
            </p>

            <div className="flex items-center space-x-4 mb-8 lg:mb-0">
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
          </div>

          <div className="w-full h-min-content lg:h-max  lg:w-[50%] ">
            <div className="lg:h-[350px] w-full rounded-lg overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="/img/blog4.webp"
                alt="Protect Yourself: Why Network Security Should be Your Top Priority"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:pb-0 lg:pt-20 lg:px-10 ">
        <div className="lg:flex lg:justify-between lg:gap-x-16  pb-14 border-b border-b-features/20">
          <div className="lg:w-[60%]">
            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              In today's digital landscape, protecting your network from cyber
              threats is more critical than ever. Cybercriminals are becoming
              increasingly sophisticated, and organizations of all sizes must
              implement robust security measures to safeguard their sensitive
              data and maintain the integrity of their networks. In this blog
              post, we will explore ten essential security measures that every
              organization should implement to protect their network from
              potential breaches and attacks. By following these best practices,
              you can significantly enhance your network's security posture and
              minimize the risk of unauthorized access or data compromise.
            </p>

            <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
              1. Implement a Strong Firewall
            </h3>

            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              A firewall acts as the first line of defense for your network,
              monitoring incoming and outgoing traffic and blocking potentially
              harmful connections. Configure your firewall with strict rules and
              regularly update it to ensure maximum protection against
              unauthorized access.
            </p>

            <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
              2. Secure Network Perimeters with Intrusion Detection Systems
              (IDS)
            </h3>

            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              Intrusion Detection Systems continuously monitor your network for
              suspicious activities and potential breaches. They provide
              real-time alerts and help identify any unauthorized access
              attempts, enabling swift response and mitigation.
            </p>

            <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
              3. Employ Robust Authentication and Access Controls
            </h3>

            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              Implementing strong authentication mechanisms, such as
              multi-factor authentication (MFA), ensures that only authorized
              users can access your network resources. Additionally, enforce
              strict access controls, granting permissions based on the
              principle of least privilege, reducing the risk of unauthorized
              data exposure.
            </p>

            <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
              4. Regularly Update and Patch Systems
            </h3>
            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              Keep your network's operating systems, software, and applications
              up to date with the latest security patches. Regularly applying
              patches helps address known vulnerabilities and strengthens your
              network's resilience against potential exploits.
            </p>

            <h3 className="text-[18px] font-manrope font-medium leading-[130%] my-5">
              5. Encrypt Network Traffic
            </h3>
            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              Encrypting network traffic adds an additional layer of security by
              making it unreadable to unauthorized users. Use secure protocols,
              such as Transport Layer Security (TLS), to encrypt sensitive data
              in transit and protect it from interception.
            </p>
            <p className="text-[18px] leading-[1.5em] text-features pb-5">
              Protecting your network is an ongoing process that requires a
              proactive and multi-layered approach. By implementing these ten
              essential security measures, you can significantly enhance your
              network's resilience and reduce the risk of data breaches and
              unauthorized access. Stay vigilant, keep your systems up to date,
              and foster a culture of security awareness within your
              organization. Remember, investing in network security is an
              investment in the long-term success and reputation of your
              business.{" "}
              <Link href="#" className="text-white">
                Check out our pricing page.
              </Link>
            </p>
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
              <img src="/img/blog3.webp" alt="" />
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
export default Index;
