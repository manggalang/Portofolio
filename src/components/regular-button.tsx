import Link from "next/link";

interface Props {
  type: "button" | "link";
  src: string;
  style?: string;
  target?: "_blank";
  text: string;
  onClick?: () => void;
}

const RegulartButton = (props: Props) => {
  if (props.type === "link") {
    return (
      <Link
        href={props.src}
        target={props.target}
        onClick={props.onClick}
        className={`bg-primary duration-300 font-semibold py-[14px] px-[22px] rounded-[10px] text-white text-[22px] transition hover:opacity-80 md:text-[16px] ${props.style}`}
      >
        {props.text}
      </Link>
    );
  } else {
    return (
      <button
        type="submit"
        onClick={props.onClick}
        className={`bg-primary duration-300 font-semibold py-[14px] px-[22px] rounded-[10px] text-white text-[22px] transition hover:opacity-80 md:text-[16px] ${props.style}`}
      >
        {props.text}
      </button>
    );
  }
};

export default RegulartButton;
