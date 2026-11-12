import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Product mark. The file is the star artwork with transparent rounded corners.
 */
export function TroveLogo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/trove-logo-1024.png"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 rounded-[22%]", className)}
    />
  )
}
