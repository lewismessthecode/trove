import type { MetadataRoute } from "next"
import { APP_NAME } from "@/lib/brand"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: "Your GitHub stars, organized.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
