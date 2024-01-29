import AboutHeroImage from "../assets/ProjectsHeroImage.webp";
import UnderHero from "../assets/UnderHero.webp";
import { useNavigate } from "react-router-dom";
import Completed1 from "../assets/CompletedP1.webp";
import Completed2 from "../assets/CompletedP2.webp";
import Completed3 from "../assets/CompletedP3.webp";
import Image1 from "../assets/image1.webp";
import Image2 from "../assets/image2.webp";
import Image3 from "../assets/image3.webp";
import Image4 from "../assets/image4.webp";
import Image5 from "../assets/image5.webp";
import Image6 from "../assets/image6.webp";
export default function Maincontent() {
    const navigate = useNavigate();
  return (
    <main className=" max-sm:pt-24 font-Nunito mt-2">
      <div className="flex max-md:justify-be max-md:flex-col max-md:gap-4 items-center justify-between max-md:px-2 gap-[64px] mb-5">
        <h1 className=" max-md:text-3xl font-semibold pl-10 text-4xl md:w-96">
          Our Projects
        </h1>
        <img
          src={AboutHeroImage}
          alt="img"
          className=" max-md:rounded-xl object-cover object-left-top max-md:w-full w-[76%] md:h-[450px] md:rounded-l-[360px] overflow-x-hidden"
        />
      </div>
      <section className="md:px-10 px-5 max-sm:px-2 ">
        <h2 className="max-sm:text-2xl font-semibold max-md:text-3xl text-4xl mb-4">
          Current Project
        </h2>
        <div className=" mb-5 relative">
          <img
            src={UnderHero}
            alt="UnderHero image"
            className="h-[250px] w-full object-cover  md:h-[500px] brightness-50 rounded-3xl"
          />
          <div className=" absolute px-2 py-1 rounded-xl bg-[rgba(0,0,0,0.40)] top-5 left-2 text-white ">
            <div className="flex justify-between text-xs mb-1">
              <p>Amount gotten</p>
              <p>Total amount</p>
            </div>
            <p className=" max-sm:text-xl text-2xl">N200,000/N1,000,000</p>
          </div>
          <p className="absolute left-2 max-sm:text-xl max-lg:text-2xl text-3xl top-[50%] text-white">
            Edo Vision Medical Outreach Project December 2023
          </p>
          <div className=" absolute bottom-3 right-4 flex gap-4 items-center md:bottom-10">
            <button className="bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] rounded-3xl px-4 py-2 text-white text-base">
              Donate now
            </button>
            <p
              onClick={() => {
                navigate("/medical-outreach-details");
                window.scrollTo(0, 0);
              }}
              className=" text-white font-semibold hover:underline focus:underline cursor-pointer"
            >
              See More
            </p>
          </div>
        </div>
        <h2 className="max-sm:text-2xl font-semibold max-md:text-3xl text-4xl mb-4">
          Completed Projects
        </h2>
        <section className="flex max-md:flex-col gap-6 justify-center flex-wrap flex-row">
          <div className="  max-md:w-full w-[31%] max-lg:w-[40%]">
            <img
              src={Completed1}
              alt="image"
              className="w-full rounded-lg object-cover md:h-80"
            />
            <p className="font-medium text-xl max-sm:text-lg">
              Edo Literacy Outreach Project March 2024
            </p>
          </div>
          <div className="  max-md:w-full w-[31%] max-lg:w-[40%]">
            <img
              src={Completed2}
              alt="image"
              className="w-full rounded-lg object-cover md:h-80"
            />
            <p className="font-medium text-xl max-sm:text-lg">
              Edo Mental Health Awareness Outreach Project January 2024
            </p>
          </div>
          <div className="  max-md:w-full w-[31%] max-lg:w-[40%]">
            <img
              src={Completed3}
              alt="image"
              className="w-full rounded-lg object-cover md:h-80"
            />
            <p className="font-medium text-xl max-sm:text-lg">
              Edo Disaster Resilience Outreach Project Febuary 2024
            </p>
          </div>
        </section>
        <h2 className="max-sm:text-2xl font-semibold max-md:text-3xl text-4xl mb-5 text-center mt-12">
          Recent Photo Reports
        </h2>
        <section className="max-lg:w-full w-[85%] pb-6 mx-auto  gap-4 max-lg:columns-1 columns-3 space-y-4 max-lg:gap-2 mb-10">
          <div className="h-[360px]">
            <img
              src={Image1}
              alt="img"
              className=" h-[320px] object-cover rounded-[60px] w-full object-top"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Edo vision volunteers at Uselu market
            </p>
          </div>
          <div className="h-[550px] max-lg:h-[360px]">
            <img
              src={Image4}
              alt="img"
              className="max-lg:h-[320px] h-[430px] object-cover rounded-[60px] w-full object-top"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteer with trader after health awareness talk
            </p>
          </div>
          <div className="h-[450px] max-lg:h-[360px]">
            <img
              src={Image2}
              alt="img"
              className="h-[430px] object-cover rounded-[60px] w-full object-top max-lg:h-[320px]"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteer doing a B.P check for a Trader
            </p>
          </div>
          <div className="h-[450px] max-lg:h-[360px]">
            <img
              src={Image5}
              alt="img"
              className="h-[420px] max-lg:h-[320px] object-cover rounded-[60px] w-full object-top"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteers doing health checks at Uselu Market
            </p>
          </div>
          <div className="h-[360px] ">
            <img
              src={Image3}
              alt="img"
              className="object-cover h-[320px] rounded-[60px] w-full object-top"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteer doing a B.P check for a trader
            </p>
          </div>

          <div className="h-[550px] max-lg:h-[360px]">
            <img
              src={Image6}
              alt="img"
              className="h-[430px] max-lg:h-[320px] object-cover rounded-[60px] w-full object-top"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteers doing health checks at Uselu Market
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
