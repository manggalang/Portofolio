"use client";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import ContactStyle from "../../style/contact.module.css";
import RegulartButton from "@/components/regular-button";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const serverId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(serverId, templateId, form.current, publicKey)

        .then(
          (result) => {
            handleOpen();
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <main className={`pt-[150px] sm:pt-[180px] ${ContactStyle.main}`}>
      <section>
        <div className="pb-[120px] px-[24px] sm:pb-[90px] md:px-[48px] xl:max-w-[1024px] xl:mx-auto xl:px-0">
          <h1 className="font-semibold text-grey text-[16px] tracking-[6px] sm:text-[22px]">
            CONTACT
          </h1>
          <h2 className="font-space-grotesk font-bold mt-[12px] text-white text-[26px] sm:text-[48px] lg:text-[60px]">
            Let&apos;s talk about ur project
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[24px] mt-[30px] sm:mt-[60px]"
          >
            <div className="flex flex-col gap-[24px] justify-between sm:flex-row">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                id=""
                required
                className="bg-transparent border border-grey outline-none p-[12px] rounded-md text-white w-full sm:text-[14px] sm:placeholder:text-[14px]"
              />
              <input
                type="email"
                placeholder="Email"
                id=""
                name="user_email"
                required
                className="bg-transparent border border-grey outline-none p-[12px] rounded-md text-white w-full sm:text-[14px] sm:placeholder:text-[14px]"
              />
            </div>

            <div className="flex flex-col gap-[24px] justify-between sm:flex-row">
              <input
                type="tel"
                placeholder="Phone Number"
                id=""
                name="user_phone"
                required
                className="bg-transparent border border-grey outline-none p-[12px] rounded-md text-white w-full sm:text-[14px] sm:placeholder:text-[14px]"
              />
              <input
                type="text"
                placeholder="Project Name"
                id=""
                name="user_company"
                required
                className="bg-transparent border border-grey outline-none p-[12px] rounded-md text-white w-full sm:text-[14px] sm:placeholder:text-[14px]"
              />
            </div>

            <textarea
              name="user_message"
              cols={30}
              rows={10}
              placeholder="Message"
              id=""
              required
              className="bg-transparent border border-grey outline-none p-[12px] rounded-md text-white w-full sm:text-[14px] sm:placeholder:text-[14px]"
            />
            <RegulartButton type="button" src="" text="Submit" />
          </form>
        </div>
      </section>

      <dialog
        className={
          !open
            ? "hidden"
            : "backdrop-blur-md	bg-[#22272f20] fixed flex h-[100dvh] items-center justify-center p-[24px] top-2/4 -translate-y-2/4 w-screen z-50 lg:p-[120px]"
        }
      >
        <div className={ContactStyle.dialog}>
          <Image
            src="/icons/rocket.png"
            alt="rocket icons"
            height={200}
            width={200}
            className="h-[125px] w-[125px] sm:h-[200px] sm:w-[200px]"
          />
          <div>
            <h4 className="font-bold text-center text-dark80 text-[18px] sm:text-[22px]">
              Yoohoo!
              <br />
              Message Sent Successfully
            </h4>
            <p className="font-semibold mt-[15px] text-center text-[#676767] text-[14px] sm:text-[16px]">
              Thank you for sending the message.
              <br />
              Please wait until i reply
            </p>
          </div>

          <Link
            href="/"
            className="bg-primary font-semibold py-[14px] px-[22px] rounded-[10px] text-white"
          >
            Back to Home
          </Link>
        </div>
      </dialog>
    </main>
  );
}
