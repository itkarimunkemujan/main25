"use client"
import { ImagePlayer } from "@/components/image-player"
import Image from "next/image"

const IMAGES = [
  "/images/bg/1.png",
  "/images/bg/2.png",
  "/images/bg/3.png",
  "/images/bg/4.png",
  "/images/bg/5.png",
  "/images/bg/6.png",
]

export function BgImagePlayer() {
  return (
    <ImagePlayer
      images={IMAGES}
      interval={500}
      renderImage={(src) => (
        <Image
          src={src}
          fill
          className="object-cover"
          alt="showcase"
          loading="eager"
          sizes="100vw"
        />
      )}
    />
  )
}
