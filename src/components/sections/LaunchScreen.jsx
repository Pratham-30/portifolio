import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LaunchScreen({ onLaunch }) {
  const [clicked, setClicked] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setClicked(true);
    setTimeout(() => onLaunch(), 900);
  };

  return (
    <AnimatePresence>
      {!clicked ? (
        <motion.div
          key="launch"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "#f5f5f5",
            fontFamily: "Times New Roman, serif",
          }}
        >
          <div className="max-w-xl w-full px-6">
            <h1 style={{ fontSize: "24px", fontWeight: "normal", color: "#000", marginBottom: "4px", fontFamily: "Times New Roman, serif" }}>
              <span style={{ color: "#cc3344", fontFamily: "monospace", fontSize: "14px" }}>AGENT-47</span>
              {" // "}Pratham Nigam
            </h1>
            <hr style={{ border: "none", borderTop: "1px solid #ccc", margin: "12px 0 24px 0" }} />

            <button
              onClick={handleClick}
              style={{
                background: "none",
                border: "2px solid #999",
                padding: "8px 24px",
                fontSize: "14px",
                color: "#333",
                cursor: "pointer",
                fontFamily: "monospace",
                borderRadius: "0",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#cc3344"; e.target.style.color = "#cc3344"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "#999"; e.target.style.color = "#333"; }}
            >
              {">"} Initialize Agent Portfolio
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="ripple"
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: "300vmax", height: "300vmax", opacity: [1, 1, 0] }}
          transition={{
            width: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            height: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.9, times: [0, 0.7, 1] },
          }}
          style={{
            position: "fixed",
            left: ripple?.x,
            top: ripple?.y,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff4655 0%, #bd3944 30%, #0f1015 70%)",
            zIndex: 100,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
