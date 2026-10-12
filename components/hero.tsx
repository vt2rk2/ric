'use client'

import dynamic from 'next/dynamic'
import { ArrowDown } from 'lucide-react'
import { ScrambleText } from './scramble-text'

const HeroScene = dynamic(() => import('./hero-scene'), { ssr: false })

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden="true" />
      <div className="absolute inset-0 md:left-1/3" aria-hidden="true">
        <HeroScene />
      </div>
      <div className="scanlines absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          <ScrambleText text="System online // richboys" delay={3600} />
        </p>

        <h1
          className="glitch max-w-4xl text-balance text-6xl font-bold leading-[0.9] tracking-tighter sm:text-8xl lg:text-9xl"
          data-text="RichBoyZ"
        >
          RichBoyZ
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          We protect people from blackmail, keep Discord communities fair, and build and secure the web.{' '}
          <span className="text-foreground">Programmers by trade. Guardians by choice.</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#crew"
            className="group relative overflow-hidden bg-primary px-6 py-3 font-mono text-sm uppercase tracking-widest text-primary-foreground"
          >
            <span className="relative z-10">Meet the crew</span>
            <span className="absolute inset-0 -translate-x-full bg-foreground transition-transform duration-300 group-hover:translate-x-0" aria-hidden="true" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
              Meet the crew
            </span>
          </a>
          <a
            href="#services"
            className="border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:border-foreground"
          >
            Secure my site
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6 font-mono">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Crew</dt>
            <dd className="mt-1 text-2xl font-bold">06</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Status</dt>
            <dd className="mt-1 text-2xl font-bold text-primary">Active</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Tolerance</dt>
            <dd className="mt-1 text-2xl font-bold">Zero</dd>
          </div>
        </dl>
      </div>

      <a
        href="#mission"
        aria-label="Scroll to mission"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce text-primary" />
      </a>
    </section>
  )
}
