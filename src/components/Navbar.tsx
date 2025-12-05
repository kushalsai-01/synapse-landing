import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-[rgba(255,255,255,0.05)]">
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-white" />
            <span className="font-semibold tracking-tight">Synapse</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
              Docs
            </a>
            <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
              Pricing
            </a>
            <button className="rounded-md border border-white/80 px-5 py-1.5 text-sm transition-all hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}