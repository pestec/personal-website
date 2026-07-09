import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  hover?: boolean;
  delay?: number;
};

export default function GlassCard({
  children,
  className = "",
  hover = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`group glass rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-shadow duration-300 ${
        hover ? "hover:shadow-[0_12px_50px_rgba(201,161,90,0.15)]" : ""
      } ${className}`}
    >
      <span className="glass-sheen" />
      {children}
    </motion.div>
  );
}
