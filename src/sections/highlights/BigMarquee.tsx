import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

function Crescent() {
  return (
    <svg viewBox="0 0 40 40" className="mx-[0.5em] size-[0.55em] shrink-0 text-foreground" aria-hidden="true">
      <mask id="bm-cut">
        <rect width="40" height="40" fill="#fff" />
        <circle cx="25" cy="15" r="14" fill="#000" />
      </mask>
      <circle cx="20" cy="20" r="18" fill="currentColor" mask="url(#bm-cut)" />
    </svg>
  )
}

function Row({ words, offset }: { words: string[]; offset: boolean }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={w} className="inline-flex items-center">
          <span className={(i + (offset ? 1 : 0)) % 2 ? "text-muted-foreground/60" : "text-foreground"}>{w}</span>
          <Crescent />
        </span>
      ))}
    </>
  )
}

export default function BigMarquee({ row1, row2 }: { row1: string[]; row2: string[] }) {
  return (
    <ScrollVelocityContainer
      aria-hidden="true"
      className="font-display text-[clamp(2.6rem,7.5vw,6rem)] font-extrabold leading-[1.25] tracking-[-0.03em]"
    >
      <ScrollVelocityRow baseVelocity={5} direction={1}>
        <Row words={row1} offset={false} />
      </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={5} direction={-1}>
        <Row words={row2} offset />
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  )
}
