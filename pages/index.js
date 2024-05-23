import SectionCreations from "@/components/Sections/SectionCreations";
import SectionHero from "@/components/Sections/SectionHero";
import SectionInteractive from "@/components/Sections/SectionInteractive";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionInteractive />
      <SectionCreations />
    </main>
  );
}
