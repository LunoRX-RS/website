import { BorderBeam } from "@/components/ui/border-beam"

export default function HeroWindow({ alt }: { alt: string }) {
  return (
    <div className="relative squircle-3xl border border-line bg-surface p-2.5 shadow-2xl sm:p-3.5">
      <img
        src="/images/app/listen-now.webp"
        alt={alt}
        width={1648}
        height={1028}
        fetchPriority="high"
        className="block h-auto w-full squircle-2xl"
      />
      <BorderBeam size={260} duration={12} colorFrom="var(--emphasis)" colorTo="var(--line)" />
    </div>
  )
}
