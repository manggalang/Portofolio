import Link from "next/link";
import Image from "next/image";
import PortfolioStyle from "../style/portfolio.module.css";

interface Props {
  name: string;
  description: string;
  href: string;
  imgSrc: string;
  tags: string[];
  target?: "_blank";
}

const PortfolioCard = (props: Props) => {
  return (
    <Link
      href={props.href}
      target={props.target}
      className={`group ${PortfolioStyle.projectCard}`}
    >
      <div className="max-h-[200px] overflow-hidden relative rounded-t-[16px] w-full">
        <Image
          src={props.imgSrc}
          alt={`Web ${props.name}`}
          height={200}
          width={355.56}
          className="delay-300 duration-300 h-[200px] grayscale group-hover:grayscale-0 group-hover:scale-[1.05] object-cover transition w-full"
        />

        <div className="absolute flex gap-1 items-center left-[16px] bottom-[16px]">
          {props.tags.map((tag) => (
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
          {props.name}
        </p>

        <p className="mt-[8px] text-grey text-justify text-[14px] sm:text-[18px]">
          {props.description}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCard;
