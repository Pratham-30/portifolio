import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-0.5 bg-accent-red" />
        <h2 className="font-heading text-4xl md:text-5xl font-normal tracking-wider uppercase text-text-primary">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary max-w-xl text-sm uppercase tracking-widest pl-12">{subtitle}</p>
      )}
    </motion.div>
  );
}
