import { Navbar } from "../components/site/Navbar";
import { Hero } from "../components/site/Hero";
import { Vision } from "../components/site/Vision";
import { Technology } from "../components/site/Technology";
import { Trailer } from "../components/site/Trailer";
import { Devices } from "../components/site/Devices";
import { Roadmap } from "../components/site/Roadmap";
import { Waitlist } from "../components/site/Waitlist";
import { Footer } from "../components/site/Footer";

const Index = () => (
  <div className="min-h-screen">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <Trailer />
      <Vision />
      <Technology />
      <Devices />
      <Roadmap />
      <Waitlist />
    </main>
    <Footer />
  </div>
);

export default Index;
