
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import ScrollEffects from '@/components/ScrollEffects'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Indonesian Liberty Society — Merdeka, Bebas, Sejahtera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${plusJakarta.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollEffects /> {/* Komponen efek scroll */}
      </body>
    </html>
  )
}