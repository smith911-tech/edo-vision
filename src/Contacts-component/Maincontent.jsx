import bgimage from "../assets/Contactbg.webp";
import emailjs from "@emailjs/browser";
import { message as PopUp} from "antd";
import { ImSpinner10 } from "react-icons/im";
import { useState, useRef } from "react";
export default function Maincontent() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.elements["from_name"].value.trim();
    const email = form.current.elements["email"].value.trim();
    const subject = form.current.elements["subject"].value.trim();
    const message = form.current.elements["message"].value.trim();

    if (!name || !email || !subject || !message) {
      PopUp.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_ts8d809",
        "template_somuk99",
        form.current,
        "rknoKD67ve9RT0up9"
      )
      .then(
        (result) => {
          console.log(result.text);
          PopUp.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
            PopUp.error("Failed to send email. Please try again later.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <main className="font-Nunito flex justify-center min-h-[100svh]">
      <section className=" w-1/2  pt-24 md:px-10 px-5 max-sm:px-2 max-lg:w-[500px] max-sm:w-full max-lg:pb-20">
        <h2 className=" text-3xl font-semibold mt-4">Contact Us</h2>
        <p className=" text-base font-light mt-1">
          Got questions or want to support our cause? Reach out! Your message
          fuels our mission. Contact us today!
        </p>
        <form onSubmit={sendEmail} ref={form}>
          <div className="flex flex-col gap-3 mt-7">
            <label
              htmlFor="name"
              className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" border-b-2 outline-none"
              name="from_name"
            />
          </div>
          <div className="flex flex-col gap-3 mt-7">
            <label
              htmlFor="email"
              className=" text-base font-normal text-[rgba(0,0,0,0.4)]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border-b-2 outline-none"
            />
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
              name="subject"
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
              name="message"
            ></textarea>
          </div>
          <button className=" bg-[#cd0a0ae9] hover:bg-[#CD0A0A] focus:bg-[#CD0A0A] py-2 px-5 text-white font-medium rounded-[60px] text-lg mt-8 w-24">
            {isLoading ? (
              <ImSpinner10 className=" animate-spin text-[28px] block mx-auto" />
            ) : (
              <p>Submit</p>
            )}
          </button>
        </form>
      </section>
      <section className="w-1/2 max-lg:hidden block">
        <img
          src={bgimage}
          alt=""
          className="min-h-[100svh] object-cover w-full"
        />
      </section>
    </main>
  );
}
