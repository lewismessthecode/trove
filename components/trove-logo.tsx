import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Product mark. The file is the final artwork: a white star on black,
 * already cropped by the right and bottom edges. Do not mask, recolor, or crop it.
 */
export function TroveLogo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/trove-logo-1024.png"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 ring-1 ring-border", className)}
    />
  )
}
