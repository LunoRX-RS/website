import { useEffect, useState } from "react"

import { SmoothCursor } from "@/components/ui/smooth-cursor"

function Arrow() {
  return (
    <svg width="26" height="28" viewBox="0 0 50 54" fill="none" aria-hidden="true">
      <path
        d="M42.7 41.1 27.5 6.8c-.8-1.8-3.3-1.8-4.1 0L7.6 41.1c-.8 1.8.9 3.8 2.7 3.1l13.6-4.7c.7-.2 1.4-.2 2.1 0l13.7 4.7c1.8.7 3.5-1.3 3-3.1Z"
        className="fill-foreground stroke-canvas"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Replaces the native mouse pointer on fine pointers. Reduced-motion users keep the native one. */
export default function SiteCursor() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    // Follow the preference live; turning reduced motion on unmounts the cursor and restores the native one.
    const mq = matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setOn(!mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return on ? <SmoothCursor cursor={<Arrow />} /> : null
}
