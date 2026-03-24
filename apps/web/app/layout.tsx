import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

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
        <link
          href="https://fonts.googleapis.com/css2?family=Reikna&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
