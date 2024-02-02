import bgimage from "../assets/Contactbg.webp";
export default function Maincontent() {
  return (  
    <main className="font-Nunito flex justify-center min-h-[100svh]">
      <section className=" w-1/2  pt-24 md:px-10 px-5 max-sm:px-2 max-lg:w-[500px] max-sm:w-full max-lg:pb-20">
        <h2 className=" text-3xl font-semibold mt-4">Contact Us</h2>
        <p className=" text-base font-light mt-1">
          Got questions or want to support our cause? Reach out! Your message
          fuels our mission. Contact us today!
        </p>
        <div className="flex flex-col gap-3 mt-7">
          <label
            htmlFor="name"
            className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
          >
            Name
          </label>
          <input type="text" id="name" className=" border-b-2 outline-none" />
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <label
            htmlFor="email"
            className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
          >
            Email Address
          </label>
          <input type="email" id="email" className=" border-b-2 outline-none" />
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <label
            htmlFor="Subject "
            className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
          >
            Subject
          </label>
          <input
            type="text"
            id="Subject "
            className=" border-b-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <label
            htmlFor="Message"
            className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
          >
            Message
          </label>
          <textarea
            id="Message"
            className=" border-b-2 outline-none"
          ></textarea>
        </div>
        <button className=" bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] py-2 px-5 text-white font-medium rounded-[60px] text-lg mt-8">
          Submit
        </button>
      </section>
      <section className="w-1/2 max-lg:hidden block">
        <img src={bgimage} alt="" className="h-[100svh] object-cover w-full" />
      </section>
    </main>
  );
}