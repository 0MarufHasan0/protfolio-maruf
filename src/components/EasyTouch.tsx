"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "@/lib/data";

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function EasyTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const linkedinLink =
    SOCIAL_LINKS.find((s) => s.name.toLowerCase() === "linkedin")?.url ||
    "https://www.linkedin.com/in/md-maruf-hasann/";

  const facebookLink =
    SOCIAL_LINKS.find((s) => s.name.toLowerCase() === "facebook")?.url ||
    "https://www.facebook.com/share/1CSRTeapaW/";

  const contactChannels = [
    {
      name: "Gmail",
      subtitle: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: GmailIcon,
      iconColor: "#EA4335",
      badge: "Direct Mail",
      isMail: true,
    },
    {
      name: "LinkedIn",
      subtitle: "md-maruf-hasann",
      href: linkedinLink,
      icon: LinkedinIcon,
      iconColor: "#0A66C2",
      badge: "Professional",
      isMail: false,
    },
    {
      name: "Facebook",
      subtitle: "Connect on Facebook",
      href: facebookLink,
      icon: FacebookIcon,
      iconColor: "#1877F2",
      badge: "Social Chat",
      isMail: false,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-4 sm:right-6 md:right-8 z-40 select-none"
    >
      {/* Popover Menu Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 mb-3 w-[290px] sm:w-[320px] bg-[#1E1E1E]/95 backdrop-blur-md border border-[#3A3A3A] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-white"
          >
            {/* L-shaped top-right corner bracket */}
            <div
              className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-[#C6FF00] pointer-events-none"
              aria-hidden="true"
            />
            {/* L-shaped bottom-left corner bracket */}
            <div
              className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-[#C6FF00] pointer-events-none"
              aria-hidden="true"
            />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#3A3A3A]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse inline-block" />
                <span className="font-anton text-base tracking-wider uppercase text-white">
                  LET&apos;S TALK
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="w-7 h-7 flex items-center justify-center text-[#8C8C8C] hover:text-[#C6FF00] transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] font-mono text-[#8C8C8C] uppercase tracking-wider mb-3">
              Reach out directly via:
            </p>

            {/* Channels List */}
            <div className="space-y-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target={channel.isMail ? "_self" : "_blank"}
                    rel={channel.isMail ? undefined : "noreferrer"}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between p-2.5 border border-[#2E2E2E] bg-[#262626]/60 hover:bg-[#262626] hover:border-[#C6FF00] transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-none flex items-center justify-center border border-[#3A3A3A] bg-[#1E1E1E] group-hover:border-[#C6FF00] transition-colors flex-shrink-0"
                        style={{ color: channel.iconColor }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-[#C6FF00] transition-colors">
                            {channel.name}
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.2 border border-[#3A3A3A] bg-[#1A1A1A] text-[#8C8C8C]">
                            {channel.badge}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-[#8C8C8C] truncate max-w-[160px]">
                          {channel.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#C6FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>

            {/* Quick Status Bar */}
            <div className="mt-3 pt-2.5 border-t border-[#3A3A3A]/60 flex items-center justify-between text-[10px] font-mono text-[#8C8C8C]">
              <span>Active Response</span>
              <span className="text-[#C6FF00]">⚡ Available</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button (Easy Touch - LET'S TALK) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Let's Talk - Quick Contact"
        className={`group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 border transition-all duration-300 focus:outline-none shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
          isOpen
            ? "bg-[#C6FF00] text-[#212121] border-[#C6FF00] scale-95"
            : "bg-[#1E1E1E]/95 backdrop-blur-md text-white border-[#C6FF00]/60 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-[#212121] hover:scale-105 active:scale-95"
        }`}
      >
        {/* Animated Corner Brackets on button */}
        <span
          className="absolute -top-[2px] -right-[2px] w-2.5 h-2.5 border-t-2 border-r-2 border-[#C6FF00] pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-[2px] -left-[2px] w-2.5 h-2.5 border-b-2 border-l-2 border-[#C6FF00] pointer-events-none"
          aria-hidden="true"
        />

        {isOpen ? (
          <X className="w-4 h-4 stroke-[2.5]" />
        ) : (
          <span className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#C6FF00] group-hover:bg-[#212121] animate-ping absolute inline-flex opacity-75" />
            <span className="w-2 h-2 rounded-full bg-[#C6FF00] group-hover:bg-[#212121] relative inline-flex" />
          </span>
        )}

        <span className="font-anton text-xs sm:text-sm tracking-wider uppercase">
          {isOpen ? "CLOSE" : "LET'S TALK"}
        </span>

        {!isOpen && (
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    </div>
  );
}
