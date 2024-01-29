import Footer from "../Component/Footer";
import Header from "../Component/Header";
import UnderHero from "../assets/UnderHero.webp";
import { useNavigate } from "react-router-dom";
export default function MedicalOdetails() {
    const navigate = useNavigate();
  return (
    <main>
      <Header />
      <main className=" max-sm:pt-24 font-Nunito mt-2">
        <section className="md:px-10 px-5 max-sm:px-2 ">
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
                  navigate("/our-projects");
                  window.scrollTo(0, 0);
                }}
                className=" text-white font-semibold hover:underline focus:underline cursor-pointer"
              >
                See More
              </p>
            </div>
          </div>
          <p className=" font-normal my-6 md:max-w-[760px] md:block md:mx-auto ">
            On December 2nd, 2023, the Edo Vision volunteers made a significant
            impact in Uselu Market, Edo State, Nigeria. Their mission: to
            promote health awareness and provide essential services directly to
            the community. Through various initiatives, the volunteers empowered
            individuals to take charge of their well-being. Informative flyers
            distributed valuable health tips, while free health checks offered
            immediate insights into individual health status. To amplify the
            impact, an engaging health awareness talk covered crucial topics
            like healthy living practices, disease prevention, and the
            importance of regular checkups. The Edo Vision volunteers'
            dedication was met with overwhelming appreciation. Their efforts not
            only provided immediate healthcare assistance but also instilled a
            sense of awareness and proactive care within the community. This
            initiative serves as a powerful example of the positive impact
            volunteerism can have on promoting health and wellbeing. If youd
            like to take a look at the list of things needed you can click on
            the link: Edo vision medical outreach project 2023
          </p>
          <div className="mb-10 md:max-w-[760px] md:block md:mx-auto">
            <p className=" font-normal  ">
              And if you wish to support us in getting the supplies needed do
              click on the contact us button below.
            </p>
            <button
              onClick={() => {
                navigate("/contact-us");
                window.scrollTo(0, 0);
              }}
              className=" block  w-28 border-[1px] rounded-[60px] py-2 border-[#CD0A0A] text-black font-semibold hover:bg-[#CD0A0A] hover:text-white focus:bg-[#CD0A0A] focus:text-black my-2"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
