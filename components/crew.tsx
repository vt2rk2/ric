import Image from 'next/image'
import { Eye, Ghost } from 'lucide-react'
import { founder, members, vision } from '@/lib/crew'
import { CopyDiscord } from './copy-discord'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { TiltCard } from './tilt-card'

function Avatar({ name, pfp, large = false }: { name: string; pfp?: string; large?: boolean }) {
  return (
    <div
      className={
        large
          ? 'group/avatar relative flex size-28 items-center justify-center [transform:translateZ(40px)]'
          : 'group/avatar relative flex size-20 items-center justify-center [transform:translateZ(30px)]'
      }
    >
      <span
        className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-primary/70"
        aria-hidden="true"
      />
      <span className="absolute inset-1.5 overflow-hidden rounded-full border border-border bg-secondary">
        {pfp ? (
          <Image
            src={pfp}
            alt={`${name} profile picture`}
            fill
            sizes={large ? '112px' : '80px'}
            className="object-cover grayscale transition duration-500 group-hover/avatar:scale-110 group-hover/avatar:grayscale-0"
          />
        ) : (
          <span
            className={`flex size-full items-center justify-center font-bold ${large ? 'text-3xl' : 'text-xl'}`}
            aria-hidden="true"
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span
          className="pointer-events-none absolute inset-0 bg-primary/25 mix-blend-multiply transition-opacity duration-500 group-hover/avatar:opacity-0"
          aria-hidden="true"
        />
      </span>
      <span
        className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-card bg-primary"
        aria-hidden="true"
      />
    </div>
  )
}

export function Crew() {
  const leaders = [
    { ...founder, icon: Ghost },
    { ...vision, icon: Eye },
  ]

  return (
    <section id="crew" className="relative overflow-hidden py-32">
      <div className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading index="02" label="The Crew" title="Six names. One code." />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {leaders.map((person, i) => (
            <Reveal key={person.name} delay={i * 120}>
              <TiltCard className="overflow-hidden border border-border bg-card p-8 sm:p-10">
                <span
                  className="pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] font-bold leading-none tracking-tighter text-foreground/[0.04]"
                  aria-hidden="true"
                >
                  {person.name}
                </span>
                <div className="relative flex items-start justify-between gap-4">
                  <Avatar name={person.name} pfp={person.pfp} large />
                  <span className="flex items-center gap-2 bg-primary px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary-foreground [transform:translateZ(20px)]">
                    <person.icon className="size-3.5" aria-hidden="true" />
                    {person.role}
                  </span>
                </div>
                <h3 className="relative mt-8 text-4xl font-bold tracking-tighter sm:text-5xl [transform:translateZ(30px)]">
                  {person.name}
                </h3>
                <p className="relative mt-3 max-w-md leading-relaxed text-muted-foreground">{person.bio}</p>
                <div className="relative mt-8 max-w-xs">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Discord</p>
                  <CopyDiscord username={person.discord} />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <TiltCard className="border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">{member.code}</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                    Online
                  </span>
                </div>
                <div className="mt-6">
                  <Avatar name={member.name} pfp={member.pfp} />
                </div>
                <h3 className="mt-6 text-3xl font-bold tracking-tighter [transform:translateZ(20px)]">{member.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {member.role} / {member.specialty}
                </p>
                <div className="mt-6">
                  <CopyDiscord username={member.discord} />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
