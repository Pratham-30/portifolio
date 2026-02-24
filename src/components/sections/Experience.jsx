import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Service Record" subtitle="Deployment history" />

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-accent-red/20" />

          {experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="relative pl-12 md:pl-20 pb-12 last:pb-0">
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-accent-red shadow-lg shadow-accent-red/50">
                  <div className="absolute inset-0 bg-accent-red animate-ping opacity-20" />
                </div>

                <div className="glass rounded-sm p-6 md:p-8 border border-val-border hover:border-accent-red/20 transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold rounded-sm bg-accent-red/15 text-accent-red mb-4 tracking-[0.15em] uppercase">
                    {exp.date}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl tracking-wider uppercase text-text-primary mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent-red font-medium mb-4 text-sm">{exp.company}</p>
                  <p className="text-text-secondary leading-relaxed text-sm">{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
