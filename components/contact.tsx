import { ArrowUpRight } from 'lucide-react'
import { DISCORD_INVITE } from '@/lib/crew'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading index="06" label="Contact" title="Contact us on Discord." />
        <Reveal delay={150}>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Being blackmailed? Need a site built or secured? Know a server that isn&apos;t fair to its people? Join the RichBoyZ Discord and open a ticket. Everything stays private.
          </p>

          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 flex flex-col gap-6 border border-primary p-8 transition-colors hover:bg-primary md:flex-row md:items-center md:justify-between md:p-12"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary transition-colors group-hover:text-primary-foreground">
                Discord invite
              </p>
              <p className="mt-3 break-all font-sans text-4xl font-bold tracking-tight transition-colors group-hover:text-primary-foreground md:text-6xl">
                discord.gg/4wCmSsxxA2
              </p>
            </div>
            <span className="inline-flex size-16 shrink-0 items-center justify-center border border-primary text-primary transition-all group-hover:rotate-45 group-hover:border-primary-foreground group-hover:text-primary-foreground">
              <ArrowUpRight className="size-8" aria-hidden="true" />
              <span className="sr-only">Join our Discord server</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
