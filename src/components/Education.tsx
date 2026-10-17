"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { EDUCATION, EducationItem } from "@/lib/data";

function FloralAsterisk({ className = "w-[18px] h-[18px] text-[#D0D0D0]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" />
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" transform="rotate(60 12 12)" />
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" transform="rotate(120 12 12)" />
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" transform="rotate(180 12 12)" />
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" transform="rotate(240 12 12)" />
      <rect x="10.5" y="1.5" width="3" height="9.5" rx="1.5" transform="rotate(300 12 12)" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 border-t border-[#3A3A3A]/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header: Asterisk + EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-16 select-none"
        >
          <FloralAsterisk className="w-5 h-5 text-[#D0D0D0]" />
          <h3 className="text-sm uppercase tracking-[0.18em] text-[#D0D0D0] font-roboto font-medium">
            EDUCATION
          </h3>
        </motion.div>

        {/* Education Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((item: EducationItem, idx: number) => {
            const isCertification = item.badge.toLowerCase().includes("training") || item.badge.toLowerCase().includes("certification");

            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group border border-[#3A3A3A] bg-[#262626]/40 hover:bg-[#262626]/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
              >
                {/* L-shaped subtle hover corner brackets */}
                <div
                  className="absolute -top-[1px] -right-[1px] w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-[#00FF41] transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-[#00FF41] transition-colors duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Card Top: Index, Badge & Period */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#3A3A3A]/60">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#8C8C8C] tracking-widest">
                        {item.index}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 border border-[#3A3A3A] bg-[#212121] text-[#A0A0A0]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Period with Calendar & Pulse */}
                    <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 border border-[#3A3A3A] bg-[#212121] text-[#D0D0D0]">
                      {item.current ? (
                        <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse inline-block" />
                      ) : (
                        <Calendar className="w-3.5 h-3.5 text-[#8C8C8C]" />
                      )}
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree / Course Title */}
                  <h4 className="font-anton text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#00FF41] transition-colors duration-200 uppercase tracking-wide leading-tight mt-6 mb-3">
                    {item.degree}
                  </h4>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-sm sm:text-base text-[#00FF41] font-mono tracking-wide mb-4">
                    {isCertification ? (
                      <Award className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                    )}
                    <span>{item.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Skills / Key Takeaways Tags */}
                <div className="pt-4 border-t border-[#3A3A3A]/60">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono text-[#8C8C8C] bg-[#1E1E1E] px-2.5 py-1 border border-[#3A3A3A] group-hover:border-[#00FF41]/40 group-hover:text-[#D0D0D0] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
