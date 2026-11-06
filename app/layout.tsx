import type { Metadata, Viewport } from "next"
import { APP_NAME } from "@/lib/brand"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"
import { MotionProvider } from "@/components/motion-provider"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Your GitHub stars, organized.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("stardash-more-color")==="1")document.documentElement.dataset.moreColor="1"}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="trove-theme"
        >
          <I18nProvider>
            <MotionProvider>
              {children}
              <Toaster richColors position="bottom-right" />
            </MotionProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
