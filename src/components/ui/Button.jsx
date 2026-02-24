import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", href, className = "", ...props }) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-heading text-sm tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "gradient-bg text-white hover:shadow-lg hover:shadow-accent-red/30 hover:scale-105 rounded-sm",
    outline: "border border-val-border text-text-primary hover:border-accent-red/50 hover:shadow-lg hover:shadow-accent-red/20 hover:scale-105 bg-transparent rounded-sm",
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  );
}
