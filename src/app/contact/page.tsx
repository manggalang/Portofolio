"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import ContactStyle from "../../style/contact.module.css";

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
    <main className="min-h-full">
      <section>
        <div className="max-w-[1024px] mx-auto pt-[180px]">
          <h1 className="font-semibold text-grey text-[22px] tracking-[6px]">
            CONTACT
          </h1>
          <h2 className="font-space-grotesk font-bold mt-[12px] text-white text-[60px]">
            Let&apos;s talk about ur project
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[24px] mt-[60px]"
          >
            <div className="flex gap-[24px] justify-between">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                id=""
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
              <input
                type="email"
                placeholder="Work Email"
                id=""
                name="user_email"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
            </div>

            <div className="flex gap-[24px] justify-between">
              <input
                type="tel"
                placeholder="Phone Number"
                id=""
                name="user_phone"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
              <input
                type="text"
                placeholder="Company Name"
                id=""
                name="user_company"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
            </div>

            <textarea
              name="user_message"
              cols={30}
              rows={10}
              placeholder="Message"
              id=""
              required
              className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
            />
            <button
              type="submit"
              className="bg-primary font-semibold py-[14px] px-[22px] rounded-[10px]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <dialog
        className={
          !open
            ? "hidden"
            : "backdrop-blur-md	bg-[#22272f20] fixed flex h-screen items-center justify-center p-[120px] top-2/4 -translate-y-2/4 w-screen z-50"
        }
      >
        <div className={ContactStyle.dialog}>
          <Image
            src="/icons/rocket.png"
            alt="rocket icons"
            height={200}
            width={200}
          />
          <div>
            <h4 className="font-bold text-center text-dark80 text-[22px]">
              Yoohoo!
              <br />
              Message Sent Successfully
            </h4>
            <p className="font-semibold mt-[15px] text-center text-[#676767]">
              Thank you for sending the message.
              <br />
              Please wait I will reply
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
