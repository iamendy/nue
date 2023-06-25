import Link from "next/link";
import Logo from "./icons/Logo";

const Footer = () => {
  return (
    <footer className="pt-16 pb-6 px-4 lg:py-y-0 lg:px-10">
      <div className="flex flex-col space-y-3 ">
        <div className="flex space-x-2 items-center">
          <Logo />
          <span className="text-xl font-figtree">Neu</span>
        </div>
        <p className="text-features">
          Your trusted partner for enterprise network security.
        </p>

        <p className="text-features">
          Arsenalo g. 5, <br /> 01143 Vilnius <br />
          Luthania
        </p>
      </div>

      <div className="lg:flex lg:justify-between">
        <div className="text-features flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-6 lg:order-1 mt-9">
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
        </div>

        <div className="flex justify-center items-center text-features mt-9">
          <span>&copy; 2023 Neu. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
