import Maincontent from "../Contacts-component/Maincontent";
import Header from "../Component/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactUs() {
      useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <main>
      <Header />
      <div data-aos="fade-up">
        <Maincontent />
      </div>
    </main>
  );
}
