'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { DISCORD_INVITE } from '@/lib/crew'
import { ScrambleText } from './scramble-text'

const links = [
  { href: '#mission', label: 'Mission' },
  { href: '#crew', label: 'Crew' },
  { href: '#services', label: 'Services' },
  { href: '#anthem', label: 'Anthem' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest">
          <span className="size-2 bg-primary" aria-hidden="true" />
          RICHBOYZ
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {links.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  <span className="text-primary">0{i + 1}.</span> <ScrambleText text={link.label} duration={400} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noreferrer"
          className="hidden border border-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
        >
          Contact us on Discord
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4 font-mono text-sm uppercase tracking-widest">
            {links.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-3 hover:text-primary">
                  <span className="text-primary">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
