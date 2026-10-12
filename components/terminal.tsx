'use client'

import { useEffect, useRef, useState } from 'react'
import { DISCORD_INVITE, founder, members, vision } from '@/lib/crew'
import { SectionHeading } from './section-heading'

type Line = { kind: 'in' | 'out' | 'accent'; text: string }

const HELP = [
  'available commands:',
  '  whoami     - who are we',
  '  crew       - list all members',
  '  founder    - about the founder',
  '  vision     - about the vision',
  '  rules      - the code we live by',
  '  anthem     - our song',
  '  contact    - how to reach us',
  '  clear      - clear the screen',
]

function run(cmd: string): Line[] {
  const c = cmd.trim().toLowerCase()
  switch (c) {
    case '':
      return []
    case 'help':
      return HELP.map((text) => ({ kind: 'out', text }))
    case 'whoami':
      return [
        { kind: 'accent', text: 'RichBoyZ // richboys' },
        { kind: 'out', text: 'programmers. protectors. we build, we secure, we stop blackmail.' },
      ]
    case 'crew':
      return [
        { kind: 'accent', text: `[founder] ${founder.name.padEnd(8)} @${founder.discord}` },
        { kind: 'accent', text: `[vision]  ${vision.name.padEnd(8)} @${vision.discord}` },
        ...members.map((m) => ({ kind: 'out' as const, text: `[${m.code}] ${m.name.padEnd(8)} @${m.discord}` })),
      ]
    case 'founder':
    case 'leader':
      return [{ kind: 'accent', text: `${founder.name} (@${founder.discord})` }, { kind: 'out', text: founder.bio }]
    case 'vision':
      return [{ kind: 'accent', text: `${vision.name} (@${vision.discord})` }, { kind: 'out', text: vision.bio }]
    case 'rules':
      return [
        { kind: 'out', text: '01. protect the people. always.' },
        { kind: 'out', text: '02. zero tolerance for blackmail.' },
        { kind: 'out', text: '03. be fair to everyone, no favorites.' },
        { kind: 'out', text: '04. no simping. stay focused.' },
        { kind: 'out', text: '05. ship clean code.' },
      ]
    case 'anthem':
      return [{ kind: 'accent', text: '♪ Massive Attack - Angel ♪' }, { kind: 'out', text: 'you are my angel...' }]
    case 'contact':
      return [
        { kind: 'accent', text: `join our discord: ${DISCORD_INVITE.replace('https://', '')}` },
        { kind: 'out', text: 'opening invite in a new tab ...' },
      ]
    case 'sudo':
    case 'sudo su':
      return [{ kind: 'accent', text: 'nice try. this incident will be reported to Ghostly.' }]
    default:
      return [{ kind: 'out', text: `command not found: ${c}. type 'help'` }]
  }
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: 'accent', text: 'RichBoyZ shell v6.6.6 — type "help" to begin' },
  ])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  const submit = () => {
    const cmd = value
    setValue('')
    setCursor(-1)
    if (cmd.trim()) setHistory((h) => [cmd, ...h])
    if (cmd.trim().toLowerCase() === 'clear') {
      setLines([])
      return
    }
    if (cmd.trim().toLowerCase() === 'contact') window.open(DISCORD_INVITE, '_blank', 'noopener,noreferrer')
    setLines((prev) => [...prev, { kind: 'in', text: cmd }, ...run(cmd)])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      submit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(cursor + 1, history.length - 1)
      if (history[next] !== undefined) {
        setCursor(next)
        setValue(history[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = cursor - 1
      setCursor(Math.max(next, -1))
      setValue(next >= 0 ? history[next] : '')
    }
  }

  return (
    <section id="terminal" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeading index="05" label="Terminal" title="Talk to the machine." />

      <div className="mt-16 overflow-hidden border border-border bg-card shadow-[0_0_80px_-20px] shadow-primary/40">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-primary" />
            <span className="size-3 rounded-full bg-muted-foreground/40" />
            <span className="size-3 rounded-full bg-foreground" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">guest@richboys:~</span>
          <span className="w-12" />
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-96 overflow-y-auto p-5 font-mono text-sm leading-relaxed"
          role="log"
          aria-live="polite"
        >
          {lines.map((line, i) => (
            <p
              key={i}
              className={
                line.kind === 'in' ? 'text-foreground' : line.kind === 'accent' ? 'text-primary' : 'whitespace-pre text-muted-foreground'
              }
            >
              {line.kind === 'in' && <span className="text-primary">{'❯ '}</span>}
              {line.text}
            </p>
          ))}
          <div className="flex items-center">
            <span className="text-primary">{'❯ '}</span>
            <label htmlFor="terminal-input" className="sr-only">
              Terminal command
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="type help"
              className="ml-1 flex-1 bg-transparent text-foreground caret-primary outline-none placeholder:text-muted-foreground/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
