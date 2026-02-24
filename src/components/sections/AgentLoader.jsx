import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingSteps = [
  "Establishing secure connection...",
  "Loading agent dossier...",
  "Decrypting mission files...",
  "Initializing tactical interface...",
  "Agent profile ready.",
];

export default function AgentLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 0.5;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const thresholds = [0, 20, 45, 70, 95];
    for (let i = thresholds.length - 1; i >= 0; i--) {
      if (progress >= thresholds[i]) {
        setStepIndex(i);
        break;
      }
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 100 && !exiting) {
      setExiting(true);
      setTimeout(() => onComplete(), 800);
    }
  }, [progress, exiting, onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#0f1015" }}
        >
          <div className="w-80">
            {/* Agent identifier */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{ color: "#ff4655", fontFamily: "monospace" }}
              >
                AGENT-47 // INITIALIZING
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-1 w-full bg-white/5 mb-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-red"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
              {/* Scanline effect on bar */}
              <motion.div
                className="absolute inset-y-0 w-8"
                style={{
                  left: `${Math.min(progress, 100)}%`,
                  background:
                    "linear-gradient(90deg, rgba(255,70,85,0.4), transparent)",
                  transform: "translateX(-100%)",
                }}
              />
            </div>

            {/* Percentage */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: "#666", fontFamily: "monospace" }}
              >
                {loadingSteps[stepIndex]}
              </span>
              <span
                className="text-sm font-heading tracking-wider"
                style={{ color: "#ff4655" }}
              >
                {Math.floor(Math.min(progress, 100))}%
              </span>
            </div>

            {/* Decorative tactical lines */}
            <div className="flex items-center gap-2 opacity-20">
              <div className="h-px flex-1 bg-accent-red" />
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path d="M4 0L8 4L4 8L0 4Z" fill="#ff4655" />
              </svg>
              <div className="h-px flex-1 bg-accent-red" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
