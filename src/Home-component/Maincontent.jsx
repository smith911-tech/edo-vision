import HeroImage from "../assets/HeroImage.webp";
import UnderHero from "../assets/UnderHero.webp";
import Image1 from "../assets/Image1.webp";
import Image2 from "../assets/Image2.webp";
import Image3 from "../assets/Image3.webp";
import Image4 from "../assets/Image4.webp";
import Image5 from "../assets/Image5.webp";
import Image6 from "../assets/Image6.webp";
export default function Maincontent() {
  return (
    <main className=" max-sm:pt-24 font-Nunito">
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
        <button className=" absolute bottom-5 left-1/2 right-1/2 -translate-x-1/2 w-28 border-[3px] rounded-[60px] py-2 border-white text-white font-semibold hover:bg-white hover:text-black focus:bg-white focus:text-black">
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
          <button className=" block ml-auto w-28 border-[1px] rounded-[60px] py-2 border-[#CD0A0A] text-black font-semibold hover:bg-[#CD0A0A] hover:text-white focus:bg-[#CD0A0A] focus:text-black my-2">
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
            <button className=" bg-[#CD0A0A] rounded-3xl px-4 py-2 text-white text-base">
              Donate now
            </button>
            <p className=" text-white font-semibold hover:underline focus:underline cursor-pointer">
              See More
            </p>
          </div>
        </div>
        <button className=" block ml-auto w-36 border-[1px] rounded-[60px] py-2 border-[#CD0A0A] text-black font-semibold hover:bg-[#CD0A0A] hover:text-white focus:bg-[#CD0A0A] focus:text-black my-2">
          See all projects
        </button>
        <h2 className="max-sm:text-2xl font-semibold max-md:text-3xl text-4xl my-5 text-center">
          Recent Photo Reports
        </h2>
        <section className="max-lg:w-full w-[85%] pb-6 mx-auto  gap-4 max-lg:columns-1 columns-3 space-y-4 max-lg:gap-2 max-lg:space-y-4">
          <div className="h-[360px]">
            <img
              src={Image1}
              alt="img"
              className=" h-[320px] object-cover rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              An Edo vision medical volunteer giving out medical supplies
            </p>
          </div>
          <div className="h-[530px]">
            <img
              src={Image4}
              alt="img"
              className=" h-[430px] object-cover rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteers planting trees for the ‘Save ou planet’ campaign
            </p>
          </div>
          <div className="h-[450px]">
            <img
              src={Image2}
              alt="img"
              className="h-[430px] object-cover rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              An Edo vision medical volunteer giving out medical supplies
            </p>
          </div>
          <div className="h-[450px] ">
            <img
              src={Image5}
              alt="img"
              className="h-[420px] object-cover rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              A student taking pottery classes
            </p>
          </div>
          <div className="h-[360px] ">
            <img
              src={Image3}
              alt="img"
              className="object-cover h-[320px] rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              Volunteers helping out in envionmental sanitation exercise
            </p>
          </div>

          <div className="h-[530px] ">
            <img
              src={Image6}
              alt="img"
              className="h-[430px] object-cover rounded-[60px] w-full"
            />
            <p className=" text-[#000000bb] text-center font-normal text-sm">
              An Edo vision volunteer giving out lunch packages to local
              students
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}