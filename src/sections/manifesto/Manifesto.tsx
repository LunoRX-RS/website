import { TextReveal } from "@/components/ui/text-reveal"

export default function Manifesto({ text }: { text: string }) {
  return <TextReveal className="h-[220vh]">{text}</TextReveal>
}
