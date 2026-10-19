"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Send, Sparkles } from "lucide-react";
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Maruf,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    setTimeout(() => {
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 600);
  };

  return (
    <>
      {/* Fixed Vertical Email on the Far Left (Desktop Only) */}
      <div className="fixed left-6 bottom-24 z-30 hidden lg:flex items-center gap-4 origin-bottom-left -rotate-90 select-none">
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-xs font-mono tracking-widest text-[#8C8C8C] hover:text-[#C6FF00] transition-colors"
        >
          {PROFILE.email}
        </a>
        <div className="w-12 h-[1px] bg-[#3A3A3A]" />
      </div>

      {/* Main Footer Section */}
      <footer id="contact" className="py-24 sm:py-28 border-t border-[#3A3A3A] relative z-10 bg-[#212121]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center"
        >
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#8C8C8C] font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse inline-block" />
            <span>Have a project or opportunity?</span>
          </div>

          {/* Huge Anton Email Link & Quick Copy */}
          <div className="mb-8 flex flex-col items-center">
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white hover:text-[#C6FF00] transition-colors duration-200 block break-all leading-none"
            >
              {PROFILE.email}
            </a>

            {/* 1-Click Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all rounded-none uppercase tracking-wider select-none focus:outline-none"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C6FF00]" />
                  <span className="text-[#C6FF00]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Interactive Contact Form */}
          <div className="w-full max-w-[620px] mb-14 text-left">
            <div className="relative border border-[#3A3A3A] bg-[#1E1E1E]/80 backdrop-blur-sm p-6 sm:p-8">
              {/* L-shaped corner brackets */}
              <div
                className="absolute -top-[2px] -right-[2px] w-5 h-5 border-t-2 border-r-2 border-[#C6FF00] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-[2px] -left-[2px] w-5 h-5 border-b-2 border-l-2 border-[#C6FF00] pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between border-b border-[#3A3A3A]/80 pb-4 mb-6">
                <div>
                  <h4 className="font-anton text-xl tracking-wide uppercase text-white">
                    SEND A DIRECT MESSAGE
                  </h4>
                  <p className="text-xs font-mono text-[#8C8C8C] mt-1">
                    Fill the form to reach out directly.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#C6FF00]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                      Your Name <span className="text-[#C6FF00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#161616] border border-[#3A3A3A] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] font-roboto focus:outline-none focus:border-[#C6FF00] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                      Your Email <span className="text-[#C6FF00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full bg-[#161616] border border-[#3A3A3A] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] font-roboto focus:outline-none focus:border-[#C6FF00] transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Your Message <span className="text-[#C6FF00]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full bg-[#161616] border border-[#3A3A3A] px-3.5 py-2.5 text-sm text-white placeholder-[#555555] font-roboto focus:outline-none focus:border-[#C6FF00] transition-colors rounded-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C6FF00] text-[#212121] hover:bg-white text-xs font-mono font-bold tracking-wider uppercase transition-colors rounded-none focus:outline-none disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 stroke-[2.2]" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitted && (
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C6FF00]"
                      >
                        <Check className="w-4 h-4" />
                        <span>Opening your mail client...</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>

          {/* Social Links: GitHub, LinkedIn & Facebook */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href="https://github.com/0MarufHasan0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all uppercase tracking-wider select-none"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-maruf-hasann/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all uppercase tracking-wider select-none"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.facebook.com/share/1CSRTeapaW/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all uppercase tracking-wider select-none"
            >
              <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
          </div>

          {/* Availability & Location Status Badge */}
          <div className="inline-flex items-center gap-4 sm:gap-6 px-4 py-2 border border-[#3A3A3A] bg-[#262626] text-xs font-mono text-[#D0D0D0] select-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] inline-block animate-pulse" />
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
