"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PROFILE, STATS } from "@/lib/data";

export default function Hero() {
  const { scrollY } = useScroll();

  // Subtle parallax physics when scrolling up/down
  const textTranslateY = useSpring(useTransform(scrollY, [0, 500], [0, 30]), {
    stiffness: 100,
    damping: 30,
  });
  const photoTranslateY = useSpring(useTransform(scrollY, [0, 500], [0, 60]), {
    stiffness: 90,
    damping: 25,
  });
  const statsTranslateY = useSpring(useTransform(scrollY, [0, 500], [0, 25]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen pt-[120px] pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Main 3-Column / Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Center Column: Typography, Intro & CTA (Desktop: col-span-6) */}
          <motion.div
            style={{ y: textTranslateY }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col order-2 lg:order-1"
          >
            {/* Big Headline */}
            <div className="select-none tracking-tight">
              <h1 className="font-anton text-[52px] sm:text-[76px] md:text-[96px] xl:text-[104px] leading-[0.9] text-[#C6FF00] uppercase">
                {PROFILE.rolePrefix}
              </h1>
              <h1 className="font-anton text-[52px] sm:text-[76px] md:text-[96px] xl:text-[104px] leading-[0.9] text-white uppercase ml-3 sm:ml-6 md:ml-12 mt-1">
                {PROFILE.roleSuffix}
              </h1>
            </div>

            {/* Intro Paragraph */}
            <p className="mt-6 sm:mt-8 text-base md:text-lg text-[#D0D0D0] font-light max-w-[500px] leading-relaxed">
              {PROFILE.intro}
            </p>

            {/* CTA & Status Indicator */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <a
                href="#contact"
                className="inline-block bg-[#C6FF00] text-[#212121] px-8 py-3.5 font-bold uppercase tracking-wider text-sm rounded-none hover:bg-white transition-colors duration-200 focus:outline-none"
              >
                LET&apos;S TALK
              </a>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#8C8C8C] tracking-wide">
                <span className="w-2 h-2 bg-white rounded-full inline-block animate-pulse" />
                <span>{PROFILE.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Photo with Corner Brackets (Desktop: col-span-4) */}
          <motion.div
            style={{ y: photoTranslateY }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] xl:w-[400px] h-[340px] sm:h-[420px] lg:h-[480px]">
              {/* Photo Box */}
              <div className="relative w-full h-full border border-[#3A3A3A] bg-[#1A1A1A] overflow-hidden group">
                <Image
                  src="/me.jpg"
                  alt={PROFILE.fullName}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                />
              </div>

              {/* L-shaped corner bracket: Top-Right only */}
              <div
                className="absolute -top-[3px] -right-[3px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#C6FF00] pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* L-shaped corner bracket: Bottom-Left only */}
              <div
                className="absolute -bottom-[3px] -left-[3px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#C6FF00] pointer-events-none z-10"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Far Right Column: Stats (Desktop: col-span-2) */}
          <motion.div
            style={{ y: statsTranslateY }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 grid grid-cols-3 gap-3 lg:flex lg:flex-col lg:space-y-12 order-3 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#3A3A3A]"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="font-anton text-3xl sm:text-4xl lg:text-5xl text-[#C6FF00] leading-none tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#8C8C8C] mt-2 font-roboto font-normal leading-tight max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
