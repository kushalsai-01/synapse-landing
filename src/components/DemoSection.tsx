import { MessageSquare, Send } from "lucide-react";

export function DemoSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-[120px] py-40">
      <div className="flex flex-col items-center gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-[44px] font-semibold tracking-[-0.01em]">See Synapse in Action</h2>
          <p className="text-[18px] text-[#999999] max-w-[600px] leading-relaxed">
            From question to answer in seconds. Watch how Synapse understands your code.
          </p>
        </div>

        {/* Demo Mockup */}
        <div className="w-full max-w-[920px] rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-10 shadow-2xl">
          {/* Chat Interface Header */}
          <div className="mb-8 flex items-center gap-3 border-b border-[rgba(255,255,255,0.05)] pb-5">
            <MessageSquare className="h-5 w-5 text-white/60" strokeWidth={1.5} />
            <span className="text-[15px] text-white/70 tracking-tight">AI Chat</span>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-col gap-5">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-xl bg-white/8 px-5 py-3.5 shadow-sm">
                <p className="text-[15px] text-white/95 leading-relaxed">
                  Can you explain what the buildApp function does?
                </p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-5 py-3.5 shadow-sm">
                <p className="text-[15px] text-white/95 leading-relaxed">
                  The <code className="rounded bg-white/10 px-2 py-0.5 font-mono text-[13px]">buildApp</code> function initializes an AI instance using Synapse and returns a new application. It's a factory pattern that creates app instances on demand.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-[#888888] tracking-tight">
                    Source: app.ts:12-18
                  </span>
                </div>
              </div>
            </div>

            {/* User Follow-up */}
            <div className="flex justify-end">
              <div className="max-w-[70%] rounded-xl bg-white/8 px-5 py-3.5 shadow-sm">
                <p className="text-[15px] text-white/95 leading-relaxed">
                  Generate unit tests for this function
                </p>
              </div>
            </div>

            {/* AI Code Response */}
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-5 py-3.5 shadow-sm">
                <div className="mb-3">
                  <p className="text-sm text-white/70 tracking-tight">Generated test suite:</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4 font-mono text-[13px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#C586C0]">describe</span>
                    <span className="text-white/70">(</span>
                    <span className="text-[#CE9178]">'buildApp'</span>
                    <span className="text-white/70">, () {'=>'} {'{'}</span>
                    <span className="pl-4 text-[#C586C0]">it</span>
                    <span className="text-white/70">(</span>
                    <span className="text-[#CE9178]">'should create AI instance'</span>
                    <span className="text-white/70">...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-5 py-3.5">
            <input
              type="text"
              placeholder="Ask anything about your code..."
              className="flex-1 bg-transparent text-[15px] text-white/80 placeholder:text-white/25 outline-none"
              disabled
            />
            <Send className="h-5 w-5 text-white/20" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}