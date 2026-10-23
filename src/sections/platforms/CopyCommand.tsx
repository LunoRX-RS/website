import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CopyCommand({
  command,
  copyLabel,
  copiedLabel,
}: {
  command: string
  copyLabel: string
  copiedLabel: string
}) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="flex min-w-0 items-center gap-2 squircle-2xl border border-line bg-canvas p-2 pl-4">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-foreground">
        {command}
      </code>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-label={copied ? copiedLabel : copyLabel}
        className="size-9 shrink-0 squircle-xl!"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
          } catch {}
        }}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
