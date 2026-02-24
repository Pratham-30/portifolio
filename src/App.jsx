import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LaunchScreen from "./components/sections/LaunchScreen";
import AgentLoader from "./components/sections/AgentLoader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import StarCanvas from "./components/effects/StarCanvas";
import FloatingOrbs from "./components/effects/FloatingOrbs";
import SpaceDoodles from "./components/effects/SpaceDoodles";

// Stagger wrapper — each child drops in from above with a delay
function DropIn({ children, delay = 0, duration = 0.7, y = 60 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out curve
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [phase, setPhase] = useState("launch"); // launch → loading → ready
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (phase === "ready" && audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {});
    }
  }, [phase]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/spacetheme.mp3" loop preload="auto" />

      {phase === "launch" && <LaunchScreen onLaunch={() => setPhase("loading")} />}

      {phase === "loading" && <AgentLoader onComplete={() => setPhase("ready")} />}

      {phase === "ready" && (
        <div className="relative min-h-screen">
          {/* Mute button */}
          <button
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-sm border border-val-border glass text-text-secondary hover:border-accent-red/40 hover:text-accent-red transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 010 14.14" />
                <path d="M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            )}
          </button>
          {/* Background effects fade in first */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0 }}
          >
            <StarCanvas />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <FloatingOrbs />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            <SpaceDoodles />
          </motion.div>

          {/* Navbar drops down from top */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
          </motion.div>

          <main>
            {/* Hero — each piece inside has its own stagger,
                but we delay the whole section slightly */}
            <DropIn delay={0.3} y={50}>
              <Hero />
            </DropIn>

            {/* Remaining sections drop in with increasing delays.
                They're below the fold so the user sees them cascade
                as they appear during scroll, but if they scroll
                fast they'll catch the tail end of these animations */}
            <DropIn delay={0.9} y={80}>
              <Skills />
            </DropIn>

            <DropIn delay={1.1} y={80}>
              <Projects />
            </DropIn>

            <DropIn delay={1.3} y={80}>
              <Experience />
            </DropIn>

            <DropIn delay={1.5} y={80}>
              <Contact />
            </DropIn>
          </main>

          <DropIn delay={1.7} y={30}>
            <Footer />
          </DropIn>
        </div>
      )}
    </>
  );
}

export default App;
