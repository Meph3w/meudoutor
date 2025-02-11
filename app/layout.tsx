import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ConsultaBanner from "../components/ConsultaBanner"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meu Doutor Digital",
  description: "Saúde de alta qualidade na palma da sua mão. Teleconsultas médicas para todo o Brasil.",
  icons: {
    icon: "/favicon.png", // Configuração no metadata
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <!-- Google Tag Manager -->
              <script>
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'}); 
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; 
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WV77RWCV');
              </script>
              <!-- End Google Tag Manager -->
            `,
          }}
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Adicionar o código GTM no início do <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV77RWCV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        
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
