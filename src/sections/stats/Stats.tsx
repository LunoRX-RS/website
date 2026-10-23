import { NumberTicker } from "@/components/ui/number-ticker"

type Stat = { value?: number; text?: string; label: string }

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          data-reveal-item
          style={{ "--i": i } as React.CSSProperties}
          className="min-w-0 border-t border-line pt-5"
        >
          <dd className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            {s.value !== undefined ? <NumberTicker value={s.value} /> : s.text}
          </dd>
          <dt className="mt-3 max-w-[22ch] text-sm leading-6 text-muted-foreground">{s.label}</dt>
        </div>
      ))}
    </dl>
  )
}
