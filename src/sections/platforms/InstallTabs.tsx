import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CopyCommand from "./CopyCommand"

type Step = { title: string; body: string; command?: string; releases?: boolean }
type OS = { id: string; name: string; intro: string; steps: Step[]; note: string }

export default function InstallTabs({
  os,
  releasesUrl,
  releasesLabel,
  copyLabel,
  copiedLabel,
  label,
}: {
  os: OS[]
  releasesUrl: string
  releasesLabel: string
  copyLabel: string
  copiedLabel: string
  label: string
}) {
  const [value, setValue] = useState(os[0].id)

  // Pick the visitor's own system after hydration so server and client markup match.
  useEffect(() => {
    const ua = navigator.userAgent
    const guess = /Windows/i.test(ua) ? "windows" : /Mac/i.test(ua) ? "mac" : /Linux/i.test(ua) && !/Android/i.test(ua) ? "linux" : null
    if (guess && os.some((o) => o.id === guess)) setValue(guess)
  }, [os])

  return (
    <Tabs value={value} onValueChange={(v) => setValue(String(v))} className="gap-6">
      <TabsList aria-label={label} className="h-12 w-full squircle-2xl! bg-surface-2 p-1.5 sm:w-fit">
        {os.map((o) => (
          <TabsTrigger
            key={o.id}
            value={o.id}
            className="h-full min-w-24 squircle-xl! px-5 text-sm sm:min-w-32"
          >
            {o.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {os.map((o) => (
        <TabsContent key={o.id} value={o.id} className="min-w-0">
          <div className="squircle-panel border border-line bg-surface p-6 sm:p-9">
            <p className="text-base leading-8 text-muted-foreground">{o.intro}</p>
            <ol className="mt-8 space-y-7">
              {o.steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                  <span className="grid size-10 place-items-center squircle-xl bg-surface-2 font-display text-sm font-bold">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="font-display text-lg font-bold leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-base leading-8 text-muted-foreground">{s.body}</p>
                    {s.command ? (
                      <div className="mt-3">
                        <CopyCommand command={s.command} copyLabel={copyLabel} copiedLabel={copiedLabel} />
                      </div>
                    ) : null}
                    {s.releases ? (
                      <Button
                        render={<a href={releasesUrl} target="_blank" rel="noreferrer" />}
                        nativeButton={false}
                        className="mt-3 h-11 squircle-2xl! bg-emphasis px-5 text-sm text-emphasis-foreground hover:bg-emphasis/90"
                      >
                        {releasesLabel}
                      </Button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-7 text-muted-foreground">{o.note}</p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
