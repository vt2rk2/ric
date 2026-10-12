import { Scale, ShieldAlert, ShieldCheck, Code2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    icon: ShieldAlert,
    title: 'Stop Blackmail',
    body: 'Being blackmailed? You are not alone. We help victims collect evidence, lock down their accounts, and report abusers to the platforms and authorities.',
  },
  {
    icon: Scale,
    title: 'Keep It Fair',
    body: 'Discord servers that abuse members, run on favoritism, or simp their way into power get exposed and reported to Discord Trust & Safety.',
  },
  {
    icon: Code2,
    title: 'Build The Web',
    body: 'We are programmers first. Clean, fast, modern websites designed and shipped by the crew from the first line of code.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Everything',
    body: 'Security audits, hardening, and fixes. We find the holes before the bad guys do and help you close them for good.',
  },
]

export function Mission() {
  return (
    <section id="mission" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionHeading index="01" label="Mission" title="We don't watch. We act." />

      <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 100} className="h-full">
            <article className="group relative h-full overflow-hidden bg-background p-8 transition-colors hover:bg-card sm:p-10">
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <pillar.icon className="size-8 text-primary transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.body}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
