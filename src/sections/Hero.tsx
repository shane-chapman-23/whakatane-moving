import { Box } from "@/components";
import { wmLogoPeach } from "@/assets/logos";

export default function Hero() {
  return (
    <section id="hero" className="mt-24 space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="font-montserrat text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl text-center xl:text-left ">
          Whakatane Moving.
        </h1>

        <p className="font-inter text-lg text-center xl:text-left leading-tight text-text sm:text-xl lg:text-2xl">
          Moving the <span className="font-bold">Eastern Bay of Plenty</span>
          <br />
          and beyond for <span className="font-bold">over a decade.</span>
        </p>
      </header>

      <section className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
        <Box className="max-w-3xl p-6 font-inter">
          <ul className="space-y-3 text-base leading-relaxed text-text">
            <li>Simple and fast booking</li>
            <li>WINZ approved</li>
            <li>
              Extra protection for bigger items and walls — no dents, no stress
            </li>
            <li>Affordable pricing with no hidden fees</li>
            <li>Local, friendly and reliable movers you can trust</li>
            <li>We even provide the boxes</li>
          </ul>
        </Box>

        <div className="flex xl:flex-col gap-4 xl:items-end">
          <Box className="flex aspect-square w-32 items-center justify-center p-4 sm:w-40 lg:w-48">
            <img
              src={wmLogoPeach}
              alt="Whakatane Moving logo"
              className="h-[80%] w-auto"
            />
          </Box>

          <button className="rounded-2xl max-h-25 min-w-50 w-full bg-cta px-8 py-4 font-inter text-lg font-bold text-bg sm:text-xl cursor-pointer">
            Let&apos;s Move
          </button>
        </div>
      </section>
    </section>
  );
}
