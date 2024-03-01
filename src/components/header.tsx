import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
];

export default function Header() {
  return (
    <header className="backdrop-blur	 bg-[rgb(27_31_36_/_0.75)] fixed left-0 top-0 w-full z-50">
      <div className="bg-transparent container flex items-center justify-between py-[12px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt=""
            height={58}
            width={58}
            className="h-[58px] w-auto"
          />
        </Link>

        <nav className="flex gap-[30px] items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="duration-[300ms] font-semibold transition hover:drop-shadow-[0px_0px_12px_#075FE4]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-primary color-white font-semibold py-[14px] px-[22px] rounded-[10px]"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
