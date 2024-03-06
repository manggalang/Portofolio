import Link from "next/link";
import Image from "next/image";

import ContactSection from "@/components/contact-section";
import PortfolioStyle from "../../style/portfolio.module.css";

const portfolio = [
  {
    name: "Kuliku",
    image: "/image/kuliku.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolorem? Quidem debitis cumque sapiente, corrupti,",
    tag: ["UI & UX design", "Prototyping"],
    link: "https://bit.ly/prototype-kuliku",
  },
  {
    name: "Benerin.id",
    image: "/image/benerin.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolorem? Quidem debitis cumque sapiente, corrupti,",
    tag: ["Nuxt", "Web Development"],
    link: "https://benerin.id/",
  },
  {
    name: "Lokerian",
    image: "/image/lokerian.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, inventore dolorem? Quidem debitis cumque sapiente, corrupti,",
    tag: ["Vue.js", "Web Development"],
    link: "https://www.lokerian.com/",
  },
];

export default function Portfolio() {
  return (
    <main className="relative">
      <section className="pb-[90px] pt-[150px] sm:pb-[120px] sm:pt-[180px]">
        <div className="container">
          <h1 className="font-semibold text-grey text-[16px] tracking-[6px] sm:text-[22px]">
            PORTFOLIO
          </h1>
          <h2 className="font-space-grotesk font-bold mt-[12px] text-white text-[26px] sm:text-[48px] lg:text-[60px]">
            Here are a few past projects I&apos;ve worked on.
          </h2>

          <div
            className={`gap-[25px] grid grid-cols-1 justify-items-center mt-[60px] sm:gap-[45px] lg:gap-[16px] lg:justify-items-start	 lg:grid-cols-3 lg:justify-between`}
          >
            {portfolio.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                className={`group ${PortfolioStyle.projectCard}`}
              >
                <div className="max-h-[200px] overflow-hidden relative rounded-t-[16px] w-full">
                  <Image
                    src={item.image}
                    alt={`Logo ${item.name}`}
                    height={200}
                    width={355.56}
                    className="delay-300 duration-300 h-[200px] grayscale group-hover:grayscale-0 group-hover:scale-[1.05] object-cover transition w-full"
                  />

                  <div className="absolute flex gap-1 items-center left-[16px] bottom-[16px]">
                    {item.tag.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-[#3ec6eb_2.47%] to-[#1bc99f_102.78%] px-3 py-2 rounded-lg text-[12px] sm:text-[14px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="py-[32px] px-[16px]">
                  <p className="font-bold font-space-grotesk text-white text-[22px] sm:text-[28px]">
                    {item.name}
                  </p>

                  <p className="mt-[8px] text-grey text-justify text-[14px] sm:text-[18px]">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <ul className={`-z-10 ${PortfolioStyle.circle}`}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}
