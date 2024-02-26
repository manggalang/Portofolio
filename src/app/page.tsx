import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-[768px]">
        <div className="container flex items-center justify-between h-full">
          <div className="relative">
            <div className="absolute left-0 top-[50%] translate-y-[-50%] w-[550px]">
              <p className="font-bold text-grey text-[24px]">Hello, Welcome</p>
              <h1 className="font-space-grotesk font-bold text-white text-[60px]">
                I’m <span className="text-primary">Mang Galang</span>, a Web
                Developer
              </h1>
              <p className="font-bold text-grey text-[24px]">
                Based in Bali, Indonesia
              </p>

              <div className="flex gap-[16px] items-center mt-[45px]">
                <p className="font-bold text-white text-[24px]">Follow me :</p>
                <div className="flex gap-[16px] items-center">
                  <Link href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group"
                    >
                      <path
                        d="M9.60006 26.6667H4.26672V10.6667H9.60006V26.6667ZM6.93446 8.53335C5.45926 8.53335 4.26672 7.33761 4.26672 5.86561C4.26672 4.39361 5.46139 3.20001 6.93446 3.20001C8.40432 3.20001 9.60006 4.39575 9.60006 5.86561C9.60006 7.33761 8.40432 8.53335 6.93446 8.53335ZM28.8001 26.6667H23.6726V18.88C23.6726 17.0229 23.6374 14.6347 21.007 14.6347C18.3371 14.6347 17.9265 16.6571 17.9265 18.7456V26.6667H12.8001V10.6549H17.7217V12.8427H17.791C18.4758 11.584 20.1494 10.2571 22.6454 10.2571C27.8401 10.2571 28.8001 13.5733 28.8001 17.8848V26.6667Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group"
                    >
                      <path
                        d="M16 3C8.8205 3 3 8.8205 3 16C3 22.1385 7.256 27.28 12.9775 28.643C12.6815 28.5725 12.388 28.4935 12.1 28.4035V25.425C12.1 25.425 11.6125 25.5875 10.9625 25.5875C9.144 25.5875 8.3885 23.965 8.2 23.15C8.0855 22.6535 7.7865 22.183 7.4655 21.8955C7.082 21.5535 6.9025 21.5525 6.9 21.4355C6.895 21.19 7.229 21.2 7.3875 21.2C8.2 21.2 8.816 22.0645 9.102 22.5115C9.8105 23.615 10.571 23.8 10.9625 23.8C11.45 23.8 11.871 23.727 12.161 23.587C12.295 22.643 12.715 21.802 13.4 21.2C10.3515 20.5905 8.2 18.842 8.2 16C8.2 14.536 8.7875 13.1905 9.7665 12.104C9.6665 11.8205 9.5 11.247 9.5 10.3125C9.5 9.695 9.543 8.937 9.825 8.2C9.825 8.2 11.679 8.213 13.4275 9.869C14.2345 9.634 15.098 9.5 16 9.5C16.902 9.5 17.7655 9.634 18.5725 9.869C20.321 8.213 22.175 8.2 22.175 8.2C22.4585 8.937 22.5 9.695 22.5 10.3125C22.5 11.32 22.366 11.9075 22.284 12.161C23.233 13.2375 23.8 14.562 23.8 16C23.8 18.842 21.6485 20.5905 18.6 21.2C19.414 21.915 19.9 22.9565 19.9 24.125V28.4035C19.612 28.494 19.319 28.5725 19.0225 28.643C24.744 27.28 29 22.1385 29 16C29 8.8205 23.1795 3 16 3ZM16.9065 28.965C16.607 28.986 16.305 29 16 29C16.305 29 16.6065 28.9855 16.9065 28.965ZM16 29C15.695 29 15.393 28.986 15.0935 28.965C15.3935 28.9855 15.695 29 16 29ZM14.894 28.95C14.2855 28.8985 13.6885 28.8055 13.107 28.673C13.689 28.805 14.2855 28.8985 14.894 28.95Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                  <Link href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group"
                    >
                      <path
                        d="M27.0707 7.45601C26.6381 6.80257 26.0256 6.30273 25.2992 6.01217C23.7222 5.37985 22.3661 4.95745 21.1526 4.71937C20.3014 4.55297 19.4586 4.97153 19.0534 5.76001L18.9523 5.95713C18.0538 5.85793 17.0995 5.82465 16.0128 5.85217C14.8986 5.82529 13.9411 5.85793 13.0413 5.95713L12.9408 5.76001C12.5357 4.97153 11.6915 4.55361 10.8422 4.72001C9.62881 4.95745 8.27201 5.37985 6.69569 6.01281C5.96993 6.30337 5.35745 6.80257 4.92417 7.45665C1.90273 12.0205 0.718731 16.9434 1.30497 22.5075C1.32545 22.7027 1.43425 22.8775 1.60001 22.9818C3.92449 24.4474 5.93601 25.4509 7.93025 26.1408C8.76417 26.432 9.68897 26.1063 10.1811 25.3543L11.0586 24.0096C10.3597 23.7459 9.67745 23.4336 9.02337 23.0605C8.71681 22.8858 8.60993 22.4947 8.78465 22.1882C8.95937 21.8803 9.35041 21.7722 9.65761 21.9495C11.6039 23.0592 13.8042 23.6461 16.0205 23.6461C18.2368 23.6461 20.4371 23.0592 22.3834 21.9495C22.6899 21.7722 23.081 21.8803 23.2563 22.1882C23.431 22.4947 23.3242 22.8858 23.0176 23.0605C22.3418 23.4464 21.6352 23.7677 20.9114 24.0359L21.8144 25.3811C22.1862 25.9347 22.8 26.2496 23.4323 26.2496C23.6384 26.2496 23.8464 26.2157 24.0486 26.1466C26.0486 25.456 28.064 24.4512 30.3936 22.9824C30.5594 22.8781 30.6682 22.7027 30.6887 22.5082C31.2762 16.9434 30.0922 12.0199 27.0707 7.45601ZM11.9091 18.5491C10.6765 18.5491 9.66209 17.2506 9.66209 15.6723C9.66209 14.0941 10.6765 12.7955 11.9091 12.7955C13.1418 12.7955 14.1562 14.0941 14.1562 15.6723C14.1562 17.2506 13.1418 18.5491 11.9091 18.5491ZM20.2247 18.5325C19.0035 18.5325 17.9987 17.2263 17.9987 15.6384C17.9987 14.0506 19.0035 12.7443 20.2247 12.7443C21.4458 12.7443 22.4506 14.0506 22.4506 15.6384C22.4506 17.2263 21.4458 18.5325 20.2247 18.5325Z"
                        fill="white"
                        className="duration-[300ms] transition group-hover:fill-primary"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full relative shrink-0 w-[730px]">
            <Image
              src="/image/banner-image.png"
              alt="Galang Picture"
              width={730}
              height={650}
              className="absolute bottom-0 grayscale right-0 lg:h-[650px] lg:w-[730px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-dark80">
        <div className="container border-b border-white py-[120px]">
          <h1 className="font-semibold text-white text-[48px]">ABOUT ME</h1>

          <div className="flex items-center justify-between mt-[60px]">
            <div className="max-w-[448px]">
              <h2 className="font-space-grotesk font-bold text-white text-[42px]">
                I’ve been developing website since 2021
              </h2>
              <p className="mt-[20px] text-grey text-[18]">
                I am a Web Developer. Proficient in using JavaScript programming
                languages and frameworks such as React and Vue. I am very
                enthusiastic about technology, able to work under pressure,
                learn quickly and able to work in a team or individually
              </p>
            </div>

            <div>
              <div className="flex gap-[36px] items-center">
                <div className="flex gap-[12px] items-center">
                  <p className="font-bold font-space-grotesk text-white text-[98px]">
                    3
                  </p>
                  <span className="font-bold font-space-grotesk text-[28px] w-[150px]">
                    Years of experience
                  </span>
                </div>

                <div className="flex gap-[12px] items-center">
                  <p className="font-bold font-space-grotesk text-white text-[98px]">
                    9
                  </p>
                  <span className="font-bold font-space-grotesk text-[28px] w-[150px]">
                    Project completed
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <Link href="#" className="flex gap-[6px] group items-center">
                  <p className="text-[18px]">More About Me</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="duration-[300ms] group-hover:translate-x-2 transition"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark80 py-[120px]">
        <div className="container">
          <h1 className="font-semibold text-white text-[48px]">MY SKILL</h1>

          <h2 className="font-space-grotesk font-bold mt-[60px] text-white text-[42px]">
            My extensive list of skills
          </h2>
        </div>
      </section>
    </main>
  );
}
