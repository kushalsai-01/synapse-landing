import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)]">
      <div className="mx-auto max-w-[1200px] px-[120px] py-16">
        <div className="flex items-center justify-between">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-white/30" strokeWidth={2} />
              <span className="text-sm text-white/30 tracking-tight">Synapse</span>
            </div>
            <span className="text-sm text-white/25 tracking-tight">
              © 2025 Synapse. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-white/25 transition-colors hover:text-white/70"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-white/25 transition-colors hover:text-white/70"
              aria-label="Twitter"
            >
              <Twitter className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-white/25 transition-colors hover:text-white/70"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}