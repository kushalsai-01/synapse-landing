import { Database, FlaskConical, Brain, FolderOpen } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: Database,
      title: "RAG-powered Answers",
      description: "Ask questions & get source-backed responses from your codebase instantly.",
    },
    {
      icon: FlaskConical,
      title: "Test Case Generation",
      description: "Turn functions into complete unit tests with AI-powered suggestions.",
    },
    {
      icon: Brain,
      title: "Flashcards for Learning",
      description: "Convert notes into spaced repetition cards for better retention.",
    },
    {
      icon: FolderOpen,
      title: "Project Knowledge Base",
      description: "Store notes, code, and docs in one searchable place.",
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-[120px] py-32">
      <div className="grid grid-cols-2 gap-5">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-7 transition-all hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.1)]"
            >
              <div className="flex flex-col gap-4">
                <Icon className="h-6 w-6 text-white/70 transition-colors group-hover:text-white/90" strokeWidth={1.5} />
                <h3 className="text-[19px] tracking-tight text-white">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#999999]">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}