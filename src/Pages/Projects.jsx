import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Maincontent from "../Projects-component/Maincontent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Projects() {
      useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <main>
      <Header />
      <div data-aos="fade-up">
        <Maincontent />
        <Footer />
      </div>
    </main>
  );
}
