import Logo from "./icons/Logo";
import Menu from "./icons/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-5 lg:px-10">
      <div className="flex space-x-2 items-center">
        <Logo />
        <span className="text-xl font-figtree">Neu</span>
      </div>

      <Menu />

      <div className="hidden lg:flex text-sm items-center font-inter justify-between space-x-8 text-dark ">
        <Link href="#" className="hover:text-red">
          Pricing
        </Link>
        <Link href="#" className="hover:text-red">
          Blog
        </Link>
        <Link href="#" className="hover:text-red">
          Contact
        </Link>
        <button className="bg-white rounded-lg leading-none px-4 py-2 lg:py-3 text-gray-400 hover:bg-red hover:text-white transition-colors">
          Book a demo
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
