"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-[#3A3A3A]/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Large Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-28"
        >
          <blockquote className="font-roboto font-light text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1.25] text-white max-w-[1100px] tracking-tight">
            &ldquo;{PROFILE.quote}&rdquo;
          </blockquote>
        </motion.div>

        {/* Section Divider & "This is me." Label */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.98 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-16 origin-left"
        >
          <span className="text-xs uppercase tracking-widest text-[#8C8C8C] font-mono whitespace-nowrap">
            This is me.
          </span>
          <div className="h-[1px] bg-[#3A3A3A] w-full" />
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column: Greeting + GitHub / LinkedIn / Mail Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] tracking-wide">
              {PROFILE.aboutGreeting}
            </h2>

            {/* Social Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/0MarufHasan0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono tracking-wider text-[#D0D0D0] hover:text-[#00FF41] hover:border-[#00FF41] transition-all rounded-none select-none uppercase"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/md-maruf-hasann/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono tracking-wider text-[#D0D0D0] hover:text-[#00FF41] hover:border-[#00FF41] transition-all rounded-none select-none uppercase"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono tracking-wider text-[#D0D0D0] hover:text-[#00FF41] hover:border-[#00FF41] transition-all rounded-none select-none uppercase"
              >
                <Mail className="w-3.5 h-3.5 text-[#00FF41]" />
                <span>Mail</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-6 text-[#D0D0D0] font-light text-base md:text-lg leading-relaxed"
          >
            {PROFILE.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
