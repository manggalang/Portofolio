import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center min-h-[100dvh]">
        <div className="flex flex-col gap-[30px] items-center sm:flex-row sm:items-end">
          <h1 className="not-found-page font-bold font-space-grotesk h-[130px] text-white text-[120px]">
            404
          </h1>

          <p className="font-semibold text-center text-grey text-[16px] sm:text-left sm:text-[20px]">
            Error Not Found.
            <br />I don&apos;t know, what were you looking for?
          </p>
        </div>

        <Link
          href="/"
          className="bg-primary font-semibold mt-[60px] py-[14px] px-[22px] rounded-[10px] text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
