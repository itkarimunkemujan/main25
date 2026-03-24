import { ComingSoonCountdown } from "@/components/coming-soon-countdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Segera hadir — Karimun Kemujan",
  description:
    "Kami sedang menyiapkan sesuatu yang istimewa. Sampai jumpa di perairan baru pada 20 Juni 2026.",
  openGraph: {
    title: "Segera hadir — Karimun Kemujan",
    description:
      "Kami akan segera berlayar kembali. Hitung mundur menuju 20 Juni 2026.",
  },
}

export default function Page() {
  return (
    <div className="container mx-auto grid max-h-[70rem] w-full grid-cols-1 items-center justify-center gap-10 pt-24 md:h-screen lg:grid-cols-2 lg:pt-0">
      <header className="flex flex-col gap-4">
        <h1 className="font-display text-[10rem] leading-[0.5] tracking-tight dark:text-white">
          Karimun Kemujan
        </h1>
        <p className="mt-3 max-w-prose text-[clamp(0.9375rem,2.6vw,1.125rem)] leading-relaxed text-pretty sm:mt-4 sm:text-lg md:mt-5 md:text-xl dark:text-white/90">
          Kami akan segera berlayar kembali.
          <br /> Persiapkan diri — petualangan baru menanti di cakrawala.
        </p>
        <p className="mt-2 text-[clamp(0.8125rem,2.2vw,1rem)] sm:mt-3 dark:text-white/75">
          Sampai jumpa di perairan baru,{" "}
          <time dateTime="2026-06-20">20 Juni 2026</time>.
        </p>
      </header>

      {/*<div className="mt-auto flex w-full min-w-0 flex-col gap-6 pt-10 sm:gap-8 sm:pt-12 md:gap-10 md:pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <ComingSoonCountdown />
          </div>

          <footer className="max-w-prose shrink text-start text-[clamp(0.6875rem,2vw,0.8125rem)] leading-relaxed text-white/60 sm:max-w-xs md:max-w-sm">
            <p>Tim KKN-PPM UGM Karimun Kemujan 2026</p>
          </footer>
        </div>*/}

      <div className="relative flex w-full items-center justify-center rounded bg-zinc-200 bg-[url('/images/bg/sasa.png')] object-cover p-3 lg:min-h-[650px] xl:min-h-[800px]">
        <div
          className="absolute inset-0 bg-linear-to-br from-black via-black/50 to-black"
          aria-hidden
        />
        <div>
          <ComingSoonCountdown />
        </div>
      </div>
    </div>
  )
}
