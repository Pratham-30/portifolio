import { useEffect, useRef } from "react";

export default function SpaceDoodles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let scrollY = 0;
    let elements = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createElements() {
      elements = [];
      for (let i = 0; i < 12; i++) {
        const type = i % 4; // crosshair, diamond, angle-bracket, hex-target
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 3,
          size: 30 + Math.random() * 40,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.002,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: -(Math.random() * 0.05 + 0.01),
          type,
          floatOffset: Math.random() * Math.PI * 2,
          floatAmp: 6 + Math.random() * 10,
        });
      }
    }

    function drawCrosshair(ctx, s) {
      ctx.strokeStyle = "rgba(255, 70, 85, 0.35)";
      ctx.lineWidth = 1.5;
      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
      ctx.stroke();
      // Cross lines with gap
      const gap = s * 0.15;
      const len = s * 0.4;
      ctx.beginPath();
      ctx.moveTo(0, -len); ctx.lineTo(0, -gap);
      ctx.moveTo(0, gap); ctx.lineTo(0, len);
      ctx.moveTo(-len, 0); ctx.lineTo(-gap, 0);
      ctx.moveTo(gap, 0); ctx.lineTo(len, 0);
      ctx.stroke();
      // Center dot
      ctx.beginPath();
      ctx.arc(0, 0, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 70, 85, 0.5)";
      ctx.fill();
    }

    function drawDiamond(ctx, s) {
      ctx.strokeStyle = "rgba(255, 70, 85, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.35);
      ctx.lineTo(s * 0.25, 0);
      ctx.lineTo(0, s * 0.35);
      ctx.lineTo(-s * 0.25, 0);
      ctx.closePath();
      ctx.stroke();
      // Inner diamond
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.15);
      ctx.lineTo(s * 0.1, 0);
      ctx.lineTo(0, s * 0.15);
      ctx.lineTo(-s * 0.1, 0);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 70, 85, 0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 70, 85, 0.25)";
      ctx.stroke();
    }

    function drawAngleBracket(ctx, s) {
      ctx.strokeStyle = "rgba(255, 70, 85, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "square";
      // Left bracket
      ctx.beginPath();
      ctx.moveTo(-s * 0.1, -s * 0.3);
      ctx.lineTo(-s * 0.3, 0);
      ctx.lineTo(-s * 0.1, s * 0.3);
      ctx.stroke();
      // Right bracket
      ctx.beginPath();
      ctx.moveTo(s * 0.1, -s * 0.3);
      ctx.lineTo(s * 0.3, 0);
      ctx.lineTo(s * 0.1, s * 0.3);
      ctx.stroke();
      // Small horizontal lines
      ctx.beginPath();
      ctx.moveTo(-s * 0.08, 0);
      ctx.lineTo(s * 0.08, 0);
      ctx.strokeStyle = "rgba(255, 70, 85, 0.2)";
      ctx.stroke();
    }

    function drawHexTarget(ctx, s) {
      ctx.strokeStyle = "rgba(255, 70, 85, 0.3)";
      ctx.lineWidth = 1;
      // Hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
        const x = Math.cos(angle) * s * 0.35;
        const y = Math.sin(angle) * s * 0.35;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      // Inner dot
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.05, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 70, 85, 0.4)";
      ctx.fill();
      // Corner ticks
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
        const x1 = Math.cos(angle) * s * 0.35;
        const y1 = Math.sin(angle) * s * 0.35;
        const x2 = Math.cos(angle) * s * 0.45;
        const y2 = Math.sin(angle) * s * 0.45;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(255, 70, 85, 0.2)";
        ctx.stroke();
      }
    }

    const drawFns = [drawCrosshair, drawDiamond, drawAngleBracket, drawHexTarget];

    function handleScroll() { scrollY = window.scrollY; }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      elements.forEach((el) => {
        const parallaxY = el.y - scrollY * 0.12;
        const floatY = Math.sin(time * 0.4 + el.floatOffset) * el.floatAmp;
        const screenY = parallaxY + floatY;

        if (screenY < -100 || screenY > canvas.height + 100) return;

        el.x += el.driftX;
        el.y += el.driftY;
        el.rotation += el.rotationSpeed;

        if (el.x < -80) el.x = canvas.width + 80;
        if (el.x > canvas.width + 80) el.x = -80;

        ctx.save();
        ctx.translate(el.x, screenY);
        ctx.rotate(el.rotation);
        drawFns[el.type](ctx, el.size);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    }

    resize();
    createElements();
    animate();

    window.addEventListener("resize", () => { resize(); createElements(); });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none" />
  );
}
