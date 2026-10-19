"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px threshold for navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll-spy logic for active section
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[80px] z-40 transition-all duration-300 flex items-center ${
          isScrolled
            ? "bg-[#212121]/90 border-b border-[#3A3A3A]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Left: Logo [YOUR NAME] Anton 22px with small green square */}
          <a
            href="#home"
            className="flex items-center gap-2 group select-none focus:outline-none"
          >
            <span className="font-anton text-[22px] tracking-wider text-white group-hover:text-[#C6FF00] transition-colors">
              {PROFILE.name}
            </span>
            <span className="w-2.5 h-2.5 bg-[#C6FF00] inline-block mb-1" />
          </a>

          {/* Right: Nav Links + CV Button + Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm tracking-wide transition-colors py-1 ${
                      isActive
                        ? "text-[#C6FF00] font-medium"
                        : "text-[#D0D0D0] hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6FF00]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Outlined Green CV Button with Download Icon */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#C6FF00] text-[#C6FF00] hover:bg-[#C6FF00] hover:text-[#212121] transition-all text-xs font-mono font-semibold tracking-wider rounded-none uppercase select-none focus:outline-none"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>CV</span>
            </a>

            {/* Hamburger Button (2 thin lines) - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 group focus:outline-none border border-transparent hover:border-[#3A3A3A] transition-colors"
            >
              <span className="w-6 h-[1.5px] bg-[#FFFFFF] group-hover:bg-[#C6FF00] transition-colors" />
              <span className="w-4 h-[1.5px] bg-[#FFFFFF] group-hover:bg-[#C6FF00] group-hover:w-6 transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* SideMenu Drawer */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
