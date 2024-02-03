import AboutHeroImage from "../assets/AboutHeroImage.webp";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Maincontent() {
    const navigate = useNavigate();
  return (
    <main className=" pt-24 font-Nunito mt-2">
      <div className="flex max-md:justify-be max-md:flex-col max-md:gap-4 items-center justify-between max-md:px-2 gap-[64px]">
        <h1 className=" max-md:text-3xl font-semibold pl-10 text-4xl md:max-w-96">
          About Edo Vision
        </h1>
        <img
          src={AboutHeroImage}
          alt="img"
          className=" max-md:rounded-xl object-cover max-md:w-full w-[76%] md:h-[450px] md:rounded-l-[360px] overflow-x-hidden"
        />
      </div>
      <section className="md:px-10 px-5 max-sm:px-2">
        <p className=" font-normal mt-6 md:max-w-[760px] md:block md:mx-auto md:mb-0">
          Edo Vision is a volunteer network of well-meaning Edolites advocating
          for sustainable initiatives/projects for all Edolites, especially
          those at the grassroots. Our duty as active Edo Citizens is to serve
          as a voice to the voiceless in Edo State; serving as a middleman
          between the Edo people and government institutions to push for
          accountability, policies, and proper resource allocation to critical
          areas of development in Edo state; all of these under 3 focus areas:
          Healthcare, Education and Overall Standard of Living.
        </p>
        <h2 className=" my-6 text-4xl font-semibold max-md:text-3xl">
          The Team
        </h2>
        {/* <section className=" flex justify-center flex-wrap gap-5">
          <div className=" max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">
              Osaruese Iyayi
            </p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Executive Director
            </p>
          </div>
          <div className="max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">
              Osemwegie Osaze
            </p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Project Manager
            </p>
          </div>
          <div className="max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">
              Eseoghene Agbontaen
            </p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Program Director
            </p>
          </div>
          <div className="max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">
              Osasuyi Evbie
            </p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Community Outreach Coordinator
            </p>
          </div>
          <div className="max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">
              Ehizogie Ehiabor
            </p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Fundraising Manager
            </p>
          </div>
          <div className="max-md:w-[80%] max-sm:w-[85%] max-lg:w-[30%] w-[350px]">
            <div className="bg-[#515151] py-8 px-1 flex justify-center">
              <FaUser className="text-9xl text-[white]" />
            </div>
            <p className=" max-sm:text-xl text-2xl font-medium">Aisosa Abeni</p>
            <p className=" text-base font-normal text-[#00000094] max-sm:text-sm">
              Finance Officer
            </p>
          </div>
        </section>
        <div className=" mt-14 flex justify-between mb-8 items-center">
          <h2 className="max-sm:text-xl text-2xl font-semibold text-black">
            and 20 others
          </h2>
          <button
            onClick={() => {
              navigate("/join-us");
              window.scrollTo(0, 0);
            }}
            className="bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] text-white py-2 px-5 rounded-[60px] text-xl"
          >
            Join Us
          </button>
        </div> */}
        <h2 className=" text-3xl max-sm:text-2xl my-7 text-center">Comming soon.....</h2>
      </section>
    </main>
  );
}
