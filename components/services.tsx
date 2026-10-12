import { ArrowUpRight } from 'lucide-react'
import { DISCORD_INVITE } from '@/lib/crew'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const services = [
  {
    title: 'Website Development',
    tags: ['Next.js', 'React', 'Design'],
    body: 'From landing pages to full web apps. Fast, responsive, and built to look sharp on every screen.',
  },
  {
    title: 'Security Audits',
    tags: ['Pentest', 'Hardening', 'Reports'],
    body: 'We review your site for vulnerabilities, misconfigurations, and leaks, then help you fix every one.',
  },
  {
    title: 'Blackmail Response',
    tags: ['Evidence', 'Account Lockdown', 'Reporting'],
    body: 'Confidential help for victims. We secure your accounts and guide you through reporting the abuser.',
  },
  {
    title: 'Discord Server Review',
    tags: ['Moderation', 'Bots', 'Fairness'],
    body: 'Set up fair moderation, safe bots, and permissions that protect your members instead of hurting them.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeading index="03" label="Services" title="Code that builds. Code that protects." />

      <ul className="mt-16 border-t border-border">
        {services.map((service, i) => (
          <li key={service.title}>
            <Reveal delay={i * 80}>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="group relative grid gap-4 overflow-hidden border-b border-border py-8 md:grid-cols-[80px_1fr_1fr_40px] md:items-center"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100" aria-hidden="true" />
                <span className="relative font-mono text-sm text-primary transition-colors group-hover:text-primary-foreground md:px-4">
                  0{i + 1}
                </span>
                <span className="relative text-3xl font-bold tracking-tighter transition-transform duration-500 group-hover:translate-x-4 sm:text-4xl">
                  {service.title}
                </span>
                <span className="relative">
                  <span className="block leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground">
                    {service.body}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest group-hover:border-primary-foreground/40">
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <ArrowUpRight className="relative hidden size-6 transition-transform duration-500 group-hover:rotate-45 md:block" aria-hidden="true" />
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
