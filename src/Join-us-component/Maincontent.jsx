import { Link } from "react-router-dom";
import HeroImage from "../assets/Join-us-heroimage.webp";
export default function Maincontent() {
  return (
    <main className=" pt-24 font-Nunito">
      <section className="md:px-10 px-5 max-sm:px-2">
        <h1 className="text-center mt-2 max-sm:text-2xl font-semibold max-md:text-3xl text-4xl">
          Join The Edo Vision Movement
        </h1>
        <p className="text-center font-normal mt-4 md:max-w-[780px] md:block md:mx-auto md:mb-0">
          Empower change, join our cause as a volunteer, and ignite impactful
          transformations in the lives of the Edo community. Your commitment
          will create a meaningful difference, shaping a brighter future for the
          people of Edo. Be the catalyst for positive change today
        </p>
      </section>
      <img
        src={HeroImage}
        alt="image"
        className=" w-full h-96 object-cover my-10"
      />
      <section className="md:px-10 px-5 max-sm:px-2 mb-20">
        <p className=" font-normal mt-4 md:max-w-[780px] md:block md:mx-auto mb-5">
          Important!: By clicking the 'Join Now' button, you are acknowledging
          and agreeing to adhere to our{" "}
          <Link
            to="/code-of-conduct"
            onClick={() => window.scrollTo(0, 0)}
            className=" underline text-[blue] text-nowrap"
          >
            Code of Conduct
          </Link>
          . Please take a moment to review this essential guideline, ensuring
          our collective commitment to ethical engagement and impactful
          contributions. As part of the process, upon clicking 'Join Now,'
          you'll be directed to a dedicated WhatsApp group. There, we kindly
          request basic information about yourself before joining the main Edo
          Vision Volunteer Group. Your participation in this initial step helps
          us ensure a smooth and meaningful onboarding experience for all
          volunteers.
        </p>
        <a
          href="https://chat.whatsapp.com/CsN0zJ1A5Aj2aAE2l8BR3t" target="blank"
          className="bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] text-white py-2 px-5 rounded-[60px] text-xl block mx-auto w-32 text-center"
        >
          Join now
        </a>
      </section>
    </main>
  );}