"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45A1.45 1.45 0 0 0 6.46 5.86a1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

export default function Footer() {

  return (
    <>
      {/* Fixed Vertical Email on the Far Left (Desktop Only) */}
      <div className="fixed left-6 bottom-24 z-30 hidden lg:flex items-center gap-4 origin-bottom-left -rotate-90 select-none">
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-xs font-mono tracking-widest text-[#8C8C8C] hover:text-[#00FF41] transition-colors"
        >
          {PROFILE.email}
        </a>
        <div className="w-12 h-[1px] bg-[#3A3A3A]" />
      </div>

      {/* Main Footer Section */}
      <footer className="py-28 border-t border-[#3A3A3A] relative z-10 bg-[#212121]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center"
        >
          
          {/* Top Label */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8C8C8C] font-mono mb-6">
            Have a project in mind?
          </p>

          {/* Huge Anton Email Link */}
          <div className="mb-14">
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white hover:text-[#00FF41] transition-colors duration-200 block break-all leading-none"
            >
              {PROFILE.email}
            </a>
          </div>

          {/* Social Links: GitHub & LinkedIn (Replacing Design & Built attribution) */}
          <div className="flex items-center gap-3 mb-6">
            <a
              href="https://github.com/0MarufHasan0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#00FF41] hover:text-[#00FF41] transition-all uppercase tracking-wider select-none"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-maruf-hasann/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#00FF41] hover:text-[#00FF41] transition-all uppercase tracking-wider select-none"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Availability & Location Status Badge */}
          <div className="inline-flex items-center gap-4 sm:gap-6 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF41] inline-block animate-pulse" />
              <span className="text-white">Available for Work</span>
            </div>
            <div className="w-[1px] h-3 bg-[#3A3A3A]" />
            <div className="flex items-center gap-1.5 text-[#8C8C8C]">
              <span>📍 Bangladesh (Remote / Onsite)</span>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="mt-12 text-xs font-mono text-[#555555]">
            © {new Date().getFullYear()} {PROFILE.name}. ALL RIGHTS RESERVED.
          </div>
        </motion.div>
      </footer>
    </>
  );
}
