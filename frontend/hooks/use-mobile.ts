import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * @brief Hook that detects if the current viewport is a mobile device.
 * 
 * Uses a media query (max-width: 767px) to determine mobile status.
 * 
 * @returns Boolean indicating if the screen is mobile-sized
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    mql.addEventListener("change", onChange)
    // Cập nhật giá trị ban đầu sau render để tránh lỗi hydration
    if (isMobile === undefined) {
      const frame = requestAnimationFrame(() => {
        setIsMobile(mql.matches)
      })
      return () => {
        mql.removeEventListener("change", onChange)
        cancelAnimationFrame(frame)
      }
    }
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return !!isMobile
}
