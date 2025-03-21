
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hemanth varma",
  description: "Experienced Frontend Developer specializing in modern web technologies and elegant solutions.",
  keywords: ["Frontend Developerr", "React", "Next.js", "html", "TypeScript", "Web Development"],
  authors: [{ name: "Hemanth varma" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
          {children}
      </body>
    </html>
  )
}

