import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CSPostHogProvider } from "@/components/posthog-provider"
import { cn } from "@workspace/ui/lib/utils"
import PillNav from "@/components/elements/pill-nav"
import Navbar from "@/components/elements/navbar"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontBebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable,
        fontBebasNeue.variable
      )}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CSPostHogProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </CSPostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
