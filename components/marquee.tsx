const WORDS = ['Anti-Blackmail', 'Fair Play', 'Web Development', 'Cyber Security', 'No Simping', 'Protect The People']

export function Marquee() {
  const items = [...WORDS, ...WORDS]
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-primary bg-primary py-4 text-primary-foreground" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl font-bold uppercase tracking-tight sm:text-4xl">
            {word}
            <span className="font-mono text-base">{'//'}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
