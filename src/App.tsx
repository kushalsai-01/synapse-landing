import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { FeatureGrid } from "./components/FeatureGrid";
import { DemoSection } from "./components/DemoSection";
import { CTAStrip } from "./components/CTAStrip";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <DemoSection />
      <CTAStrip />
      <Footer />
    </div>
  );
}
