import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);
  return (
    <header className="flex py-2 max-sm:px-2 items-center justify-between bg-white px-5 max-sm:fixed w-full md:px-10 z-50">
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
        <p className=" font-medium cursor-pointer text-[#000000ba]">About</p>
        <p className=" font-medium cursor-pointer text-[#000000ba]">
          Our Projects
        </p>
        <p className=" font-medium cursor-pointer text-[#000000ba]">Join Us</p>
        <p className=" font-medium cursor-pointer text-[#000000ba]">
          Contact Us
        </p>
        <button className="bg-[#CD0A0A] w-full mx-6 py-3 text-white max-sm:block hidden">
          Donate
        </button>
      </div>
      <button className=" max-sm:hidden block bg-[#CD0A0A] py-2 px-5 text-white font-medium rounded-[60px] text-xl">
        Donate
      </button>
    </header>
  );
}
