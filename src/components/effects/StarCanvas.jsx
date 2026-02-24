import { useEffect, useRef } from "react";

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < Math.min(count, 150); i++) {
        const isLine = Math.random() > 0.6;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isLine ? 0 : Math.random() * 1.5 + 0.5,
          lineLen: isLine ? Math.random() * 30 + 10 : 0,
          lineAngle: Math.random() * Math.PI,
          speed: Math.random() * 0.2 + 0.03,
          opacity: Math.random() * 0.4 + 0.1,
          isRed: Math.random() > 0.7,
          drift: (Math.random() - 0.5) * 0.3,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -30) {
          p.y = canvas.height + 30;
          p.x = Math.random() * canvas.width;
        }

        const color = p.isRed
          ? `rgba(255, 70, 85, ${p.opacity})`
          : `rgba(236, 232, 225, ${p.opacity * 0.5})`;

        if (p.lineLen > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(
            p.x + Math.cos(p.lineAngle) * p.lineLen,
            p.y + Math.sin(p.lineAngle) * p.lineLen
          );
          ctx.strokeStyle = color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    const onResize = () => { resize(); createParticles(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
