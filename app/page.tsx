import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import ProjectSlider from "./components/ProjectSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureSection />
      <StatsSection />
      <ProjectSlider />
    </div>
  );
}
