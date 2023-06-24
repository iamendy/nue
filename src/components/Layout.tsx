import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter pancake">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
