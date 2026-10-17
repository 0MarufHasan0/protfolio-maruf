"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS, MENU_LINKS, PROFILE } from "@/lib/data";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  // Lock body scroll when side menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Black 80% Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-none cursor-pointer"
            aria-hidden="true"
          />

          {/* Right Side Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] md:w-[35%] lg:w-[26%] bg-[#333333] z-50 p-8 md:p-10 flex flex-col justify-between text-white border-l border-[#3A3A3A] select-none shadow-none"
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between border-b border-[#3A3A3A] pb-6">
              <span className="font-anton text-lg tracking-wider text-[#CFCFCF]">
                NAVIGATION
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center text-[#D0D0D0] hover:text-[#00FF41] hover:border-[#00FF41] border border-transparent transition-colors focus:outline-none"
              >
                <X className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* Middle Content Columns: SOCIAL & MENU */}
            <div className="grid grid-cols-2 gap-8 my-auto py-8">
              {/* SOCIAL Column */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#8C8C8C] mb-6 font-mono">
                  SOCIAL
                </h4>
                <ul className="space-y-4">
                  {SOCIAL_LINKS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target={item.isDownload ? "_self" : "_blank"}
                        rel="noreferrer"
                        download={item.isDownload}
                        className="group inline-flex items-center gap-1.5 text-sm text-[#D0D0D0] hover:text-[#00FF41] transition-colors"
                      >
                        <span>{item.name}</span>
                        {!item.isDownload && (
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MENU Column */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#8C8C8C] mb-6 font-mono">
                  MENU
                </h4>
                <ul className="space-y-4">
                  {MENU_LINKS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-3 text-sm text-[#FFFFFF] hover:text-[#00FF41] transition-colors"
                      >
                        <span
                          className="w-2 h-2 rounded-full inline-block flex-shrink-0"
                          style={{ backgroundColor: item.dotColor }}
                        />
                        <span className="font-medium tracking-wide">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: GET IN TOUCH + email */}
            <div className="pt-6 border-t border-[#3A3A3A]">
              <p className="text-xs uppercase tracking-widest text-[#8C8C8C] mb-2 font-mono">
                GET IN TOUCH
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-anton text-xl tracking-wide text-white hover:text-[#00FF41] transition-colors block break-all"
              >
                {PROFILE.email}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
