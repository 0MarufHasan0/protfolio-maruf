"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";

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

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const currentPreview = PROJECTS[hoveredIndex ?? activeProjectIndex] ?? PROJECTS[0];

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-[#3A3A3A]/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header: Asterisk + SELECTED PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-16 select-none"
        >
          <FloralAsterisk className="w-5 h-5 text-[#D0D0D0]" />
          <h3 className="text-sm uppercase tracking-[0.18em] text-[#D0D0D0] font-roboto font-medium">
            SELECTED PROJECTS
          </h3>
        </motion.div>

        {/* Desktop View: Editorial Project Rows + Interactive Floating/Right Image Preview */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3 Project Rows (col-span-7) */}
          <div className="lg:col-span-7 border-t border-[#3A3A3A]">
            {PROJECTS.map((project: Project, idx: number) => {
              const isHovered = hoveredIndex === idx;
              const hasHover = hoveredIndex !== null;

              return (
                <motion.div
                  key={project.index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    setActiveProjectIndex(idx);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group block border-b border-[#3A3A3A] py-10 transition-colors select-none"
                >
                  {/* Index */}
                  <div className="text-xs font-mono text-[#8C8C8C] mb-2 tracking-wider">
                    {project.index}
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus:outline-none"
                    >
                      <h4
                        className={`font-anton text-5xl xl:text-6xl uppercase tracking-wide transition-colors duration-200 ${
                          isHovered
                            ? "text-white"
                            : hasHover
                            ? "text-[#555555]"
                            : "text-[#CFCFCF]"
                        }`}
                      >
                        {project.title}
                      </h4>
                    </a>
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight
                        className={`w-6 h-6 stroke-[1.8] transition-all duration-200 ${
                          isHovered
                            ? "text-[#C6FF00] translate-x-1 -translate-y-1 opacity-100"
                            : "text-[#555555] opacity-0"
                        }`}
                      />
                    </a>
                  </div>

                  {/* Tech Tags & Direct Action Links */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8C8C8C]">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tag} className="flex items-center gap-3">
                          <span
                            className={
                              isHovered ? "text-[#D0D0D0]" : "text-[#8C8C8C]"
                            }
                          >
                            {tag}
                          </span>
                          {tagIdx < project.tags.length - 1 && (
                            <span className="w-1 h-1 bg-[#555555] rounded-full inline-block" />
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Action Links: Live Demo & GitHub Repo */}
                    <div className="flex items-center gap-4 text-xs font-mono">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#C6FF00] hover:underline uppercase tracking-wider"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#8C8C8C] hover:text-white hover:underline uppercase tracking-wider"
                        >
                          <span>GitHub Repo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Display (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full aspect-[16/10] max-w-[500px] border border-[#3A3A3A] bg-[#1A1A1A] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPreview.index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    fill
                    className="object-cover object-top"
                    sizes="500px"
                  />
                  {/* Subtle index watermark in preview */}
                  <div className="absolute bottom-3 right-4 font-mono text-xs text-[#8C8C8C] bg-black/60 px-2 py-1 border border-[#3A3A3A]">
                    {currentPreview.index} {"//"} {currentPreview.title}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile View: Stacked Image -> Index -> Title -> Tags */}
        <div className="lg:hidden space-y-14">
          {PROJECTS.map((project: Project, idx: number) => (
            <motion.div
              key={project.index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-[#3A3A3A] pb-10 space-y-5"
            >
              {/* Image on top */}
              <div className="relative w-full aspect-[16/10] border border-[#3A3A3A] bg-[#1A1A1A] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Index */}
              <div className="text-xs font-mono text-[#8C8C8C] tracking-wider">
                {project.index}
              </div>

              {/* Title */}
              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between group"
              >
                <h4 className="font-anton text-4xl text-white uppercase tracking-wide group-hover:text-[#C6FF00] transition-colors">
                  {project.title}
                </h4>
                <ArrowUpRight className="w-5 h-5 text-[#C6FF00]" />
              </a>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#8C8C8C]">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tag} className="flex items-center gap-2.5">
                    <span>{tag}</span>
                    {tagIdx < project.tags.length - 1 && (
                      <span className="w-1 h-1 bg-[#555555] rounded-full inline-block" />
                    )}
                  </span>
                ))}
              </div>

              {/* Action Buttons for Mobile */}
              <div className="flex items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C6FF00] text-[#C6FF00] text-xs font-mono uppercase tracking-wider hover:bg-[#C6FF00] hover:text-[#212121] transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#3A3A3A] text-[#D0D0D0] text-xs font-mono uppercase tracking-wider hover:border-white hover:text-white transition-all"
                  >
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
