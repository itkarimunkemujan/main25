"use client"

import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { usePostHog } from "posthog-js/react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
  })
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const ph = usePostHog()

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname
      const search = searchParams.toString()
      if (search) {
        url += `?${search}`
      }
      ph.capture("$pageview", { $current_url: url })
    }
  }, [pathname, searchParams, ph])

  return null
}

export function CSPostHogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogProvider>
  )
}
