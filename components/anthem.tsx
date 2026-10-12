'use client'

import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatTime, useAudio } from './audio-provider'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const BARS = Array.from({ length: 32 }, (_, i) => ({
  delay: `${((i * 37) % 100) / 100}s`,
  duration: `${0.7 + ((i * 53) % 60) / 100}s`,
}))

export function Anthem() {
  const { playing, toggle, currentTime, duration } = useAudio()
  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <section id="anthem" className="relative overflow-hidden border-y border-border bg-card py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="group relative aspect-square overflow-hidden border border-border">
            <Image
              src="/images/angel.webp"
              alt="Glitched marble angel statue lit in red, artwork for the RichBoyZ anthem"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale-[30%] transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="scanlines absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{playing ? 'Now playing' : 'Paused'}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading index="04" label="Anthem" title="Angel." />
          <Reveal delay={150}>
            <p className="mt-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">Massive Attack — Mezzanine (1998)</p>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Dark, slow, and heavy before it hits. That&apos;s how we move. Every operation starts with this track on repeat.
            </p>

            <div className="mt-10 flex h-24 items-end gap-1" aria-hidden="true">
              {BARS.map((bar, i) => (
                <span
                  key={i}
                  className={cn('animate-eq w-full bg-primary', !playing && '[animation-play-state:paused]')}
                  style={{ height: '100%', animationDelay: bar.delay, animationDuration: bar.duration, opacity: 0.4 + (i % 5) * 0.15 }}
                />
              ))}
            </div>

            <div className="mt-4 h-px w-full bg-border">
              <div className="h-px bg-primary transition-[width] duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-2 flex justify-between font-mono text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <button
              type="button"
              onClick={toggle}
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              {playing ? <Pause className="size-4 fill-current" aria-hidden="true" /> : <Play className="size-4 fill-current" aria-hidden="true" />}
              {playing ? 'Pause Angel' : 'Play Angel'}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
