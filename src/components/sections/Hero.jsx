import { motion } from "framer-motion";
import Button from "../ui/Button";
import { personalInfo, aboutStats } from "../../data/portfolio";
import { FiGithub } from "react-icons/fi";

const dropIn = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 max-w-6xl mx-auto"
    >
      {/* Big heading */}
      <motion.div {...dropIn(0.3)} className="mb-10">
        <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl tracking-wider uppercase leading-[0.9]">
          <span className="text-text-primary">Code.</span>
          <br />
          <span className="gradient-text">Deploy. Repeat.</span>
        </h1>
      </motion.div>

      {/* Deployed badge — spans full width */}
      <motion.div {...dropIn(0.45)} className="mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-accent-red/30 bg-accent-red/10 text-accent-red text-xs tracking-[0.15em] uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
          Currently Deployed at Livspace Corp. · Bangalore, India
        </span>
      </motion.div>

      {/* Agent Card + Bio side by side */}
      <motion.div {...dropIn(0.5)} className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Agent Card */}
        <div className="shrink-0 self-start md:mt-9">
          <div className="relative glass rounded-sm overflow-hidden w-56">
          <div className="absolute top-4 right-4 w-8 h-1 bg-accent-red" />
          <div className="w-full aspect-square overflow-hidden">
            <img src="/agentf7.png" alt="Agent 47 Pratham" className="w-full h-full object-cover" />
          </div>
          <div className="px-5 pb-5">
            <h2 className="font-heading text-2xl tracking-wider uppercase">
              <span className="text-text-primary">Agent 47 </span>
              <span className="text-accent-red">Pratham</span>
            </h2>
            <p className="text-text-secondary text-xs tracking-[0.15em] font-mono">
              Frontend Operative
            </p>
          </div>
          </div>
        </div>

        {/* Bio + CTA + Stats */}
        <div className="flex flex-col justify-between">
          {/* Bio */}
          <h3 className="font-heading text-lg tracking-[0.15em] uppercase text-text-secondary mb-3">Agent Overview</h3>
          <div className="border-l-2 border-accent-red pl-5 mb-6">
            <p className="text-text-primary text-base leading-relaxed mb-3 font-light text-justify">
              I'm <span className="font-normal">Pratham Nigam</span>, a passionate Frontend Developer currently working as an SDE-1 at <span className="font-normal">Livspace</span>, one of India's leading home interiors platforms.
            </p>
            <p className="text-text-primary text-base leading-relaxed mb-3 font-light text-justify">
              I specialize in building clean, performant, and visually engaging web experiences using <span className="font-normal">React, Angular, and Vue</span>. From parametric 3D design tools to AI-powered platforms, I enjoy tackling complex problems with elegant frontend solutions.
            </p>
            <p className="text-text-primary text-base leading-relaxed font-light text-justify">
              When I'm not shipping code, I'm exploring side projects that push my boundaries — always learning, always building.
            </p>
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-3 mb-6">
            <Button href="#projects" className="flex-1 max-w-xs">
              View Projects <span className="ml-1">&rarr;</span>
            </Button>
            <a
              href="#contact"
              className="w-12 h-12 flex items-center justify-center rounded-sm border border-val-border text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M4 4h16v16H4z" />
                <path d="M4 4l8 8 8-8" />
              </svg>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-sm border border-val-border text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors"
            >
              <FiGithub className="w-[18px] h-[18px]" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-sm border border-val-border text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {aboutStats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-sm py-4 text-center border border-val-border"
              >
                <div className="text-2xl font-heading tracking-wider gradient-text">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-[10px] tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-text-secondary text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1L8 8L15 1" stroke="#ff4655" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
