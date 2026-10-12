import { Anthem } from '@/components/anthem'
import { AudioProvider } from '@/components/audio-provider'
import { Contact } from '@/components/contact'
import { Crew } from '@/components/crew'
import { Hero } from '@/components/hero'
import { LoadingScreen } from '@/components/loading-screen'
import { Marquee } from '@/components/marquee'
import { Mission } from '@/components/mission'
import { MusicPlayer } from '@/components/music-player'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Terminal } from '@/components/terminal'

export default function Page() {
  return (
    <AudioProvider>
      <LoadingScreen />
      <SiteHeader />
      <main>
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
