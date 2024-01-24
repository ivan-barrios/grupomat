import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import wpp from "@/public/icons/wpp.png";
import Image from "next/image";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
      <Footer />
      <Link
        href="https://wa.link/i57lkq"
        target="_blank"
        className="hover:scale-[1.1] transition-all duration-100 fixed bottom-4 right-4 z-40 max-md:hidden"
      >
        <Image src={wpp} alt="Whatsapp icon" width={62} height={63} />
      </Link>
    </div>
  );
};

export default layout;
