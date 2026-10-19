"use client";

import { motion, Variants } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { SKILL_CATEGORIES, Skill } from "@/lib/data";

function renderSkillIcon(name: string) {
  const iconSize = 22;

  switch (name) {
    case "JavaScript":
      return <SiJavascript size={iconSize} color="#F7DF1E" />;
    case "TypeScript":
      return <SiTypescript size={iconSize} color="#3178C6" />;
    case "React":
      return <SiReact size={iconSize} color="#61DAFB" />;
    case "Next.js":
      return <SiNextdotjs size={iconSize} color="#FFFFFF" />;
    case "Tailwind CSS":
      return <SiTailwindcss size={iconSize} color="#06B6D4" />;
    case "HeroUI":
      // HeroUI / NextUI signature geometric hexagon/layers logo
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0072F5"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "shadcn/ui":
      // shadcn signature backslash mark
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="4" y1="20" x2="20" y2="4" stroke="#FFFFFF" />
          <line x1="14" y1="20" x2="20" y2="14" stroke="#C6FF00" />
        </svg>
      );
    case "Node.js":
      return <SiNodedotjs size={iconSize} color="#5FA04E" />;
    case "Express.js":
      return <SiExpress size={iconSize} color="#FFFFFF" />;
    case "MongoDB":
      return <SiMongodb size={iconSize} color="#47A248" />;
    case "Better Auth":
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF5722"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "REST API":
      return (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C6FF00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="0" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "Git":
      return <SiGit size={iconSize} color="#F05032" />;
    case "GitHub":
      return <SiGithub size={iconSize} color="#FFFFFF" />;
    default:
      return <div className="w-5 h-5 bg-white/20" />;
  }
}

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

export default function Stack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-[#3A3A3A]/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header: Exact 6-Petal Asterisk + MY STACK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-16 select-none"
        >
          <FloralAsterisk className="w-5 h-5 text-[#D0D0D0]" />
          <h3 className="text-sm uppercase tracking-[0.18em] text-[#D0D0D0] font-roboto font-medium">
            MY STACK
          </h3>
        </motion.div>

        {/* Categories Rows */}
        <div className="space-y-16 md:space-y-24">
          {SKILL_CATEGORIES.map((categoryGroup) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center border-b border-[#3A3A3A]/40 pb-16"
            >
              {/* Left Column: Category Name Made Significantly Bigger (More Pixels) */}
              <div className="md:col-span-5">
                <h4 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#CFCFCF] tracking-wide uppercase leading-none">
                  {categoryGroup.category}
                </h4>
              </div>

              {/* Right Column: Skills list with colored logo + name (no boxes) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="md:col-span-7 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6"
              >
                {categoryGroup.skills.map((skill: Skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-3 group cursor-default select-none py-1"
                  >
                    <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {renderSkillIcon(skill.name)}
                    </div>
                    <span className="text-sm md:text-base font-roboto text-[#D0D0D0] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
