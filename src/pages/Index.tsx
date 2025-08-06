import { MadeWithDyad } from "@/components/made-with-dyad";
import { HackathonHero } from "@/components/HackathonHero";
import { HackathonSchedule } from "@/components/HackathonSchedule";
import { SnakeGame } from "@/components/SnakeGame";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HackathonHero />
      <HackathonSchedule />
      <SnakeGame />
      <MadeWithDyad />
    </div>
  );
};

export default Index;