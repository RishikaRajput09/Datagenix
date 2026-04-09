"use client"
import { useEffect, useRef } from "react";

const PALETTE = [
  [33, 198, 207], [0, 210, 220], [60, 240, 200],
  [20, 180, 255], [80, 220, 255], [0, 160, 200],
];
const HEX_SIZE = 20;
const GAP = 2;
const STEP_X = HEX_SIZE * Math.sqrt(3) + GAP;
const STEP_Y = HEX_SIZE * 1.5 + GAP * 0.866;

function buildGrid(W, H) {
  const hexes = [];
  const cols = Math.ceil(W / STEP_X) + 3;
  const rows = Math.ceil(H / STEP_Y) + 3;
  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < cols; col++) {
      const offset = row % 2 === 0 ? 0 : STEP_X / 2;
      hexes.push({
        cx: col * STEP_X + offset,
        cy: row * STEP_Y,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.005,
        accentIdx: Math.floor(Math.random() * PALETTE.length),
        ambientBase: 0.04 + Math.random() * 0.04,
        energy: 0, targetEnergy: 0,
      });
    }
  }
  return hexes;
}

// Delete centerSuppression entirely, add this instead:
function edgeWeight(cx, cy, W, H) {
  const nx = (cx - W / 2) / (W / 2);
  const ny = (cy - H / 2) / (H / 2);
  // How far from the nearest edge (0 = at edge, 1 = dead center)
  const distFromEdge = Math.max(0, 1 - Math.max(Math.abs(nx), Math.abs(ny)));
  // Invert + smoothstep → 1 at edges, 0 at center
  const t = 1 - Math.min(1, distFromEdge / 0.35);
  return t * t * (3 - 2 * t);
}

export function HexBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf, hexes = [], time = 0;
    let mouse = { x: -9999, y: -9999 };
    let ripples = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      hexes = buildGrid(canvas.width, canvas.height);
    }

    function hexPath(cx, cy, size) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        i === 0
          ? ctx.moveTo(cx + size * Math.cos(a), cy + size * Math.sin(a))
          : ctx.lineTo(cx + size * Math.cos(a), cy + size * Math.sin(a));
      }
      ctx.closePath();
    }

    const dist = (ax, ay, bx, by) => Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onClick = (e) => {
      const r = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top,
        t: 0, maxR: Math.max(canvas.width, canvas.height) * 0.8 });
    };

    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    function draw() {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      time++;

      ripples = ripples.filter(rp => rp.t < 120);
      for (const rp of ripples) rp.t++;

      for (const h of hexes) {
        const suppression = edgeWeight(h.cx, h.cy, W, H);
        const ambient = Math.sin(time * h.speed + h.phase) * 0.5 + 0.5;
        const mouseE = Math.max(0, 1 - dist(h.cx, h.cy, mouse.x, mouse.y) / 150);

        let rippleE = 0;
        for (const rp of ripples) {
          const rd = dist(h.cx, h.cy, rp.x, rp.y);
          const front = (rp.t / 120) * rp.maxR;
          const diff = Math.abs(rd - front);
          if (diff < 60) {
            const wave = Math.sin((1 - diff / 60) * Math.PI);
            rippleE = Math.max(rippleE, wave * (1 - rp.t / 120));
          }
        }

        h.targetEnergy = Math.max(mouseE, rippleE);
        h.energy += (h.targetEnergy - h.energy) * 0.11;

        const [r, g, b] = PALETTE[h.accentIdx];
        const e = h.energy;
        const ambientAlpha = h.ambientBase * (0.5 + ambient * 0.5) * suppression;

        // Base ambient stroke — always visible
        hexPath(h.cx, h.cy, HEX_SIZE - 1);
        ctx.strokeStyle = `rgba(${r},${g},${b},${ambientAlpha})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();

        // Interaction: brighter stroke + ghost fill
        if (e > 0.01) {
          hexPath(h.cx, h.cy, HEX_SIZE - 1);
          ctx.strokeStyle = `rgba(${r},${g},${b},${ambientAlpha + e * 0.85})`;
          ctx.lineWidth = 0.6 + e * 2.0;
          ctx.stroke();

          hexPath(h.cx, h.cy, HEX_SIZE - 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${e * 0.06})`;
          ctx.fill();
        }

        // Vertex sparks at peak
        if (e > 0.6) {
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 180) * (60 * i - 30);
            ctx.beginPath();
            ctx.arc(
              h.cx + (HEX_SIZE - 1) * Math.cos(a),
              h.cy + (HEX_SIZE - 1) * Math.sin(a),
              1.5, 0, Math.PI * 2
            );
            ctx.fillStyle = `rgba(${r},${g},${b},${(e - 0.55) * 1.5})`;
            ctx.fill();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
}