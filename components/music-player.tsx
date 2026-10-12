'use client'

import { useState } from 'react'
import { ChevronDown, Minus, Music, Pause, Play, Plus, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatTime, useAudio } from './audio-provider'

const BARS = [0.1, 0.35, 0.2, 0.45, 0.15]

export function MusicPlayer() {
  const { playing, volume, muted, currentTime, duration, toggle, setVolume, stepVolume, toggleMute } = useAudio()
  const [collapsed, setCollapsed] = useState(false)
  const percent = Math.round((muted ? 0 : volume) * 100)

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        aria-label="Open music player"
        className="fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center border border-primary bg-background/90 text-primary backdrop-blur-md transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {playing ? <Equalizer /> : <Music className="size-5" aria-hidden="true" />}
      </button>
    )
  }

  return (
    <aside
      aria-label="Music player"
      className="fixed bottom-5 right-5 z-[60] w-[calc(100vw-2.5rem)] max-w-xs border border-border bg-background/90 p-4 shadow-2xl shadow-primary/10 backdrop-blur-md"
    >
      <span className="absolute -left-px -top-px size-3 border-l-2 border-t-2 border-primary" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-primary" aria-hidden="true" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
            {playing ? <Equalizer /> : <Music className="size-4" aria-hidden="true" />}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold">Angel</p>
            <p className="truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Massive Attack</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          aria-label="Minimize music player"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 h-0.5 w-full bg-secondary" aria-hidden="true">
        <div className="h-full bg-primary" style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }} />
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[10px] tabular-nums text-muted-foreground">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause song' : 'Play song'}
          className="flex size-10 shrink-0 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          {playing ? <Pause className="size-4 fill-current" aria-hidden="true" /> : <Play className="size-4 fill-current" aria-hidden="true" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="flex size-8 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
        >
          {muted || volume === 0 ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
        </button>

        <button
          type="button"
          onClick={() => stepVolume(-0.1)}
          aria-label="Decrease volume"
          className="flex size-7 shrink-0 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <Minus className="size-3" aria-hidden="true" />
        </button>

        <input
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={(e) => setVolume(Number(e.target.value) / 100)}
          aria-label="Volume"
          className="h-1 min-w-0 flex-1 cursor-pointer accent-[var(--primary)]"
        />

        <button
          type="button"
          onClick={() => stepVolume(0.1)}
          aria-label="Increase volume"
          className="flex size-7 shrink-0 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <Plus className="size-3" aria-hidden="true" />
        </button>

        <span className="w-8 shrink-0 text-right font-mono text-[10px] tabular-nums text-muted-foreground">{percent}%</span>
      </div>
    </aside>
  )
}

function Equalizer() {
  return (
    <span className="flex h-4 items-end gap-0.5" aria-hidden="true">
      {BARS.map((delay, i) => (
        <span
          key={i}
          className={cn('animate-eq w-0.5 bg-current')}
          style={{ height: '100%', animationDelay: `${delay}s`, animationDuration: `${0.6 + i * 0.1}s` }}
        />
      ))}
    </span>
  )
}
