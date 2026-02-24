import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Tag from "../ui/Tag";
import { featuredProject, sideProjects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Missions" subtitle="Operations completed and in progress" />

        <ScrollReveal>
          <div className="mb-12">
            <motion.div
              whileHover={{ borderColor: "rgba(255, 70, 70, 0.3)" }}
              className="glass rounded-sm p-8 border border-accent-red/20 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[10px] font-semibold rounded-sm bg-accent-red/15 text-accent-red tracking-[0.15em] uppercase">
                  {featuredProject.badge}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl tracking-wider uppercase text-text-primary mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl text-sm">
                {featuredProject.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {featuredProject.highlights.map((h, i) => (
                  <div key={i} className="glass rounded-sm p-5 border border-val-border">
                    <h4 className="font-heading tracking-wider uppercase text-text-primary mb-2 text-sm">
                      {h.title}
                    </h4>
                    <p className="text-text-secondary text-xs leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15}>
              <GlassCard className="h-full flex flex-col group">
                <h3 className="font-heading text-xl tracking-wider uppercase text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
