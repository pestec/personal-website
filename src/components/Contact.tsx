import { FiMail } from "react-icons/fi";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import { interests, profile } from "../data/portfolio";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <SectionHeading eyebrow="Contact" title="Let's talk data" align="center" />

      <GlassCard className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
        <p className="max-w-xl text-balance leading-relaxed text-mist-200">
          {interests}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-400 active:scale-[0.98]"
        >
          <FiMail aria-hidden="true" />
          {profile.email}
        </a>
      </GlassCard>

      <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-mist-400">
        <p>
          © {year} {profile.name}. Built with React, Tailwind CSS & Framer Motion.
        </p>
      </footer>
    </section>
  );
}
