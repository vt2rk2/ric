'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

type AudioState = {
  playing: boolean
  volume: number
  muted: boolean
  currentTime: number
  duration: number
  start: () => Promise<boolean>
  toggle: () => void
  setVolume: (v: number) => void
  stepVolume: (delta: number) => void
  toggleMute: () => void
}

const AudioContext = createContext<AudioState | null>(null)

const clamp = (v: number) => Math.min(1, Math.max(0, Math.round(v * 100) / 100))

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolumeState] = useState(0.6)
  const [muted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const start = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return false
    try {
      await audio.play()
      return true
    } catch {
      return false
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) audio.play().catch(() => {})
    else audio.pause()
  }, [])

  const setVolume = useCallback((v: number) => {
    const next = clamp(v)
    setVolumeState(next)
    if (next > 0) setMuted(false)
  }, [])

  const stepVolume = useCallback((delta: number) => {
    setVolumeState((prev) => clamp(prev + delta))
    setMuted(false)
  }, [])

  const toggleMute = useCallback(() => setMuted((m) => !m), [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  const value = useMemo(
    () => ({ playing, volume, muted, currentTime, duration, start, toggle, setVolume, stepVolume, toggleMute }),
    [playing, volume, muted, currentTime, duration, start, toggle, setVolume, stepVolume, toggleMute],
  )

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        src="/audio/angel.mp3"
        loop
        preload="none"
        onPlay={(e) => {
          delete e.currentTarget.dataset.userPaused
          setPlaying(true)
        }}
        onPause={(e) => {
          e.currentTarget.dataset.userPaused = 'true'
          setPlaying(false)
        }}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioContext)
  if (!ctx) throw new Error('useAudio must be used within AudioProvider')
  return ctx
}

export function formatTime(s: number) {
  if (!Number.isFinite(s)) return '00:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}
