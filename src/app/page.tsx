"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import ContactSection from "@/components/contact-section";
import HomeStyle from "../style/home.module.css";

const skills = [
  {
    name: "HTML",
    pathname: "/icons/html.png",
  },
  {
    name: "CSS",
    pathname: "/icons/css.png",
  },
  {
    name: "SCSS",
    pathname: "/icons/sass.png",
  },
  {
    name: "Javascript",
    pathname: "/icons/javascript.png",
  },
  {
    name: "Typescript",
    pathname: "/icons/typescript.png",
  },
  {
    name: "Github",
    pathname: "/icons/github.png",
  },
  {
    name: "Vue.js",
    pathname: "/icons/vuejs.png",
  },
  {
    name: "Nuxt",
    pathname: "/icons/nuxt.png",
  },
  {
    name: "React.js",
    pathname: "/icons/react.png",
  },
  {
    name: "Next",
    pathname: "/icons/nextjs.png",
  },
  {
    name: "Express.js",
    pathname: "/icons/express-js.png",
  },
];

const portfolio = [
  {
    name: "Kuliku",
    image: "/image/kuliku.png",
    description:
      "Kuliku is an online marketplace platform that connects individuals or businesses with architects, builders, service technicians who offer a range of digital services.",
    tag: ["UI & UX design", "Prototyping"],
    link: "https://bit.ly/prototype-kuliku",
  },
  {
    name: "Benerin.id",
    image: "/image/benerin.png",
    description:
      "Benerin.id is a startup business engaged in the service sector that will focus on solving the problem of difficulty in finding an electronics repairman.",
    tag: ["Nuxt", "Web Development"],
    link: "https://benerin.id/",
  },
  {
    name: "Lokerian",
    image: "/image/lokerian.png",
    description:
      "Lokerian is a platform to find information on daily job vacancies, contracts according to your experience.",
    tag: ["Vue.js", "Web Development"],
    link: "https://www.lokerian.com/",
  },
];

