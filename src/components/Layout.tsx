import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
