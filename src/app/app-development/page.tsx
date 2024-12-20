import AppHero from "@/pages/Service/AppDevelopement/AppHero";
import Icon from "@/pages/Service/AppDevelopement/Icon";
import ScrollPage from "@/pages/Service/AppDevelopement/Scroll";

export default function AppDevelopment() {
  return (
    <main>
      <AppHero />
      <Icon />
      <ScrollPage />
      <div className="min-h-screen"></div>
    </main>
  );
}
