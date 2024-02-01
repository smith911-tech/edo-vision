import HeroImage from "../assets/HeroImage.webp";
import UnderHero from "../assets/UnderHero.webp";
import Image1 from "../assets/image1.webp";
import Image2 from "../assets/image2.webp";
import Image3 from "../assets/image3.webp";
import Image4 from "../assets/image4.webp";
import Image5 from "../assets/image5.webp";
import Image6 from "../assets/image6.webp";
import { useNavigate } from "react-router-dom";
export default function Maincontent() {
    const navigate = useNavigate();
  return (
    <main className=" pt-24 font-Nunito">
      <section className="md:px-10 px-5 max-sm:px-2">
        <h1 className="text-center mt-2 max-sm:text-2xl font-semibold max-md:text-3xl text-4xl">
          Empowering Edo's Future
        </h1>
        <p className="text-center font-normal mt-4 md:max-w-[760px] md:block md:mx-auto md:mb-0">
          Join us in advocating for sustainable initiatives, amplifying voices,
          and driving change for the Edo people, one volunteer and donation at a
          time
        </p>
      </section>
      <section className="relative">
        <img
          src={HeroImage}
          alt="Hero image"
          className=" mt-9 h-[300px] w-full object-cover object-top md:h-[500px] brightness-50"
        />
        <button
          onClick={() => {
            navigate("/join-us");
            window.scrollTo(0, 0);
          }}
          className="absolute bottom-5 left-1/2 right-1/2 -translate-x-1/2 w-28 border-[3px] rounded-[60px] py-2 border-[#ffffffc6] text-[#ffffffc6] font-semibold hover:bg-[white] hover:text-black focus:bg-[white] focus:text-black"
        >
          Join Us
        </button>
      </section>
      <section className="md:px-10 px-5 max-sm:px-2 ">
        <div className="md:max-w-[700px] md:block md:mx-auto md:mb-0 mt-5 pb-4 relative text-wrap">
          <p className=" font-normal">
            Edo Vision is a volunteer network of well-meaning Edolites
            advocating for sustainable initiatives/projects for all Edolites,
            especially those at the grassroots. Our duty as active Edo Citizens
            is to serve as a voice to the voiceless in Edo State; serving as a
            middleman between the Edo people and government institutions to push
            for accountability, policies, and proper resource allocation to
            critical areas of development in Edo state; all of these under 3
            focus areas: Healthcare, Education and Overall Standard of Living.
          </p>
          <button
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
            className=" block ml-auto w-28 border-[1px] rounded-[60px] py-2 border-[#CD0A0A] text-black font-semibold hover:bg-[#CD0A0A] hover:text-white focus:bg-[#CD0A0A] focus:text-black my-2"
          >
            See more
          </button>
        </div>
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
        <button
          onClick={() => {
            navigate("/our-projects");
            window.scrollTo(0, 0);
          }}
          className=" block ml-auto w-36 border-[1px] rounded-[60px] py-2 border-[#CD0A0A] text-black font-semibold hover:bg-[#CD0A0A] hover:text-white focus:bg-[#CD0A0A] focus:text-black my-2"
        >
          See all projects
        </button>
        <h2 className="max-sm:text-2xl font-semibold max-md:text-3xl text-4xl my-5 text-center">
          Recent Photo Reports
        </h2>
        <section className="max-lg:w-full w-[85%] pb-6 mx-auto  gap-4 max-lg:columns-1 columns-3 space-y-4 max-lg:gap-2 ">
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
