import { MadeWithDyad } from "@/components/made-with-dyad";
import { HackathonHero } from "@/components/HackathonHero";
import { HackathonSchedule } from "@/components/HackathonSchedule";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HackathonHero />
      <HackathonSchedule />
      <MadeWithDyad />
    </div>
  );
};

export default Index;