import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import AppShowcase from "./components/AppShowcase";
import Pricing from "./components/Pricing";
import LeaderBorne from "./components/LeaderBorne";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <AppShowcase />
      <Pricing />
      <LeaderBorne />
      <Contact />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
