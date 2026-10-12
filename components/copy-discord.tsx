'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyDiscord({ username }: { username: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(username)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="relative z-20 flex w-full items-center justify-between gap-3 border border-border bg-background/60 px-3 py-2 font-mono text-sm transition-colors hover:border-primary"
      aria-label={`Copy Discord username ${username}`}
    >
      <span className="flex items-center gap-2 truncate">
        <span className="text-muted-foreground">@</span>
        {username}
      </span>
      {copied ? <Check className="size-4 shrink-0 text-primary" /> : <Copy className="size-4 shrink-0 text-muted-foreground" />}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied' : ''}
      </span>
    </button>
  )
}
