import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'RichBoyZ — We Protect. We Build. We Secure.',
  description:
    'RichBoyZ is a crew of programmers protecting people from blackmail, keeping Discord communities fair, and building and securing websites.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
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
      <body className="is-loading font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
