import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88dvh] flex-col items-center justify-center px-6 pt-24 pb-10 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-3xl flex-col items-center"
      >
        <motion.div
          variants={item}
          className="glass mb-8 flex h-24 w-24 items-center justify-center rounded-full text-3xl font-display font-medium text-mist-50 sm:h-28 sm:w-28"
        >
          CP
        </motion.div>

        <motion.span
          variants={item}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-mist-200"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-moss-400" aria-hidden="true" />
          {profile.location}
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-mist-50 sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-balance font-display text-lg font-medium tracking-tight text-accent-400 sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist-200 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-400 active:scale-[0.98]"
          >
            <FiDownload aria-hidden="true" />
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="glass inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-mist-50 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <FiMail aria-hidden="true" />
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-mist-400 transition-colors hover:text-mist-50"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
