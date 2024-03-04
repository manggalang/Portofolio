import Image from "next/image";
import AboutStyle from "../../style/about.module.css";
import ContactSection from "@/components/contact-section";

const WorkExperiences = [
  {
    name: "Benerin.id",
    startdate: "September 2023",
    position: "Chief Technology Officier",
    desc: "Benerin.id is a platform that brings service technicians together with potential customers",
  },
  {
    name: "Duopomelo",
    startdate: "February 2023",
    position: "Front-end Web Developer",
    desc: "Duopomelo is a platform that connects hotel staff with needed hotel equipment vendors",
  },
  {
    name: "Lokerian",
    startdate: "January 2022",
    position: "Front-end Web Developer",
    desc: "Lokerian is a connecting platform between hotel staff and prospective daily workers",
  },
  {
    name: "Primakara Developers",
    startdate: "August 2021",
    position: "Course Intructor",
    desc: "Create a learning experience,material about Web Developer. Mentoring 100+ students",
  },
];

export default function About() {
  return (
    <main className={`pt-[150px] sm:pt-[180px] ${AboutStyle.main}`}>
      <section className="container">
        <h1 className="font-semibold text-grey text-[16px] tracking-[6px] sm:text-[22px]">
          INTRODUCTION
        </h1>
        <h2 className="font-space-grotesk font-bold mt-[12px] text-white text-[26px] sm:text-[48px] lg:text-[60px]">
          Hi, I&apos;m Galang! Web Developer from Indonesia
        </h2>
        <p className="mt-[12px] text-grey text-[14px] sm:text-[18px]">
          I am a student at Primakara University majoring in Informatics
          Engineering in 2021. I am also a Web Developer. Proficient in using
          JavaScript programming languages and frameworks such as React and Vue.
          I&apos;m very enthusiastic about technology, able to work under
          pressure, learn quickly and proficiently to work in a team or
          individually.
        </p>
      </section>

      <section className="py-[90px] sm:py-[120px]">
        <div className="container">
          <h1 className="font-semibold text-grey text-[16px] tracking-[6px] sm:text-[22px]">
            EXPERIENCE
          </h1>
          <div className="flex flex-col justify-between xl:flex-row">
            <h2 className="font-space-grotesk font-bold mt-[12px] text-white text-[26px] sm:text-[48px] lg:text-[60px]">
              Work Experiences
            </h2>
            <div className="w-full xl:w-[70%]">
              <div className={AboutStyle.BorderBottom}>
                <p className="text-grey text-[14px] sm:text-[18px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  aut, fugiat doloribus similique nemo, dignissimos quidem unde
                  aspernatur rerum, ipsum corporis incidunt consequuntur aliquam
                  beatae praesentium. <br /> <br /> Excepturi reiciendis vero
                  nemo. Expedita laborum molestiae voluptates ullam? Asperiores
                  culpa ullam natus vero mollitia dicta blanditiis praesentium
                  architecto error est aperiam adipisci tempora, beatae, iste
                  voluptates veniam quasi, eveniet nostrum minima rem nihil.
                </p>
              </div>
              <div className="gap-[30px] grid grid-cols-1 pt-[45px] lg:grid-cols-2">
                {WorkExperiences.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <span className="font-space-grotesk font-semibold text-[20px] sm:text-[24px]">
                        {item.name}
                      </span>
                      <span className="font-semibold text-[16px] sm:text-[18px]">
                        {item.startdate}
                      </span>
                    </div>
                    <span className="block mt-[8px] text-grey text-[14px] sm:text-[16px]">
                      {item.position}
                    </span>
                    <p className="mt-[8px] text-grey text-[14px] sm:text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
