import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import EasyTouch from "@/components/EasyTouch";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#212121] text-[#D0D0D0] selection:bg-[#C6FF00] selection:text-[#212121]">
        {/* Animated Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Canvas Dust Particles */}
        <StarField />

        {/* Fixed Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Education />
        </main>

        {/* Footer Section with Live GitHub Stats & Left Fixed Email */}
        <Footer />

        {/* Floating Easy Touch "LET'S TALK" Quick Contact (Mobile, Tablet, Desktop) */}
        <EasyTouch />
      </div>
    </SmoothScroll>
  );
}

