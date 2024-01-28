import Logo from "../assets/logo.webp";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    const Year = new Date().getFullYear();
    return (
      <footer className="bg-[#CD0A0A] max-sm:py-3 max-sm:pb-6 md:px-10 px-5 max-sm:px-2 m font-Nunito">
        <section className="flex max-sm:justify-center max-sm:flex-col max-sm:items-center items-end max-sm:gap-3 gap-[25%]">
          <img src={Logo} alt="logo" className=" max-sm:w-20 w-24" />
          <div className=" flex flex-wrap max-sm:justify-center gap-4 text-[white] font-medium text-base">
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Our Projects</p>
            <p className="cursor-pointer">Join Us</p>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Donate</p>
          </div>
        </section>
        <div className=" text-base flex justify-center items-center max-sm:gap-3  my-8  w-full gap-9">
          <p className=" text-white font-extralight">Privacy policy</p>
          <a
            href="https://twitter.com/Edo_Vision"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className=" text-3xl text-white" />
          </a>
          <p className=" text-white font-extralight">Terms and Conditions</p>
        </div>
        <p className="text-[white] text-sm font-normal text-center pb-8">
          ©{Year} Edo Vision. All Rights Reserved.
        </p>
      </footer>
    );
}