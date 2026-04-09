"use client";
import { useEffect, useRef } from "react";

const PALETTE = [
  [13, 155, 163], [0, 140, 160], [20, 170, 150],
  [0, 130, 180],  [10, 160, 170], [30, 145, 155],
];
const HEX_SIZE = 20;
const GAP = 3;
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
        speed: 0.002 + Math.random() * 0.004,
        accentIdx: Math.floor(Math.random() * PALETTE.length),
        ambientBase: 0.07 + Math.random() * 0.05,
        energy: 0, targetEnergy: 0,
      });
    }
  }
  return hexes;
}

function edgeWeight(cx, cy, W, H) {
  const nx = (cx - W / 2) / (W / 2);
  const ny = (cy - H / 2) / (H / 2);
  const dfe = Math.max(0, 1 - Math.max(Math.abs(nx), Math.abs(ny)));
  const t = 1 - Math.min(1, dfe / 0.35);
  return t * t * (3 - 2 * t);
}

export function HexBackgroundLight() {
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

    const dist = (ax, ay, bx, by) => Math.sqrt((ax-bx)**2 + (ay-by)**2);

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
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);

    function draw() {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      time++;

      ripples = ripples.filter(rp => rp.t < 120);
      for (const rp of ripples) rp.t++;

      for (const h of hexes) {
        const ew = edgeWeight(h.cx, h.cy, W, H);
        const mouseE = Math.max(0, 1 - dist(h.cx, h.cy, mouse.x, mouse.y) / 130);

        let rippleE = 0;
        for (const rp of ripples) {
          const rd = dist(h.cx, h.cy, rp.x, rp.y);
          const front = (rp.t / 120) * rp.maxR;
          const diff = Math.abs(rd - front);
          if (diff < 55) {
            const wave = Math.sin((1 - diff / 55) * Math.PI);
            rippleE = Math.max(rippleE, wave * (1 - rp.t / 120));
          }
        }

        h.targetEnergy = Math.max(mouseE, rippleE) * (ew * 0.7 + 0.3);
        h.energy += (h.targetEnergy - h.energy) * 0.11;

        const ambient = Math.sin(time * h.speed + h.phase) * 0.5 + 0.5;
        const [r, g, b] = PALETTE[h.accentIdx];
        const e = h.energy;
        const ambientAlpha = h.ambientBase * (0.5 + ambient * 0.5) * ew;

        // Faint base outline
        if (ambientAlpha > 0.003) {
          hexPath(h.cx, h.cy, HEX_SIZE - 1);
          ctx.strokeStyle = `rgba(${r},${g},${b},${ambientAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Interaction: teal tint fill + bright border
        if (e > 0.015) {
          hexPath(h.cx, h.cy, HEX_SIZE - 1);
          ctx.fillStyle = `rgba(${r},${g},${b},${e * 0.18})`;
          ctx.fill();

          hexPath(h.cx, h.cy, HEX_SIZE - 1);
          ctx.strokeStyle = `rgba(${r},${g},${b},${Math.min(0.90, ambientAlpha + e * 0.85)})`;
          ctx.lineWidth = 0.5 + e * 1.6;
          ctx.stroke();
        }

        if (e > 0.58) {
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 180) * (60 * i - 30);
            ctx.beginPath();
            ctx.arc(h.cx + (HEX_SIZE-1)*Math.cos(a),
                    h.cy + (HEX_SIZE-1)*Math.sin(a), 1.0, 0, Math.PI*2);
            ctx.fillStyle = `rgba(${r},${g},${b},${(e - 0.5) * 1.0})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />;
}