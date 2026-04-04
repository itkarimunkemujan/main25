"use client"

import { useState, useEffect, useRef } from "react"
import { Map, MapControls, type MapRef } from "@/components/ui/map"

const styles = {
  default: undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
}

type StyleKey = keyof typeof styles

export function CustomStyleExample() {
  const mapRef = useRef<MapRef>(null)
  const [style, setStyle] = useState<StyleKey>("openstreetmap")
  const selectedStyle = styles[style]
  const is3D = style === "openstreetmap3d"

  useEffect(() => {
    mapRef.current?.easeTo({ pitch: is3D ? 60 : 0, duration: 500 })
  }, [is3D])

  return (
    <div className="relative h-[420px] overflow-hidden rounded-md">
      <Map
        ref={mapRef}
        center={[110.4583, -5.8281]}
        zoom={11}
        styles={
          selectedStyle
            ? { light: selectedStyle, dark: selectedStyle }
            : undefined
        }
      >
        <MapControls
          position="bottom-right"
          showZoom
          // showCompass
          // showLocate
          showFullscreen
        />
      </Map>
      <div className="absolute top-2 right-2 z-10">
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as StyleKey)}
          className="rounded-md border bg-background px-2 py-1 text-sm text-foreground shadow"
        >
          <option value="default">Default (Carto)</option>
          <option value="openstreetmap">OpenStreetMap</option>
          <option value="openstreetmap3d">OpenStreetMap 3D</option>
        </select>
      </div>
    </div>
  )
}
