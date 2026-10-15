import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  metadataBase: new URL('https://richboys.life'),
  title: 'RichBoyZ | Website Development, Security & Online Safety',
  alternates: {
    canonical: '/',
  },
  description:
    'RichBoyZ is a programming and online safety crew offering website development, security audits, Discord community reviews, and confidential guidance for people facing blackmail.',
  keywords: [
    'RichBoyZ',
    'website development',
    'website security',
    'security audits',
    'Discord community safety',
    'blackmail support',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RichBoyZ',
    title: 'RichBoyZ | Website Development, Security & Online Safety',
    description:
      'Website development, security audits, Discord community reviews, and confidential online safety guidance from the RichBoyZ crew.',
    url: 'https://richboys.life',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RichBoyZ — We protect. We build. We secure.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RichBoyZ | Website Development, Security & Online Safety',
    description:
      'Website development, security audits, Discord community reviews, and confidential online safety guidance from the RichBoyZ crew.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.VERCEL_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
