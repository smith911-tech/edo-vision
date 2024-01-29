import Footer from "../Component/Footer";
import Header from "../Component/Header";
import HeroImage from "../assets/CodeOfConductimage.webp";
export default function CodeOfConduct() {
  return (
    <main>
      <Header />
      <main className=" max-sm:pt-24 font-Nunito">
        <section className="md:px-10 px-5 max-sm:px-2">
          <h1 className="text-center mt-2 max-sm:text-2xl font-semibold max-md:text-3xl text-4xl">
            Code Of Conduct For Edo Vision Volunteers
          </h1>
          <p className="text-center font-normal mt-4 md:max-w-[780px] md:block md:mx-auto md:mb-0">
            It is imperative that each volunteer reads and comprehends the Code
            of Conduct meticulously. Your understanding and commitment to these
            guiding principles are fundamental in sustaining our movement's
            integrity and achieving our collective goals
          </p>
        </section>
        <img
          src={HeroImage}
          alt="image"
          className=" w-full h-96 object-cover my-10 object-top"
        />
        <section className="md:px-10 px-5 max-sm:px-8 mb-20">
          <ul className=" font-normal mt-4 md:max-w-[780px] md:block md:mx-auto mb-5 list-decimal">
            <li>
              Commitment to the Mission: I wholeheartedly embrace the vision and
              mission of Edo Vision, dedicated to effecting positive change in
              the lives of the Edo community.
            </li>
            <li>
              Respect and Inclusivity: I will treat everyone with unwavering
              respect, honoring their dignity and embracing diversity
              irrespective of race, gender, religion, sexual orientation, or
              background.
            </li>
            <li>
              Integrity and Honesty: Upholding unwavering honesty, transparency,
              and ethical behavior, I pledge to maintain the utmost integrity in
              all engagements related to Edo Vision
            </li>
            <li>
              Confidentiality: I recognize and uphold the importance of
              preserving the confidentiality of sensitive information shared
              within Edo Vision, fostering an environment of trust among fellow
              volunteers.
            </li>
            <li>
              Accountability: I hold myself accountable for my actions and
              commit to fulfilling obligations made to Edo Vision and its
              projects
            </li>
            <li>
              Collaborative Spirit: I will actively engage in fostering a
              collaborative and supportive environment among fellow volunteers,
              encouraging teamwork and innovative ideas.
            </li>
            <li>
              Compliance with Laws and Regulations: I will rigorously adhere to
              all relevant laws and regulations while representing Edo Vision in
              any capacity.
            </li>
            <li>
              Continuous Learning: Committed to continuous growth and
              improvement, I will seek opportunities to enhance my skills,
              contributing effectively to Edo Vision's objectives.
            </li>
            <li>
              Representing Edo Vision: When representing Edo Vision, I will
              ensure accurate and professional representation, aligning with the
              organization's values and goals.
            </li>
            <li>
              Upholding the Code: I understand and recognize that adherence to
              this Code of Conduct is pivotal in safeguarding the credibility
              and triumph of Edo Vision and its endeavors.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </main>
  );
}
