import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ConsultaBanner from "@/components/ConsultaBanner"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "meudoutor.digital",
  description: "High-quality healthcare services for our patients",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <main className="flex-grow bg-[#161616]">{children}</main>
          <ConsultaBanner />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

