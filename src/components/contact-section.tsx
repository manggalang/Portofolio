import Link from "next/link";
import ContactStyle from "../style/contact.module.css";

export default function ContactSection() {
  return (
    <section className="pb-[90px] sm:pb-[120px]">
      <div className="container">
        <div className={ContactStyle.contactCard}>
          <p className="font-semibold text-center text-grey text-[20px] lg:text-[24px]">
            CONTACT
          </p>
          <h2 className="font-space-grotesk font-bold mt-[30px] mx-auto text-center text-white text-[26px] w-[250px] sm:w-[320px] md:text-[36px] lg:text-[48px] lg:w-[710px]">
            Let’s Make ur Business Bigger! Get in Touch
          </h2>
          <Link href="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              className="animate-bounce bg-primary duration-[300ms] h-[48px] mt-[30px] mx-auto p-3 rounded-full transition w-[48px] hover:opacity-[0.8] lg:h-[75px] lg:p-4 lg:w-[75px]"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
