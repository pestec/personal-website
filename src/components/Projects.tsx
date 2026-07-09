import { FiArrowUpRight } from "react-icons/fi";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <SectionHeading eyebrow="Personal Projects" title="Things I've built" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <GlassCard
            key={project.name}
            hover
            delay={i * 0.06}
            className="group flex flex-col p-6 sm:p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-moss-400">
                {project.year}
              </span>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="cursor-pointer text-mist-400 transition-colors group-hover:text-accent-400"
                >
                  <FiArrowUpRight size={18} />
                </a>
              )}
            </div>
            <h3 className="mt-3 font-display text-xl font-medium text-mist-50">
              {project.name}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-200 sm:text-base">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-mist-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
