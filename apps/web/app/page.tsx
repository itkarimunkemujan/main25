import { ComingSoonCountdown } from "@/components/coming-soon-countdown"
import { BgImagePlayer } from "@/components/bg-image-player"
import { RiInstagramLine, RiTiktokLine } from "@remixicon/react"
import type { Metadata } from "next"
import Image from "next/image"

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
    <div className="container mx-auto grid w-full grid-cols-1 items-start justify-center gap-10 px-4 pt-8 sm:py-24">
      <div className="flex flex-col items-center justify-between">
        <header className="flex flex-col items-center gap-4 *:select-none">
          <Image
            src="/images/logo/logo tim kkn.webp"
            alt="Logo Tim KKN"
            width={368}
            height={971}
            className="mb-4 h-20 w-fit invert sm:h-32 dark:invert-0"
          />
          <h1 className="text-center font-display text-[30vw] leading-[0.5] tracking-tight text-primary sm:text-[20vw] lg:text-[10vw] dark:text-white">
            Karimun Kemujan
          </h1>
          <p className="mt-3 max-w-prose text-center text-[clamp(0.9375rem,2.6vw,1.125rem)] leading-relaxed text-pretty sm:mt-4 sm:text-lg md:mt-5 md:text-xl dark:text-white/90">
            Kami akan segera berlayar kembali.
            <br /> Persiapkan diri — petualangan baru menanti di cakrawala.
          </p>
          <p className="mt-2 text-center text-[clamp(0.8125rem,2.2vw,1rem)] sm:mt-3 dark:text-white/75">
            Sampai jumpa di perairan baru,{" "}
            <time dateTime="2026-06-20">20 Juni 2026</time>.<br /> Tim KKN-PPM
            UGM Karimun Kemujan 2026
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/karimunkemujan"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@karimunkemujan2026"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTiktokLine className="h-6 w-6" />
            </a>
          </div>
        </header>
      </div>

      {/*<div className="mt-auto flex w-full min-w-0 flex-col gap-6 pt-10 sm:gap-8 sm:pt-12 md:gap-10 md:pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <ComingSoonCountdown />
          </div>

          <footer className="max-w-prose shrink text-start text-[clamp(0.6875rem,2vw,0.8125rem)] leading-relaxed text-white/60 sm:max-w-xs md:max-w-sm">
            <p>Tim KKN-PPM UGM Karimun Kemujan 2026</p>
          </footer>
        </div>*/}

      <div className="center relative flex aspect-video w-full items-center justify-center rounded p-3 lg:aspect-auto lg:min-h-[650px] xl:min-h-[800px]">
        <div className="absolute inset-0 -z-10">
          <BgImagePlayer />
        </div>
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div>
          <ComingSoonCountdown />
        </div>
      </div>
    </div>
  )
}
