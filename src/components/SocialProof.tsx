import { Star, Users, Chrome } from "lucide-react";

export function SocialProof() {
  return (
    <section className="mx-auto max-w-[1200px] px-[120px] pb-32">
      <div className="flex items-center justify-center gap-16">
        {/* GitHub Stars */}
        <div className="flex items-center gap-2.5 text-white/30">
          <Star className="h-4 w-4" />
          <span className="text-sm tracking-tight">12k+ stars</span>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/8" />

        {/* Discord Community */}
        <div className="flex items-center gap-2.5 text-white/30">
          <Users className="h-4 w-4" />
          <span className="text-sm tracking-tight">45k+ developers</span>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-white/8" />

        {/* Chrome Extension */}
        <div className="flex items-center gap-2.5 text-white/30">
          <Chrome className="h-4 w-4" />
          <span className="text-sm tracking-tight">Chrome extension</span>
        </div>
      </div>
    </section>
  );
}