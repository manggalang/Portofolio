"use client";
import React, { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const { scrollYProgress } = useScroll();

  const [openNav, setOpenNav] = useState(false);
  const size = useWindowSize();

  const handleOpen = () => {
    if (size.width < 768) {
      setOpenNav(!openNav);
    }
  };

  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
  ];

  return (
    <header>
      <motion.div
        className="bg-grey h-[2px] fixed left-0 mt-[83px] origin-[0%] right-0 top-0 z-50 sm:mt-[90px]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="backdrop-blur	 bg-[rgb(27_31_36_/_0.90)] fixed left-0 py-[16px] top-0 w-full z-50">
        <div className="bg-transparent container flex items-center justify-between py-[12px]">
          <Link href="/">
            <Image
              src={`/logo-white.svg`}
              alt=""
              height={58}
              width={55.98}
              className="h-[44px] relative w-auto z-[51] sm:h-[58px]"
            />
          </Link>

          <nav
            className={`bg-dark80 duration-300 fixed flex flex-col gap-[30px] h-[100dvh] items-center justify-center left-0 top-0 scale-0 transition w-screen md:bg-transparent md:flex-row md:h-auto md:justify-start md:scale-100 md:static md:rounded-none md:w-auto ${
              openNav ? "!scale-100" : ""
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={handleOpen}
                className={`duration-[300ms] font-semibold text-white text-[22px] transition hover:text-secondary md:text-[16px] ${
                  pathName === item.link && " !text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={handleOpen}
              className="bg-primary duration-300 font-semibold py-[14px] px-[22px] rounded-[10px] text-white text-[22px] transition hover:opacity-80 md:text-[16px]"
            >
              Contact Me
            </Link>
          </nav>

          <div className="block md:hidden">
            <button className="relative group" onClick={handleOpen}>
              <div
                className={`relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-dark80 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${
                  !openNav ? "" : "ring-4"
                }`}
              >
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ${
                    !openNav ? "" : "-rotate-[45deg]"
                  }`}
                >
                  <div
                    className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 delay-75 ${
                      !openNav
                        ? ""
                        : "h-[1px] origin-right -translate-y-[1px] -rotate-90"
                    }`}
                  ></div>
                  <div className="bg-white h-[1px] rounded"></div>
                  <div
                    className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                      !openNav ? "" : "h-[1px] -rotate-90 translate-y-[1px]"
                    }`}
                  ></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
