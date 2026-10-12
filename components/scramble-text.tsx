'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCDEFXYZ'

type ScrambleTextProps = {
  text: string
  className?: string
  duration?: number
  delay?: number
  scrambleOnHover?: boolean
}

export function ScrambleText({
  text,
  className,
  duration = 900,
  delay = 0,
  scrambleOnHover = true,
}: ScrambleTextProps) {
  const [output, setOutput] = useState(text)
  const frame = useRef<number | null>(null)

  const run = useCallback(() => {
    if (frame.current) cancelAnimationFrame(frame.current)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const revealed = Math.floor(progress * text.length)
      let next = ''
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ' || i < revealed) next += text[i]
        else next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }
      setOutput(next)
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
  }, [text, duration])

  useEffect(() => {
    const id = window.setTimeout(run, delay)
    return () => {
      window.clearTimeout(id)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [run, delay])

  return (
    <span className={className} onMouseEnter={scrambleOnHover ? run : undefined} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </span>
  )
}
