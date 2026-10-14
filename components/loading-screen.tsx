'use client'

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useAudio } from './audio-provider'

const BOOT_LINES = [
  '> initializing richboyz.sys ...',
  '> loading kernel modules [shield, firewall, trace]',
  '> establishing encrypted tunnel ... OK',
  '> verifying crew signatures: Ghostly / m3qab / Lie / Try / Nhjk / Alb8mi',
  '> scanning for blackmail threats ... 0 active',
  '> anthem queued: Massive Attack - Angel',
  '> access granted. welcome.',
]

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [lines, setLines] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)
  const [ready, setReady] = useState(false)
  const { start } = useAudio()

  useEffect(() => {
    const start = performance.now()
    const total = 3200
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / total, 1)
      const eased = 1 - Math.pow(1 - p, 2)
      setProgress(Math.round(eased * 100))
      setLines(Math.ceil(eased * BOOT_LINES.length))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setReady(true)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const enter = useCallback(() => {
    start()
    setExiting(true)
    window.setTimeout(() => {
      setGone(true)
      document.body.classList.remove('is-loading')
    }, 1000)
  }, [start])

  useEffect(() => {
    if (!ready) return
    let cancelled = false
    start().then((ok) => {
      if (ok && !cancelled) window.setTimeout(enter, 350)
    })
    return () => {
      cancelled = true
    }
  }, [ready, start, enter])

  if (gone) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading RichBoyZ ${progress}%`}
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6 transition-[clip-path] duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)]',
        exiting ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]',
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="scanlines absolute inset-0" aria-hidden="true" />
      <div className="animate-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent" aria-hidden="true" />

      <div className="relative w-full max-w-2xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h1
            className="glitch text-5xl font-bold tracking-tighter text-foreground sm:text-7xl"
            data-text="RichBoyZ"
          >
            RichBoyZ
          </h1>
          <span className="font-mono text-4xl font-bold tabular-nums text-primary sm:text-6xl">
            {progress.toString().padStart(3, '0')}
          </span>
        </div>

        <div className="h-1 w-full overflow-hidden bg-secondary">
          <div className="h-full bg-primary transition-[width] duration-100" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-8 min-h-48 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {BOOT_LINES.slice(0, lines).map((line, i) => (
            <p key={line} className={cn(i === BOOT_LINES.length - 1 && 'text-primary')}>
              {line}
            </p>
          ))}
          <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
        </div>

        <div className={cn('mt-6 transition-opacity duration-500', ready ? 'opacity-100' : 'pointer-events-none opacity-0')}>
          <button
            type="button"
            onClick={enter}
            disabled={!ready || exiting}
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-primary px-8 py-4 font-mono text-sm uppercase tracking-[0.3em] text-primary transition-colors hover:text-primary-foreground"
          >
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" aria-hidden="true" />
            <span className="relative">{'> Enter RichBoyZ'}</span>
          </button>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sound on — anthem starts on entry</p>
        </div>
      </div>
    </div>
  )
}