export default function Home() {
  return (
    <main>
      <section className={`h-[100dvh] lg:h-[768px] ${HomeStyle.banner}`}>
        <div className="container h-full w-full sm:flex sm:items-center sm:justify-between">
          <div className="relative h-full w-full">
            <div className="flex flex-col h-full items-start justify-center w-full sm:absolute sm:block sm:h-auto sm:items-center sm:justify-start sm:left-0 sm:top-[50%] sm:translate-y-[-50%] sm:w-[550px]">
              <h1 className={HomeStyle.heroText}>
                I’m Galang, a <br />
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    3500,
                    "Front-end Developer",
                    4000,
                    "Instructor",
                    3500,
                  ]}
                  wrapper="span"
                  speed={50}
                  preRenderFirstString={true}
                  repeat={Infinity}
                />
              </h1>
              <p className="font-bold text-grey text-[18px] sm:text-[24px]">
                Based in Bali, Indonesia
              </p>

              <div className="flex gap-[16px] items-center mt-[45px]">
                <p className="font-bold text-white text-[18px] sm:text-[24px]">
                  Follow me :
                </p>
                <div className="flex gap-[16px] items-center">
                  <Link
                    href="https://www.linkedin.com/in/i-komang-adi-galang-permana/"
                    target="_blank"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group"
                    >
                      <path
                        d="M9.60006 26.6667H4.26672V10.6667H9.60006V26.6667ZM6.93446 8.53335C5.45926 8.53335 4.26672 7.33761 4.26672 5.86561C4.26672 4.39361 5.46139 3.20001 6.93446 3.20001C8.40432 3.20001 9.60006 4.39575 9.60006 5.86561C9.60006 7.33761 8.40432 8.53335 6.93446 8.53335ZM28.8001 26.6667H23.6726V18.88C23.6726 17.0229 23.6374 14.6347 21.007 14.6347C18.3371 14.6347 17.9265 16.6571 17.9265 18.7456V26.6667H12.8001V10.6549H17.7217V12.8427H17.791C18.4758 11.584 20.1494 10.2571 22.6454 10.2571C27.8401 10.2571 28.8001 13.5733 28.8001 17.8848V26.6667Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link href="https://github.com/manggalang" target="_blank">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group"
                    >
                      <path
                        d="M16 3C8.8205 3 3 8.8205 3 16C3 22.1385 7.256 27.28 12.9775 28.643C12.6815 28.5725 12.388 28.4935 12.1 28.4035V25.425C12.1 25.425 11.6125 25.5875 10.9625 25.5875C9.144 25.5875 8.3885 23.965 8.2 23.15C8.0855 22.6535 7.7865 22.183 7.4655 21.8955C7.082 21.5535 6.9025 21.5525 6.9 21.4355C6.895 21.19 7.229 21.2 7.3875 21.2C8.2 21.2 8.816 22.0645 9.102 22.5115C9.8105 23.615 10.571 23.8 10.9625 23.8C11.45 23.8 11.871 23.727 12.161 23.587C12.295 22.643 12.715 21.802 13.4 21.2C10.3515 20.5905 8.2 18.842 8.2 16C8.2 14.536 8.7875 13.1905 9.7665 12.104C9.6665 11.8205 9.5 11.247 9.5 10.3125C9.5 9.695 9.543 8.937 9.825 8.2C9.825 8.2 11.679 8.213 13.4275 9.869C14.2345 9.634 15.098 9.5 16 9.5C16.902 9.5 17.7655 9.634 18.5725 9.869C20.321 8.213 22.175 8.2 22.175 8.2C22.4585 8.937 22.5 9.695 22.5 10.3125C22.5 11.32 22.366 11.9075 22.284 12.161C23.233 13.2375 23.8 14.562 23.8 16C23.8 18.842 21.6485 20.5905 18.6 21.2C19.414 21.915 19.9 22.9565 19.9 24.125V28.4035C19.612 28.494 19.319 28.5725 19.0225 28.643C24.744 27.28 29 22.1385 29 16C29 8.8205 23.1795 3 16 3ZM16.9065 28.965C16.607 28.986 16.305 29 16 29C16.305 29 16.6065 28.9855 16.9065 28.965ZM16 29C15.695 29 15.393 28.986 15.0935 28.965C15.3935 28.9855 15.695 29 16 29ZM14.894 28.95C14.2855 28.8985 13.6885 28.8055 13.107 28.673C13.689 28.805 14.2855 28.8985 14.894 28.95Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/mang_galang/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 26 26"
                      className="group"
                    >
                      <path
                        d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full hidden relative shrink-0 w-full md:block lg:w-[730px]">
            <Image
              src="/image/banner-image.png"
              alt="Galang Picture"
              width={730}
              height={650}
              className="absolute bottom-0 grayscale h-[284.93px] right-0 -z-10 w-[320px] sm:h-[569.86px] sm:w-[640px]  lg:h-[650px] lg:w-[730px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-dark80 pt-[90px] sm:pt-[120px]">
        <div className="container">
          <h1 className="font-semibold text-white text-[26px] sm:text-[48px]">
            ABOUT ME
          </h1>
          <div className="flex flex-col gap-[30px] items-center justify-between mt-[30px] sm:mt-[60px] lg:flex-row lg:gap-0">
            <div className="w-full lg:max-w-[448px]">
              <h2 className="font-space-grotesk font-bold text-white text-[22px] sm:text-[42px]">
                I’ve been developing website since 2021
              </h2>
              <p className="mt-[20px] text-grey text-[14px] sm:text-[18px]">
                I am a Web Developer. Proficient in using JavaScript programming
                languages and frameworks such as React and Vue. I am very
                enthusiastic about technology, able to work under pressure,
                learn quickly and able to work in a team or individually
              </p>
            </div>

            <div className="w-full lg:w-fit">
              <div className="flex items-center justify-between w-full sm:gap-[36px] sm:justify-end lg:justify-normal lg:w-fit">
                <div className="flex gap-[12px] items-center">
                  <p className="font-bold font-space-grotesk text-white text-[48px] sm:text-[98px]">
                    3
                  </p>
                  <span className="font-bold font-space-grotesk text-[16px] w-[90px] sm:text-[28px] sm:w-[150px]">
                    Years of experience
                  </span>
                </div>

                <div className="flex gap-[12px] items-center">
                  <p className="font-bold font-space-grotesk text-white text-[48px] sm:text-[98px]">
                    7
                  </p>
                  <span className="font-bold font-space-grotesk text-[16px] w-[90px] sm:text-[28px] sm:w-[150px]">
                    Project completed
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href="/about"
                  className="flex gap-[6px] group items-center"
                >
                  <p className="duration-[300ms] font-semibold group-hover:text-secondary text-[16px] transition sm:text-[22px]">
                    More About Me
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    className="duration-[300ms] group-hover:stroke-secondary group-hover:translate-x-2 transition"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`pt-[90px] sm:pt-[120px] ${HomeStyle.borderAbout}`}
          ></div>
        </div>
      </section>

      <section className="bg-dark80 py-[90px] sm:py-[120px]">
        <div className="container">
          <h1 className="font-semibold text-[26px] text-white sm:text-[48px]">
            MY SKILL
          </h1>

          <h2 className="font-space-grotesk font-bold mt-[30px] text-[22px] text-white sm:mt-[60px] sm:text-[42px]">
            My extensive list of skills
          </h2>
          <div className={HomeStyle.skills}>
            <Marquee>
              {skills.map((item) => (
                <Image
                  key={item.name}
                  src={item.pathname}
                  alt={`Logo ${item.name}`}
                  height={72}
                  width={72}
                  className="brightness-75 duration-300 grayscale h-[48px] hover:grayscale-0 ml-[30px] transition w-[48px] sm:h-[72px] sm:ml-[60px] sm:w-[72px]"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className={`py-[120px] ${HomeStyle.portfolio}`}>
        <div className="container">
          <h1 className="font-semibold text-white text-[26px] sm:text-[48px]">
            MY PORTFOLIO
          </h1>
          <div className="flex items-center justify-between mt-[30px] sm:mt-[60px]">
            <h2 className="font-space-grotesk font-bold text-white text-[22px] sm:text-[42px]">
              Take a look at the projects I’ve done
            </h2>

            <Link
              href="/portfolio"
              className="group hidden lg:flex lg:gap-[6px] lg:items-center"
            >
              <p className="duration-[300ms] font-semibold group-hover:text-secondary text-[16px] transition whitespace-nowrap sm:text-[22px]">
                Browse all projects
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                className="duration-[300ms] group-hover:stroke-secondary group-hover:translate-x-2 transition"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div
            className={`gap-[25px] grid grid-cols-1 justify-items-center mt-[60px] sm:gap-[45px] lg:gap-[16px] lg:justify-items-start	 lg:grid-cols-3 lg:justify-between`}
          >
            {portfolio.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                className={`group ${HomeStyle.projectCard}`}
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
    </main>
  );
}
