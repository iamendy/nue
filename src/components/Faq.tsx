import Link from "next/link";

import Accordion from "./Accordion";

const faqs = [
  {
    q: "What are the included features in your network security product pricing?",
    a: "Our network security product pricing includes a comprehensive set of features designed to ensure the protection of your business's network. These features may include firewall protection, intrusion detection and prevention, VPN capabilities, antivirus and anti-malware software, secure web gateway, data loss prevention, centralized management and reporting, multi-factor authentication, and encryption.",
  },
  {
    q: "Are there any additional costs or hidden fees?",
    a: "We believe in transparent pricing without hidden fees. Our pricing model is designed to provide a clear understanding of the costs involved.",
  },
  {
    q: "Do you offer any discounts for long-term contracts or multiple licenses?",
    a: "Yes, we value long-term partnerships with our clients. Depending on the duration of the contract and the number of licenses required, we offer discounts and special pricing options. Our sales team will be happy to discuss these possibilities and provide you with the best pricing arrangement for your business.",
  },
  {
    q: "Can I get a personalized quote for my business?",
    a: "Absolutely! We understand that every business has unique requirements, and we offer personalized quotes tailored to your specific needs. Our team will work closely with you to understand your network security needs and provide a customized pricing quote that aligns with your budget and objectives.",
  },
];

const Faq = () => {
  return (
    <section className="py-16 px-4 lg:py-20 lg:px-10">
      <div className="mb-8">
        <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
          Frequently asked questions
        </h3>
        <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[60%]">
          For any other questions, feel welcome to{" "}
          <Link href="/contact" className="text-white">
            reach out to our team
          </Link>
          .
        </p>
      </div>

      <div>
        {faqs.map((faq, i) => (
          <Accordion key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
};
export default Faq;
