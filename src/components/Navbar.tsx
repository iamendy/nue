import Logo from "./icons/Logo";
import Menu from "./icons/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black/80 fixed w-full backdrop-blur-md z-[100000]">
      <div className="flex px-4 py-5 lg:px-10 justify-between items-center xl:max-w-[1400px] mx-auto xl:px-0">
        <Link href="/" className="flex space-x-2 items-center">
          <Logo />
          <span className="text-xl font-figtree">Neu</span>
        </Link>

        <Menu />

        <div
          className={`  hidden lg:flex text-sm items-center font-inter justify-between space-x-8 text-dark `}
        >
          <Link
            href="/pricing"
            className={`${
              router?.pathname == "/pricing" ? "text-red" : ""
            } hover:text-red`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`${
              router?.pathname == "/blog" ? "text-red" : ""
            } hover:text-red`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="bg-white rounded-lg leading-none px-4 py-2 lg:py-3 text-gray-400 hover:bg-red hover:text-white transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
