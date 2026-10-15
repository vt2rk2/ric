import { Anthem } from '@/components/anthem'
import { AudioProvider } from '@/components/audio-provider'
import { Contact } from '@/components/contact'
import { Crew } from '@/components/crew'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Mission } from '@/components/mission'
import { MusicPlayer } from '@/components/music-player'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Terminal } from '@/components/terminal'

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://richboys.life/#organization',
        name: 'RichBoyZ',
        url: 'https://richboys.life',
        description:
          'A programming and online safety crew offering website development, security audits, Discord community reviews, and confidential guidance for people facing blackmail.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://richboys.life/#website',
        name: 'RichBoyZ',
        url: 'https://richboys.life',
        publisher: {
          '@id': 'https://richboys.life/#organization',
        },
      },
    ],
  }

  return (
    <AudioProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[101] focus:not-sr-only focus:bg-background focus:p-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Mission />
        <Crew />
        <Services />
        <Anthem />
        <Terminal />
        <Contact />
      </main>
      <SiteFooter />
      <MusicPlayer />
    </AudioProvider>
  )
}
