"use client"

import { useState, useEffect } from "react"
import PillNav from "./pill-nav"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const navProps = {
    logo: "/images/logo/kkn-logo-white.svg",
    logoAlt: "Karimun Kemujan",
    items: [{ label: "2025", href: "https://2025.karimunkemujan.com" }],
    activeHref: "/",
    className: "",
    ease: "power2.easeOut",
    baseColor: isDark ? "#ffffff" : "oklch(0.511 0.096 186.391)",
    pillColor: isDark ? "#000000" : "#ffffff",
    hoveredPillTextColor: isDark ? "#000000" : "#ffffff",
    pillTextColor: isDark ? "#ffffff" : "#000000",
    theme: (isDark ? "dark" : "light") as "light" | "dark",
    initialLoadAnimation: true,
  }

  return (
    <nav className="fixed top-3 z-50 flex w-full items-center justify-center">
      <PillNav {...navProps} />
    </nav>
  )
}
