import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`glass rounded-sm p-6 transition-all duration-300 ${hover ? "glass-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-red/10" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
