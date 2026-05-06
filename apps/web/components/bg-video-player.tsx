"use client"

import { BgImagePlayer } from "@/components/bg-image-player"
import { useEffect, useMemo, useRef, useState } from "react"
import YouTube from "react-youtube"

const REVEAL_DELAY_MS = 5000

export function BgVideoPlayer() {
  const [ready, setReady] = useState(false)
  const [hasError, setHasError] = useState(false)
  const revealTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const videoId = process.env.NEXT_PUBLIC_BACKGROUND_VIDEO_ID ?? ""

  const opts = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        loop: 1,
        playlist: videoId,
        playsinline: 1,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
      },
    }),
    [videoId]
  )

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current)
      }
    }
  }, [])

  if (!videoId || hasError) {
    return <BgImagePlayer />
  }

  return (
    <div className="pointer-events-none relative h-full w-full overflow-hidden select-none">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={ready}
      >
        <BgImagePlayer />
      </div>

      <div
        className={`h-full w-full transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-black/45 to-transparent" />
        <YouTube
          videoId={videoId}
          opts={opts}
          iframeClassName="h-full w-full"
          className="absolute top-1/2 left-1/2 aspect-video max-h-full w-full -translate-x-1/2 -translate-y-1/2"
          onReady={(event) => {
            event.target.mute()
            // Hint preferred quality; YouTube can ignore it based on bandwidth/device.
            event.target.setPlaybackQuality?.("hd1080")
            event.target.playVideo()
            if (revealTimeoutRef.current) {
              clearTimeout(revealTimeoutRef.current)
            }
            revealTimeoutRef.current = setTimeout(() => {
              setReady(true)
            }, REVEAL_DELAY_MS)
          }}
          onError={() => {
            if (revealTimeoutRef.current) {
              clearTimeout(revealTimeoutRef.current)
            }
            setReady(true)
            setHasError(true)
          }}
        />
      </div>
    </div>
  )
}
