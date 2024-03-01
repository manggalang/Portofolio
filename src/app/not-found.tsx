import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center min-h-screen">
        <div className="flex gap-[30px] items-end">
          <h1 className="font-bold font-space-grotesk h-[130px] text-white text-[120px]">
            404
          </h1>
          <h2 className="font-semibold text-grey text-[20px]">
            Error Not Found.
            <br />
            Could not find requested resource
          </h2>
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
