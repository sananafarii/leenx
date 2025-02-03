"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

function NavBar() {
  const pathname = usePathname();
  console.log("inside navbar", pathname);
  return (
    <nav className="flex justify-between items-center">
      <button className="w-24 bg-gradient-to-r from-[#5ca8ff] to-[#ffffff] font-medium text-[#415588] px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
        Call Us
      </button>

      <div className="p-4 px-6  h-[70px] rounded-[35px] flex items-center space-x-8 bg-[rgba(0,0,0,0.1)]">
        <Link
          href="/"
          className={cx(
            "hover:text-blue-400 h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={cx(
            "hover:text-blue-400 h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/services" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          Our Services
        </Link>
        <Link
          href="/about"
          className={cx(
            "hover:text-blue-400  h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/about" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          About Us
        </Link>
        <Link
          href="/portfolio"
          className={cx(
            "hover:text-blue-400 h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/portfolio" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className={cx(
            "hover:text-blue-400 h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/contact" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          Contact Us
        </Link>
        <Link
          href="/Blog"
          className={cx(
            "hover:text-blue-400 h-10 rounded-[30px] flex items-center px-6 justify-center",
            pathname === "/Blog" && "bg-[rgba(255,255,255,.25)]"
          )}
        >
          Blog
        </Link>
      </div>
      <Image alt="leenx logo" src="/logo.png" width={60} height={16} />
    </nav>
  );
}

export default NavBar;
