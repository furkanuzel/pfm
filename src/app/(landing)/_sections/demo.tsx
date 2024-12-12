import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function DemoSection() {
  return (
    <section className="py-24 max-md:py-16 border-y">
      <div className="container flex max-md:flex-col gap-24 items-center py-16">
        <blockquote className="text-5xl max-md:text-3xl font-bold max-w-4xl italic">
          "Harness the power of AI to elevate your content with precise,
          impactful alt text that boosts accessibility and SEO."
        </blockquote>
        <Link href="/alt-texts/new">
          <Button className="rounded-3xl p-6 text-base">
            <Sparkles size={20} className="mr-2" />
            <span className="font-semibold">Start Generating</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
