"use client"

import NumberFlow, { NumberFlowGroup } from "@number-flow/react"
import { useEffect, useState } from "react"

const LAUNCH_AT_MS = Date.parse("2026-06-20T00:00:00+07:00")

function getParts(msLeft: number) {
  const s = Math.max(0, Math.floor(msLeft / 1000))
  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60
  return { days, hours, minutes, seconds }
}

export function ComingSoonCountdown() {
  const [remainingMs, setRemainingMs] = useState(() => LAUNCH_AT_MS - Date.now())

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemainingMs(LAUNCH_AT_MS - Date.now())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const expired = remainingMs <= 0
  const parts = getParts(Math.max(0, remainingMs))

  if (expired) {
    return (
      <div className="w-full min-w-0 max-w-md text-end sm:max-w-lg">
        <p className="text-pretty text-[clamp(0.8125rem,2.8vw,1rem)] leading-relaxed text-white/90">
          Perjalanan baru sudah dimulai. Kami berlayar kembali — selamat datang di
          perairan berikutnya.
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col items-end justify-center text-white">
      {/* Skiper-style block: fluid font size so one line fits xs→2xl; scroll fallback on ultra-narrow */}
      <div className="w-full max-w-[100vw] overflow-x-auto overflow-y-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="inline-block min-w-min max-w-none px-1">
          <div
            className="font-bebas-neue tracking-tight text-white [font-size:clamp(2rem,calc(8vw+0.75rem),6.5rem)] sm:[font-size:clamp(2.5rem,calc(7vw+1rem),7.5rem)] lg:[font-size:clamp(3.25rem,calc(6vw+1.25rem),9rem)] xl:[font-size:clamp(3.5rem,calc(5.5vw+1.5rem),10rem)]"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            <NumberFlowGroup>
              <NumberFlow value={parts.days} suffix=":" />
              <NumberFlow value={parts.hours} suffix=":" />
              <NumberFlow value={parts.minutes} suffix=":" />
              <NumberFlow value={parts.seconds} />
            </NumberFlowGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
