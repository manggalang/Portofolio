import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-grey mt-[120px]">
      <div className="border-b border-grey container flex items-start justify-between py-[120px]">
        <div className="container flex justify-between">
          <div className="flex gap-[30px] items-center">
            <Image
              src="/image/profile-picture.jpg"
              alt="Mang Galang Photo"
              height={120}
              width={120}
              className="rounded-full"
            />
            <div className="">
              <p className="font-space-grotesk font-bold text-white text-[36px]">
                Galang Permana
              </p>
              <p className="font-semibold text-grey text-[18px]">
                Web Developer Freelance
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-space-grotesk font-bold text-white text-[48px]">
              Let&apos;s work together
            </h1>
            <div className="flex gap-16 mt-[15px]">
              <div>
                <p className="font-semibold font-space-grotesk text-grey text-[18px]">
                  EMAIL:
                </p>
                <Link
                  href="#"
                  className="border-b-[3px] border-grey font-semibold font-space-grotesk mt-[6px] pb-1 text-[22px]"
                >
                  galangpastibisa@gmail.com
                </Link>
              </div>
              <div>
                <p className="font-semibold font-space-grotesk text-grey text-[18px]">
                  CALL ME:{" "}
                </p>
                <Link
                  href="#"
                  className="border-b-[3px] border-grey font-semibold font-space-grotesk mt-[6px] pb-1 text-[22px]"
                >
                  (+62) 8582 9183 890
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between py-[30px]">
        <nav className="flex gap-[30px] items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="font-space-grotesk transition text-white text-[20px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <p className="font-space-grotesk text-white text-[20px]">
          Mang Galang
          <span className="text-grey"> © 2024. All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
