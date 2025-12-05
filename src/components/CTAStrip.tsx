import { ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.05)]">
      <div className="mx-auto max-w-[1200px] px-[120px] py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-[36px] font-semibold tracking-[-0.01em]">
            Start building smarter today — for free.
          </h2>
          <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[15px] text-black shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}