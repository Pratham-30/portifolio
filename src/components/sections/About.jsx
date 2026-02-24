import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { aboutBio, aboutStats, interests } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" subtitle="Who I am and what drives me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <GlassCard className="flex items-center justify-center aspect-square max-w-sm mx-auto" hover={false}>
              <span className="text-8xl">👨‍💻</span>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {aboutBio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">{paragraph}</p>
              ))}

              <div className="pt-3">
                <p className="text-text-secondary/40 text-xs mb-3 tracking-[0.2em] uppercase">
                  Beyond the code //
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item, i) => (
                    <motion.span
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 0 15px ${item.glowColor}40`,
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm glass text-sm cursor-default transition-colors duration-300 border border-val-border"
                    >
                      <span>{item.emoji}</span>
                      <span className="text-text-primary text-xs font-medium">{item.label}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            {aboutStats.map((stat, i) => (
              <GlassCard key={i} className="text-center py-6" hover={false}>
                <div className="text-3xl font-heading tracking-wider gradient-text mb-1">{stat.value}</div>
                <div className="text-text-secondary text-xs uppercase tracking-widest">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
