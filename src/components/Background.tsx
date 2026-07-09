import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import { certificates, education, skills } from "../data/portfolio";

export default function Background() {
  return (
    <section id="background" className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <SectionHeading eyebrow="Background" title="Skills & education" />

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard className="p-6 sm:p-7">
          <div className="flex flex-col gap-4">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-mist-400">
                  {group.category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-mist-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard delay={0.08} className="flex flex-col gap-5 p-6 sm:p-7">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-moss-400">
              {education.start} — {education.end}
            </span>
            <h3 className="mt-1.5 font-display text-lg font-medium text-mist-50">
              {education.degree}
            </h3>
            <p className="mt-0.5 text-sm text-mist-200">
              {education.school}, {education.location}
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-mist-400">
              Certificates
            </h3>
            <ul className="mt-2.5 flex flex-col gap-2">
              {certificates.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col text-xs sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-medium text-mist-50">{cert.name}</span>
                  <span className="text-mist-400">
                    {cert.issuer} · {cert.grade}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
