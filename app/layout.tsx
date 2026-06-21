
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
  metadataBase: new URL('https://indoliberty.site'),
  title: {
    default: 'Indonesian Liberty Society — Merdeka, Bebas, Sejahtera',
    template: '%s | Indonesian Liberty Society',
  },
  description: 'Komunitas pemikiran klasik liberal dan libertarian di Indonesia. Mempromosikan kebebasan individu, pasar bebas, pemerintahan terbatas, dan supremasi hukum untuk mewujudkan Indonesia yang merdeka, bebas, dan sejahtera.',
  keywords: [
    'Indonesian Liberty Society',
    'ILS',
    'libertarian Indonesia',
    'klasik liberal Indonesia',
    'kebebasan individu',
    'pasar bebas',
    'pemerintahan terbatas',
    'komunitas libertarian indonesia',
    'ekonomi pasar',
    'hak individu'
  ],
  authors: [{ name: 'Indonesian Liberty Society', url: 'https://indoliberty.site' }],
  creator: 'Indonesian Liberty Society',
  publisher: 'Indonesian Liberty Society',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://indoliberty.site',
    title: 'Indonesian Liberty Society — Merdeka, Bebas, Sejahtera',
    description: 'Komunitas pemikiran klasik liberal dan libertarian di Indonesia. Mempromosikan kebebasan individu, pasar bebas, pemerintahan terbatas, dan supremasi hukum.',
    siteName: 'Indonesian Liberty Society',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Indonesian Liberty Society Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Indonesian Liberty Society — Merdeka, Bebas, Sejahtera',
    description: 'Komunitas pemikiran klasik liberal dan libertarian di Indonesia. Mempromosikan kebebasan individu, pasar bebas, pemerintahan terbatas, dan supremasi hukum.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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