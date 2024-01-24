import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

const DesktopNav = async ({ links, us, services, testimonials, contact }) => {
  const linkslayers = [us, services, testimonials];

  return (
    <div className="flex justify-between items-center gap-8">
      <ul className="md:flex justify-between items-center gap-8 hidden">
        {links.map((link, i) => (
          <li
            key={link.href}
            className="font-semibold hover:scale-[1.1] transition-all duration-100"
          >
            <Link href={link.href}>{linkslayers[i]}</Link>
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
      <button className="font-semibold hidden md:block border-2 p-2 rounded-[15px] hover:scale-[1.1] transition-all duration-100">
        <Link href="/#contacto">{contact}</Link>
      </button>
    </div>
  );
};

export default DesktopNav;
