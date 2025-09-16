import Hero from '@/components/Hero';
import { EnhancedSkills } from '@/components/EnhancedSkills';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { InteractiveTimeline } from '@/components/InteractiveTimeline';
import { EnhancedContact } from '@/components/EnhancedContact';
import { InteractiveStats } from '@/components/InteractiveStats';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <InteractiveStats />
      <EnhancedSkills />
      <ProjectShowcase />
      <InteractiveTimeline />
      <EnhancedContact />
    </main>
  );
};

export default Index;
