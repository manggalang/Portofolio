import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-dark90 border-t border-grey mt-[90px] sm:mt-[120px]">
      <div className="flex items-start justify-between">
        <div className="border-b border-grey container">
          <div className="flex flex-col gap-[60px] items-start justify-between py-[90px] sm:py-[120px] lg:flex-row lg:gap-0">
            <div className="flex gap-[15px] items-center sm:gap-[30px]">
              <Image
                src="/image/profile-picture.jpg"
                alt="Mang Galang Photo"
                height={120}
                width={120}
                className="h-[90px] rounded-full w-[90px] sm:h-[120px] sm:w-[120px]"
              />
              <div>
                <p className="font-space-grotesk font-bold text-white text-[26px] sm:text-[36px]">
                  Galang Permana
                </p>
                <p className="font-semibold text-grey text-[16px] sm:text-[18px]">
                  Web Developer Freelance
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-space-grotesk font-bold text-white text-[26px] md:text-[36px] lg:text-[48px]">
                Let&apos;s work together
              </h1>
              <div className="flex flex-col gap-[32px] mt-[15px] md:flex-row md:gap-16 lg:flex-col [@media(min-width:1440px)]:flex-row">
                <div>
                  <p className="font-semibold font-space-grotesk text-grey text-[14px] sm:text-[18px]">
                    EMAIL:
                  </p>
                  <Link
                    href="#"
                    className="border-b-[3px] border-grey font-semibold font-space-grotesk mt-[6px] pb-1 text-white text-[16px] sm:text-[22px]"
                  >
                    galangpastibisa@gmail.com
                  </Link>
                </div>
                <div>
                  <p className="font-semibold font-space-grotesk text-grey text-[14px] sm:text-[18px]">
                    CALL ME:{" "}
                  </p>
                  <Link
                    href="#"
                    className="border-b-[3px] border-grey font-semibold font-space-grotesk mt-[6px] pb-1 text-white text-[16px] sm:text-[22px]"
                  >
                    (+62) 8582 9183 890
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between sm:flex-row">
        <nav className="flex gap-[30px] items-center py-[30px]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="font-space-grotesk text-center transition text-white text-[16px] lg:text-[20px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <p className="font-space-grotesk pb-[30px] text-center text-white text-[16px] sm:pb-0 lg:text-[20px]">
          Galang Permana
          <span className="text-grey"> © 2024. All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
