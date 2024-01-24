import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
