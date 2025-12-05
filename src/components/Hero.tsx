import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-[120px] py-32">
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Left: Text + Buttons */}
        <div className="flex flex-col gap-10 max-w-[580px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-[60px] font-semibold leading-[1.08] tracking-[-0.02em]">
              Your AI-powered Coding Productivity Agent
            </h1>
            <p className="text-[20px] text-[#B0B0B0] leading-relaxed">
              Ask Synapse to summarize notes, generate tests, or create PRs — instantly.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-[15px] text-black shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
              Continue with Google
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-7 py-3 text-[15px] text-white/90 shadow-sm transition-all hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)]">
              <Play className="h-4 w-4" />
              See Demo
            </button>
          </div>
        </div>

        {/* Right: Code Card with Cyan Glow */}
        <div className="relative flex justify-end">
          {/* Enhanced cyan glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[240px] w-[240px] rounded-full bg-[#06B6D4] opacity-[0.15] blur-[120px]" />
          </div>
          
          {/* Code Card */}
          <div className="relative w-[420px] h-[280px] rounded-xl border border-[rgba(255,255,255,0.06)] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex h-full flex-col gap-4">
              {/* Code editor header */}
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28CA42]" />
              </div>

              {/* Code content */}
              <div className="flex flex-col gap-2 font-mono text-[13px]">
                <div className="flex gap-3">
                  <span className="text-[#888888]">1</span>
                  <span>
                    <span className="text-[#C586C0]">function</span>{' '}
                    <span className="text-[#DCDCAA]">buildApp</span>
                    <span className="text-[#A0A0A0]">{'() {'}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#888888]">2</span>
                  <span className="pl-4">
                    <span className="text-[#C586C0]">const</span>{' '}
                    <span className="text-[#9CDCFE]">ai</span>{' '}
                    <span className="text-[#A0A0A0]">=</span>{' '}
                    <span className="text-[#CE9178]">"synapse"</span>
                    <span className="text-[#A0A0A0]">;</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#888888]">3</span>
                  <span className="pl-4">
                    <span className="text-[#C586C0]">return</span>{' '}
                    <span className="text-[#9CDCFE]">ai</span>
                    <span className="text-[#A0A0A0]">.</span>
                    <span className="text-[#DCDCAA]">create</span>
                    <span className="text-[#A0A0A0]">{'();'}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#888888]">4</span>
                  <span className="text-[#A0A0A0]">{'}'}</span>
                </div>
                <div className="flex gap-3 mt-3">
                  <span className="text-[#888888]">5</span>
                  <span className="text-[#6A9955]">// AI-powered suggestions</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#888888]">6</span>
                  <span className="text-[#6A9955]">// Ship faster with Synapse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}