import ContactSection from "@/components/contact-section";
import PortfolioCard from "@/components/portfolio-card";
import PortfolioStyle from "../../style/portfolio.module.css";
import DataPortfolio from "../../utils/portfolio.json";

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
            {DataPortfolio.map((item) => (
              <PortfolioCard
                key={item.name}
                href={item.link}
                target="_blank"
                name={item.name}
                description={item.description}
                imgSrc={item.image}
                tags={item.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* This is the animation glass morphism in portfolio page */}
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
