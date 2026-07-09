import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-10 md:py-14">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="relative flex flex-col border-l border-white/10 pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <motion.li
            key={`${role.company}-${role.title}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            className="relative py-4 first:pt-0 last:pb-0"
          >
            <span
              className="absolute -left-[2.35rem] top-5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-accent-400 shadow-[0_0_0_4px_rgba(201,161,90,0.18)] sm:-left-[2.85rem]"
              aria-hidden="true"
            />

            <a
              href={role.url}
              target="_blank"
              rel="noreferrer"
              className="group -mx-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
            >
              <span className="flex flex-col">
                <span className="font-display text-base font-medium text-mist-50 transition-colors group-hover:text-accent-400 sm:text-lg">
                  {role.title}
                </span>
                <span className="text-sm text-mist-400">{role.company}</span>
              </span>
              <span className="text-xs uppercase tracking-[0.1em] text-moss-400">
                {role.start} — {role.end}
              </span>
            </a>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
