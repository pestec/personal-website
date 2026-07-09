import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolio";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#background", label: "Background" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left bg-gradient-to-r from-accent-400 via-accent-500 to-moss-400"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <nav
          className={`glass flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-shadow duration-300 sm:px-6 ${
            scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "shadow-none"
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg font-medium tracking-tight text-mist-50"
            aria-label={`${profile.name} — home`}
          >
            CP<span className="text-accent-400">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-mist-200 transition-colors duration-200 hover:text-mist-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="/cv.pdf"
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-400 active:scale-[0.98]"
            >
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer rounded-full p-2 text-mist-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl px-6 md:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-mist-200 transition-colors hover:bg-white/5 hover:text-mist-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-ink-950"
              >
                <FiDownload aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
