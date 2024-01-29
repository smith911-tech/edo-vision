import Logo from "../assets/Logo.webp";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = window.location.pathname;
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
  return (
    <header className="flex max-sm:px-2 items-center justify-between bg-white px-5 max-sm:fixed w-full md:px-10 z-50 shadow top-0">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className=" max-sm:w-[70px] max-sm:h-[70px] w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </Link>
      <HiMenuAlt3
        className=" text-3xl hidden max-sm:block cursor-pointer"
        onClick={() => setShowMenu(true)}
      />
      <div
        className={`max-sm:fixed bg-white max-sm:w-full flex max-sm:justify-center max-sm:flex-col max-sm:items-center max-sm:h-[100svh] max-sm:top-0 font-Nunito max-sm:text-2xl gap-10  relative md:text-xl  ${
          showMenu ? "max-sm:left-0" : "max-sm:-left-full"
        }`}
      >
        <FaXmark
          onClick={() => setShowMenu(false)}
          className=" absolute top-6 right-4 text-3xl text-[#0000007c] max-sm:block hidden cursor-pointer"
        />
        <Link
          to="/about"
          className={` font-medium cursor-pointer text-[#000000ba] border-b-2 mb-2 ${
            location === "/about" ? "border-[#CD0A0A]" : "border-transparent"
          }`}
        >
          About
        </Link>
        <Link
          to="/our-projects"
          className={` font-medium cursor-pointer text-[#000000ba] border-b-2 mb-2 ${
            location === "/our-projects"
              ? "border-[#CD0A0A]"
              : "border-transparent"
          }`}
        >
          Our Projects
        </Link>
        <p className=" font-medium cursor-pointer text-[#000000ba]">Join Us</p>
        <p className=" font-medium cursor-pointer text-[#000000ba]">
          Contact Us
        </p>
        <button className="bg-[#cd0a0ae9] w-full mx-6 py-3 text-white max-sm:block hidden hover:bg-[#CD0A0A] focus:bg-[#CD0A0A]">
          Donate
        </button>
      </div>
      <button className=" max-sm:hidden block bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] py-2 px-5 text-white font-medium rounded-[60px] text-xl">
        Donate
      </button>
    </header>
  );
}
