import Maincontent from "../About-component/Maincontent";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
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