import { DISCORD_INVITE } from '@/lib/crew'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Need help?</p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              If someone is blackmailing you, don&apos;t pay and don&apos;t delete the evidence. Reach out. We&apos;ve got you.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact us on Discord</p>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-mono text-sm text-primary underline-offset-4 hover:underline"
            >
              discord.gg/4wCmSsxxA2
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Status</p>
            <p className="mt-4 flex items-center gap-2 font-mono text-sm">
              <span className="size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
              All systems operational
            </p>
          </div>
        </div>
      </div>

      <p
        className="mt-20 select-none whitespace-nowrap text-center text-[22vw] font-bold leading-[0.75] tracking-tighter text-foreground/[0.06]"
        aria-hidden="true"
      >
        RichBoyZ
      </p>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <span>{'© RichBoyZ — richboys'}</span>
          <span>Founded by Ghostly // Vision by m3qab</span>
        </div>
      </div>
    </footer>
  )
}
