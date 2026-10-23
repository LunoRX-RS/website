import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion className="gap-3">
      {items.map((it, i) => (
        <AccordionItem
          key={it.q}
          value={`faq-${i}`}
          data-reveal-item
          style={{ "--i": i } as React.CSSProperties}
          className="squircle-3xl border border-line bg-surface px-6 not-last:border-b"
        >
          <AccordionTrigger className="squircle-xl! py-5 text-base font-semibold hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-8 text-muted-foreground">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
