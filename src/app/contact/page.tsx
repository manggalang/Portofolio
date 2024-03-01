export default function About() {
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
          <form className="flex flex-col gap-[24px] mt-[60px]">
            <div className="flex gap-[24px] justify-between">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
              <input
                type="email"
                placeholder="Work Email"
                name="email"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
            </div>

            <div className="flex gap-[24px] justify-between">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                required
                className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
              />
            </div>

            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              required
              className="bg-transparent border border-grey p-[12px] rounded-md text-white w-full"
            />
            <button
              type="submit"
              className="bg-primary color-white font-semibold py-[14px] px-[22px] rounded-[10px]"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
