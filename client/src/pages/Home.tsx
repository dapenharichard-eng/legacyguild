/* =============================================================
   LEGACY GUILD — Home Page
   Design: Neon Abyss | Full page composition
   Sections: Hero → About → Members → Achievements → Rules → Recruit → Footer
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MembersSection from "@/components/MembersSection";
import AchievementsSection from "@/components/AchievementsSection";
import RulesSection from "@/components/RulesSection";
import RecruitSection from "@/components/RecruitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.05_0.02_240)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <AchievementsSection />
      <RulesSection />
      <RecruitSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
