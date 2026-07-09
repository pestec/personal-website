import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 md:mb-10 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-6 origin-left bg-accent-400/70"
          aria-hidden="true"
        />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-mist-50 sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
