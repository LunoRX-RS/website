import { Button } from "@/components/ui/button"

export default function CtaButtons({
  releases,
  repo,
  downloadLabel,
  sourceLabel,
}: {
  releases: string
  repo: string
  downloadLabel: string
  sourceLabel: string
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Button
        render={<a href={releases} target="_blank" rel="noreferrer" />}
        nativeButton={false}
        className="h-12 squircle-2xl! bg-emphasis-foreground px-6 text-emphasis hover:bg-emphasis-foreground/90"
      >
        {downloadLabel}
      </Button>
      <Button
        render={<a href={repo} target="_blank" rel="noreferrer" />}
        nativeButton={false}
        variant="outline"
        className="h-12 squircle-2xl! border-emphasis-foreground/40 bg-transparent px-6 text-emphasis-foreground hover:bg-emphasis-foreground/10 hover:text-emphasis-foreground"
      >
        {sourceLabel}
      </Button>
    </div>
  )
}
