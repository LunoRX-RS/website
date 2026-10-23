import { MenuIcon } from "lucide-react"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Link = { href: string; label: string }
type Labels = {
  download: string
  theme: string
  openMenu: string
  menu: string
  mobileMenu: string
  downloadApp: string
  switchLabel: string
  switchTo: string
}

export default function HeaderTools({
  links,
  download,
  github,
  switchHref,
  lang,
  t,
}: {
  links: Link[]
  download: string
  github: string
  switchHref: string
  lang: string
  t: Labels
}) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="mr-1 hidden items-center squircle-xl bg-surface-2 p-1 text-xs font-semibold sm:flex"
        role="group"
        aria-label={t.switchTo}
      >
        {(["th", "en"] as const).map((l) => {
          const current = l === lang
          return (
            <a
              key={l}
              href={current ? undefined : switchHref}
              hrefLang={l}
              lang={l}
              aria-current={current ? "true" : undefined}
              className={
                "grid h-7 min-w-9 place-items-center squircle-sm px-2 uppercase tracking-wide transition-colors " +
                (current
                  ? "bg-surface text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {l}
            </a>
          )
        })}
      </div>
      <AnimatedThemeToggler
        aria-label={t.theme}
        className="grid size-10 place-items-center squircle-2xl! text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground [&_svg]:size-4"
      />
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="hidden size-10 place-items-center squircle-2xl! text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground lg:grid"
      >
        <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
        </svg>
      </a>
      <Button
        render={<a href={download} />}
        nativeButton={false}
        className="ml-1 hidden h-10 squircle-2xl! bg-emphasis px-5 text-sm font-semibold text-emphasis-foreground hover:bg-emphasis/90 sm:inline-flex"
      >
        {t.download}
      </Button>
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              aria-label={t.openMenu}
              className="size-10 squircle-2xl! md:hidden"
            />
          }
        >
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="right" className="p-6">
          <SheetHeader className="p-0">
            <SheetTitle className="font-display text-lg">{t.menu}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1" aria-label={t.mobileMenu}>
            {links.map((item) => (
              <SheetClose
                key={item.href}
                nativeButton={false}
                render={
                  <a
                    href={item.href}
                    className="squircle-2xl px-4 py-3 text-base hover:bg-surface-2"
                  />
                }
              >
                {item.label}
              </SheetClose>
            ))}
          </nav>
          <Button
            render={<a href={download} />}
            nativeButton={false}
            className="mt-2 h-12 squircle-2xl! bg-emphasis text-emphasis-foreground"
          >
            {t.downloadApp}
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  )
}
