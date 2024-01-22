import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const layout = ({ children }) => {
    return (
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default layout;