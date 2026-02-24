import { useEffect, useState } from "react";

export default function FloatingOrbs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const orbs = [
    { color: "bg-accent-red/8", size: "w-96 h-96", speed: 0.02, baseX: "15%", baseY: "25%" },
    { color: "bg-accent-darkred/6", size: "w-80 h-80", speed: 0.015, baseX: "75%", baseY: "55%" },
    { color: "bg-red-900/5", size: "w-72 h-72", speed: 0.01, baseX: "50%", baseY: "15%" },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.color} ${orb.size}`}
          style={{
            left: orb.baseX,
            top: orb.baseY,
            transform: `translate(${mouse.x * orb.speed - 20}px, ${mouse.y * orb.speed - 20}px)`,
            transition: "transform 0.8s ease-out",
          }}
        />
      ))}
    </div>
  );
}
