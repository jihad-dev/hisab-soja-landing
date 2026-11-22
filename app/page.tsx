import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import MissionVision from "@/components/MissionVision";
import Developer from "@/components/Developer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <MissionVision />
        <Developer />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
