import { Reveal } from './reveal'
import { ScrambleText } from './scramble-text'

export function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        [{index}] <ScrambleText text={label} />
      </p>
      <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tighter sm:text-6xl">{title}</h2>
    </Reveal>
  )
}
