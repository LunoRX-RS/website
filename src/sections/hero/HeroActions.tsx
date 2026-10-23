import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export default function HeroActions({
  repo,
  downloadLabel,
  sourceLabel,
}: {
  repo: string
  downloadLabel: string
  sourceLabel: string
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span data-magnetic className="inline-block">
        <InteractiveHoverButton
          type="button"
          onClick={() => {
            window.location.hash = "download"
          }}
          className="h-14 squircle-2xl! border-line bg-surface px-8 text-base text-foreground"
        >
          {downloadLabel}
        </InteractiveHoverButton>
      </span>
      <span data-magnetic className="inline-block">
        <Button
          render={<a href={repo} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          variant="outline"
          className="h-14 squircle-2xl! bg-transparent px-6 text-base"
        >
          {sourceLabel}
        </Button>
      </span>
    </div>
  )
}
