import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter pancake relative">
      <Navbar />
      <main className="pt-20 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
