'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${(0.5 - y) * 14}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 18}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div className="[perspective:1000px]">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={cn(
          'group relative transition-transform duration-200 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))]',
          className,
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),oklch(0.6_0.24_27/0.18),transparent_60%)]"
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  )
}
