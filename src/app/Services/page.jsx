"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    tagline: "Strategy that transforms your business at its core.",
    description:
      "We partner with organizations to architect AI roadmaps that align with your business objectives. From opportunity analysis to implementation planning, we deliver clarity in a world of complexity.",
    features: [
      "End-to-end AI readiness assessment",
      "Custom model selection & architecture design",
      "ROI forecasting & risk mitigation frameworks",
      "Executive alignment & change management",
      "Ongoing advisory & performance reviews",
    ],
    visual: "consulting",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    tagline: "Build the foundation. Power everything.",
    description:
      "Raw data is noise. We design and build the pipelines, lakes, and warehouses that turn chaos into a reliable, scalable signal your AI systems can trust and act upon.",
    features: [
      "Scalable ETL & ELT pipeline architecture",
      "Real-time streaming with Kafka & Flink",
      "Data lakehouse implementation (Databricks, Delta)",
      "Data quality monitoring & governance",
      "Schema evolution & versioning strategies",
    ],
    visual: "data",
  },
  {
    id: "automation",
    title: "Automation Solutions",
    tagline: "Remove friction. Multiply output.",
    description:
      "We identify high-value manual workflows and replace them with intelligent automation — from RPA bots to full agentic AI pipelines that reason, decide, and act autonomously.",
    features: [
      "Intelligent RPA with cognitive capabilities",
      "Agentic AI workflow orchestration",
      "LLM-powered document understanding",
      "API integration & inter-system automation",
      "Human-in-the-loop escalation design",
    ],
    visual: "automation",
  },
  {
    id: "iot-ai",
    title: "IoT + AI Integration",
    tagline: "Connect the physical. Unlock the intelligent.",
    description:
      "Edge devices generate vast data streams. We integrate AI at the edge and in the cloud to deliver predictive maintenance, anomaly detection, and real-time intelligence across your entire hardware fleet.",
    features: [
      "Edge AI model deployment & optimization",
      "MQTT / OPC-UA device integration layers",
      "Predictive maintenance & anomaly detection",
      "Digital twin architecture",
      "Secure IoT data ingestion at scale",
    ],
    visual: "iot",
  },
  {
    id: "cloud-deployment",
    title: "Cloud & AI Deployment",
    tagline: "Ship faster. Scale without limits.",
    description:
      "We build and maintain cloud-native AI infrastructure that is resilient, cost-optimized, and production-ready — so your models don't just work in notebooks, they work in the real world.",
    features: [
      "MLOps pipelines (MLflow, Kubeflow, SageMaker)",
      "Containerized inference on Kubernetes",
      "Auto-scaling GPU cluster management",
      "Model monitoring, drift detection & retraining",
      "Multi-cloud & hybrid cloud strategies",
    ],
    visual: "cloud",
  },
];

// ─── Visual Illustrations ─────────────────────────────────────────────────────

/* ── 1. AI CONSULTING — Animated neural brain network with glowing synapses ── */
function ConsultingVisual() {
  const nodes = [
    [240, 170, 28, "CORE"],
    [130, 90, 16, "PLAN"],
    [355, 85, 16, "DATA"],
    [80, 195, 14, "OPS"],
    [400, 195, 14, "ROI"],
    [165, 275, 13, "RISK"],
    [315, 275, 13, "KPI"],
    [240, 58, 11, ""],
    [430, 140, 11, ""],
    [55, 140, 11, ""],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 2],
    [1, 3],
    [1, 7],
    [2, 4],
    [2, 8],
    [3, 5],
    [3, 9],
    [4, 6],
    [5, 6],
    [7, 2],
    [8, 4],
  ];
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="cRad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#21C6CF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#21C6CF" stopOpacity="0" />
        </radialGradient>
        <filter id="cGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="cGlow2">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient bg glow */}
      <ellipse cx="240" cy="170" rx="160" ry="120" fill="url(#cRad)" />

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        const len = Math.hypot(x2 - x1, y2 - y1);
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(33,198,207,0.12)"
              strokeWidth="1.5"
            />
            {/* Travelling pulse */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#21C6CF"
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeDasharray={`6 ${len}`}
              strokeDashoffset="0"
              filter="url(#cGlow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={len + 6}
                to={-(len + 6)}
                dur={`${1.8 + i * 0.25}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map(([x, y, r, label], i) => (
        <g key={i} filter={i === 0 ? "url(#cGlow2)" : undefined}>
          {/* Outer pulse ring */}
          <circle
            cx={x}
            cy={y}
            r={r + 8}
            fill="none"
            stroke="#21C6CF"
            strokeOpacity="0.0"
          >
            <animate
              attributeName="r"
              from={r + 4}
              to={r + 22}
              dur={`${2 + i * 0.4}s`}
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
            <animate
              attributeName="stroke-opacity"
              from="0.4"
              to="0"
              dur={`${2 + i * 0.4}s`}
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </circle>
          {/* Main body */}
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={i === 0 ? "rgba(33,198,207,0.22)" : "rgba(33,198,207,0.08)"}
            stroke={i === 0 ? "#21C6CF" : "rgba(33,198,207,0.55)"}
            strokeWidth={i === 0 ? 2 : 1}
          />
          {/* Inner bright dot */}
          <circle
            cx={x}
            cy={y}
            r={i === 0 ? 8 : 3}
            fill="#21C6CF"
            opacity={i === 0 ? "1" : "0.9"}
          />
          {label && (
            <text
              x={x}
              y={y + r + 13}
              textAnchor="middle"
              fontSize="8"
              fill="rgba(33,198,207,0.8)"
              fontFamily="monospace"
              letterSpacing="1"
            >
              {label}
            </text>
          )}
        </g>
      ))}

      {/* Corner label */}
      <text
        x="24"
        y="320"
        fontSize="9"
        fill="rgba(33,198,207,0.3)"
        fontFamily="monospace"
        letterSpacing="3"
      >
        NEURAL STRATEGY MESH
      </text>
    </svg>
  );
}

/* ── 2. DATA ENGINEERING — Live scrolling data-stream terminal + bar chart ── */
function DataVisual() {
  const barHeights = [55, 80, 45, 95, 60, 110, 75, 90, 50, 85];
  const streamLines = [
    "→ ingesting kafka.stream.prod    [OK]",
    "→ schema validated  v4.2.1       [OK]",
    "→ transform delta_lake_write     [··]",
    "→ quality_check null_rate: 0.2%  [OK]",
    "→ enrichment geo_resolve         [OK]",
    "→ load warehouse.fact_events     [··]",
    "→ partition pruning  -38% scan   [OK]",
  ];
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#21C6CF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#21C6CF" stopOpacity="0.2" />
        </linearGradient>
        <filter id="dGlow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="termClip">
          <rect x="20" y="20" width="240" height="200" rx="4" />
        </clipPath>
      </defs>

      {/* ── Terminal panel ── */}
      <rect
        x="20"
        y="20"
        width="240"
        height="200"
        rx="6"
        fill="rgba(10,10,10,0.9)"
        stroke="rgba(33,198,207,0.35)"
        strokeWidth="1"
      />
      {/* Title bar */}
      <rect
        x="20"
        y="20"
        width="240"
        height="24"
        rx="6"
        fill="rgba(33,198,207,0.12)"
      />
      <circle cx="38" cy="32" r="4" fill="rgba(33,198,207,0.4)" />
      <circle cx="52" cy="32" r="4" fill="rgba(33,198,207,0.25)" />
      <circle cx="66" cy="32" r="4" fill="rgba(33,198,207,0.15)" />
      <text
        x="140"
        y="36"
        textAnchor="middle"
        fontSize="8"
        fill="rgba(33,198,207,0.7)"
        fontFamily="monospace"
      >
        pipeline.stream — bash
      </text>

      {/* Scrolling lines */}
      <g clipPath="url(#termClip)">
        {streamLines.map((line, i) => (
          <text
            key={i}
            x="28"
            y={62 + i * 22}
            fontSize="8.2"
            fill={
              line.includes("[OK]")
                ? "rgba(33,198,207,0.85)"
                : "rgba(255,255,255,0.45)"
            }
            fontFamily="monospace"
            opacity="1"
          >
            {line}
            {i === 2 || i === 5 ? (
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.2s"
                repeatCount="indefinite"
              />
            ) : null}
          </text>
        ))}
        {/* Cursor blink */}
        <rect x="28" y="212" width="7" height="11" fill="#21C6CF">
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* ── Bar chart ── */}
      <rect
        x="275"
        y="20"
        width="185"
        height="200"
        rx="6"
        fill="rgba(10,10,10,0.8)"
        stroke="rgba(33,198,207,0.2)"
        strokeWidth="1"
      />
      <text
        x="367"
        y="38"
        textAnchor="middle"
        fontSize="8"
        fill="rgba(33,198,207,0.6)"
        fontFamily="monospace"
        letterSpacing="2"
      >
        THROUGHPUT / s
      </text>
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="285"
          y1={165 - i * 35}
          x2="450"
          y2={165 - i * 35}
          stroke="rgba(33,198,207,0.07)"
          strokeWidth="1"
        />
      ))}
      {barHeights.map((h, i) => (
        <g key={i}>
          <rect
            x={288 + i * 16}
            y={165 - h}
            width="11"
            height={h}
            rx="2"
            fill="url(#barGrad)"
            filter="url(#dGlow)"
          >
            <animate
              attributeName="height"
              from="0"
              to={h}
              dur={`${0.6 + i * 0.08}s`}
              fill="freeze"
              begin={`${i * 0.05}s`}
            />
            <animate
              attributeName="y"
              from="165"
              to={165 - h}
              dur={`${0.6 + i * 0.08}s`}
              fill="freeze"
              begin={`${i * 0.05}s`}
            />
          </rect>
          {/* Top glow cap */}
          <rect
            x={288 + i * 16}
            y={165 - h}
            width="11"
            height="3"
            rx="1"
            fill="#21C6CF"
            opacity="0.9"
            filter="url(#dGlow)"
          >
            <animate
              attributeName="y"
              from="165"
              to={165 - h}
              dur={`${0.6 + i * 0.08}s`}
              fill="freeze"
              begin={`${i * 0.05}s`}
            />
          </rect>
        </g>
      ))}

      {/* ── Flow connectors between panels ── */}
      {[60, 100, 140, 180].map((y, i) => (
        <g key={i}>
          <line
            x1="260"
            y1={y}
            x2="275"
            y2={y}
            stroke="rgba(33,198,207,0.25)"
            strokeWidth="1"
            strokeDasharray="3 2"
          >
            <animate
              attributeName="stroke-opacity"
              from="0.5"
              to="0.1"
              dur={`${0.8 + i * 0.2}s`}
              repeatCount="indefinite"
              direction="alternate"
            />
          </line>
        </g>
      ))}

      {/* ── Bottom stats bar ── */}
      {[
        ["RECORDS/S", "4.2M", 60],
        ["LATENCY", "12ms", 200],
        ["UPTIME", "99.98%", 340],
      ].map(([label, val, x], i) => (
        <g key={i}>
          <rect
            x={x}
            y="238"
            width="100"
            height="48"
            rx="4"
            fill="rgba(33,198,207,0.06)"
            stroke="rgba(33,198,207,0.2)"
            strokeWidth="1"
          />
          <text
            x={x + 50}
            y="256"
            textAnchor="middle"
            fontSize="7.5"
            fill="rgba(33,198,207,0.5)"
            fontFamily="monospace"
            letterSpacing="2"
          >
            {label}
          </text>
          <text
            x={x + 50}
            y="275"
            textAnchor="middle"
            fontSize="16"
            fill="#21C6CF"
            fontFamily="monospace"
            fontWeight="bold"
            filter="url(#dGlow)"
          >
            {val}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── 3. AUTOMATION — Orbital workflow engine with live step execution ── */
function AutomationVisual() {
  const cx = 200,
    cy = 170;
  const steps = ["TRIGGER", "PARSE", "REASON", "ROUTE", "EXECUTE", "AUDIT"];
  const r1 = 95,
    r2 = 55;
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="aCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#21C6CF" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#21C6CF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#21C6CF" stopOpacity="0" />
        </radialGradient>
        <filter id="aGlow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="aSoftGlow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient core glow */}
      <circle cx={cx} cy={cy} r="140" fill="url(#aCore)" />

      {/* Outer orbit ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r1}
        fill="none"
        stroke="rgba(33,198,207,0.12)"
        strokeWidth="1"
      />
      {/* Tick marks on orbit */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const inner = r1 - 4,
          outer = r1 + 4;
        return (
          <line
            key={i}
            x1={cx + Math.cos(a) * inner}
            y1={cy + Math.sin(a) * inner}
            x2={cx + Math.cos(a) * outer}
            y2={cy + Math.sin(a) * outer}
            stroke="rgba(33,198,207,0.2)"
            strokeWidth="1"
          />
        );
      })}

      {/* Spinning dashed orbit */}
      <circle
        cx={cx}
        cy={cy}
        r={r1}
        fill="none"
        stroke="rgba(33,198,207,0.35)"
        strokeWidth="1.5"
        strokeDasharray="8 6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`360 ${cx} ${cy}`}
          dur="18s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Inner orbit */}
      <circle
        cx={cx}
        cy={cy}
        r={r2}
        fill="none"
        stroke="rgba(33,198,207,0.18)"
        strokeWidth="1"
        strokeDasharray="4 5"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`-360 ${cx} ${cy}`}
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Step nodes on outer orbit */}
      {steps.map((step, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const nx = cx + Math.cos(angle) * r1;
        const ny = cy + Math.sin(angle) * r1;
        const isActive = i % 3 === 0;
        return (
          <g key={i} filter={isActive ? "url(#aGlow)" : undefined}>
            {/* Node glow aura */}
            <circle
              cx={nx}
              cy={ny}
              r="18"
              fill="none"
              stroke="#21C6CF"
              strokeOpacity="0"
            >
              <animate
                attributeName="r"
                from="16"
                to="30"
                dur={`${1.5 + i * 0.35}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
              <animate
                attributeName="stroke-opacity"
                from="0.5"
                to="0"
                dur={`${1.5 + i * 0.35}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              />
            </circle>
            <circle
              cx={nx}
              cy={ny}
              r="16"
              fill={isActive ? "rgba(33,198,207,0.2)" : "rgba(33,198,207,0.07)"}
              stroke={isActive ? "#21C6CF" : "rgba(33,198,207,0.4)"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <circle
              cx={nx}
              cy={ny}
              r="4"
              fill={isActive ? "#21C6CF" : "rgba(33,198,207,0.5)"}
            />
            {/* Label */}
            <text
              x={nx}
              y={ny + 28}
              textAnchor="middle"
              fontSize="7.5"
              fill={isActive ? "#21C6CF" : "rgba(33,198,207,0.55)"}
              fontFamily="monospace"
              letterSpacing="1"
            >
              {step}
            </text>
          </g>
        );
      })}

      {/* Orbiting dot on outer ring */}
      <circle r="5" fill="#21C6CF" filter="url(#aGlow)">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#outerPath" />
        </animateMotion>
      </circle>
      <path
        id="outerPath"
        d={`M${cx + r1},${cy} a${r1},${r1} 0 1,1 -0.01,0`}
        fill="none"
        stroke="none"
      />

      {/* Core */}
      <circle
        cx={cx}
        cy={cy}
        r="30"
        fill="rgba(33,198,207,0.15)"
        stroke="#21C6CF"
        strokeWidth="2"
        filter="url(#aGlow)"
      />
      <circle
        cx={cx}
        cy={cy}
        r="18"
        fill="rgba(33,198,207,0.25)"
        stroke="#21C6CF"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fontSize="8"
        fill="#21C6CF"
        fontFamily="monospace"
        letterSpacing="1"
      >
        AGENT
      </text>
      <text
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        fontSize="8"
        fill="#21C6CF"
        fontFamily="monospace"
      >
        CORE
      </text>

      {/* Right panel — live log */}
      <rect
        x="320"
        y="80"
        width="145"
        height="165"
        rx="5"
        fill="rgba(10,10,10,0.85)"
        stroke="rgba(33,198,207,0.25)"
        strokeWidth="1"
      />
      <rect
        x="320"
        y="80"
        width="145"
        height="20"
        rx="5"
        fill="rgba(33,198,207,0.1)"
      />
      <text
        x="392"
        y="93"
        textAnchor="middle"
        fontSize="7.5"
        fill="rgba(33,198,207,0.7)"
        fontFamily="monospace"
        letterSpacing="2"
      >
        LIVE LOG
      </text>
      {[
        ["12:04:01", "→ workflow.start"],
        ["12:04:01", "→ parse.doc #A41"],
        ["12:04:02", "→ llm.classify OK"],
        ["12:04:02", "→ route → HR"],
        ["12:04:03", "→ exec.notify ✓"],
        ["12:04:03", "→ audit.record ✓"],
      ].map(([time, msg], i) => (
        <g key={i}>
          <text
            x="328"
            y={107 + i * 20}
            fontSize="7"
            fill="rgba(33,198,207,0.45)"
            fontFamily="monospace"
          >
            {time}
          </text>
          <text
            x="328"
            y={118 + i * 20}
            fontSize="7.5"
            fill="rgba(255,255,255,0.65)"
            fontFamily="monospace"
            filter={i === 4 || i === 5 ? "url(#aSoftGlow)" : undefined}
          >
            {msg}
            {i === 5 && (
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="1.5s"
                repeatCount="indefinite"
              />
            )}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── 4. IoT + AI — Radar sweep + device mesh with animated signal rings ── */
function IoTVisual() {
  const devices = [
    [110, 85, "SENSOR"],
    [370, 95, "CAM"],
    [60, 220, "GATEWAY"],
    [420, 210, "ACTUATOR"],
    [195, 55, "DRONE"],
    [310, 265, "PLC"],
    [240, 170, "EDGE HUB"],
  ];
  const edges = [
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [6, 5],
    [0, 1],
    [2, 0],
    [3, 1],
    [4, 5],
  ];
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#21C6CF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#21C6CF" stopOpacity="0" />
        </radialGradient>
        <filter id="iGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="radarClip">
          <circle cx="240" cy="170" r="120" />
        </clipPath>
      </defs>

      {/* Radar background */}
      {[120, 90, 60, 30].map((r, i) => (
        <circle
          key={i}
          cx="240"
          cy="170"
          r={r}
          fill="none"
          stroke="rgba(33,198,207,0.1)"
          strokeWidth="1"
        />
      ))}
      {/* Radar crosshairs */}
      <line
        x1="240"
        y1="50"
        x2="240"
        y2="290"
        stroke="rgba(33,198,207,0.07)"
        strokeWidth="1"
      />
      <line
        x1="120"
        y1="170"
        x2="360"
        y2="170"
        stroke="rgba(33,198,207,0.07)"
        strokeWidth="1"
      />

      {/* Radar sweep */}
      <g clipPath="url(#radarClip)">
        <path
          d="M240,170 L360,170 A120,120 0 0,0 240,50 Z"
          fill="url(#radarGrad)"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 240 170"
            to="360 240 170"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        {/* Sweep trail */}
        <path
          d="M240,170 L354,144 A120,120 0 0,0 240,50 Z"
          fill="rgba(33,198,207,0.06)"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 240 170"
            to="360 240 170"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      <circle
        cx="240"
        cy="170"
        r="120"
        fill="none"
        stroke="rgba(33,198,207,0.25)"
        strokeWidth="1.5"
      />

      {/* Mesh edges */}
      {edges.map(([a, b], i) => {
        const [x1, y1] = devices[a];
        const [x2, y2] = devices[b];
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(33,198,207,0.2)"
            strokeWidth="1"
            strokeDasharray="5 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-30"
              dur={`${1.5 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
        );
      })}

      {/* Device nodes */}
      {devices.map(([x, y, label], i) => {
        const isHub = i === 6;
        return (
          <g key={i} filter={isHub ? "url(#iGlow)" : undefined}>
            {/* Pulse ring */}
            <circle
              cx={x}
              cy={y}
              r={isHub ? 28 : 14}
              fill="none"
              stroke="#21C6CF"
              strokeOpacity="0"
            >
              <animate
                attributeName="r"
                from={isHub ? 22 : 10}
                to={isHub ? 40 : 24}
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
              <animate
                attributeName="stroke-opacity"
                from="0.6"
                to="0"
                dur={`${2 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
            <circle
              cx={x}
              cy={y}
              r={isHub ? 20 : 12}
              fill={isHub ? "rgba(33,198,207,0.22)" : "rgba(33,198,207,0.08)"}
              stroke={isHub ? "#21C6CF" : "rgba(33,198,207,0.5)"}
              strokeWidth={isHub ? 2 : 1}
            />
            <circle cx={x} cy={y} r={isHub ? 8 : 4} fill="#21C6CF" />
            <text
              x={x}
              y={y + (isHub ? 34 : 24)}
              textAnchor="middle"
              fontSize={isHub ? 8 : 7}
              fill={isHub ? "#21C6CF" : "rgba(33,198,207,0.7)"}
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* Live status badges */}
      {[
        ["ONLINE", "9/9", 330, 28],
        ["ALERTS", "0", 420, 28],
        ["LATENCY", "8ms", 330, 300],
      ].map(([lbl, val, x, y], i) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width="65"
            height="28"
            rx="3"
            fill="rgba(33,198,207,0.07)"
            stroke="rgba(33,198,207,0.25)"
            strokeWidth="1"
          />
          <text
            x={x + 32}
            y={y + 10}
            textAnchor="middle"
            fontSize="6.5"
            fill="rgba(33,198,207,0.5)"
            fontFamily="monospace"
            letterSpacing="1"
          >
            {lbl}
          </text>
          <text
            x={x + 32}
            y={y + 22}
            textAnchor="middle"
            fontSize="11"
            fill="#21C6CF"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {val}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── 5. CLOUD & AI DEPLOYMENT — Layered infra stack with health indicators ── */
function CloudVisual() {
  const layers = [
    { label: "CDN / EDGE", y: 40, color: "0.55", active: true },
    { label: "LOAD BALANCER", y: 90, color: "0.65", active: true },
    { label: "API GATEWAY", y: 140, color: "0.75", active: true },
    { label: "MODEL SERVING", y: 190, color: "0.90", active: true },
    { label: "VECTOR STORE", y: 240, color: "0.70", active: false },
  ];
  const pods = ["GPU-1", "GPU-2", "GPU-3", "CPU-A", "CPU-B", "MEM-X"];
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="layerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#21C6CF" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#21C6CF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#21C6CF" stopOpacity="0.18" />
        </linearGradient>
        <filter id="clGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Stack layers ── */}
      {layers.map((lyr, i) => (
        <g key={i}>
          {/* Layer body */}
          <rect
            x="30"
            y={lyr.y}
            width="255"
            height="38"
            rx="5"
            fill="url(#layerGrad)"
            stroke={`rgba(33,198,207,${lyr.color})`}
            strokeWidth={lyr.active ? 1.5 : 1}
            filter={lyr.active ? "url(#clGlow)" : undefined}
          />
          {/* Left accent bar */}
          <rect
            x="30"
            y={lyr.y}
            width="4"
            height="38"
            rx="2"
            fill={`rgba(33,198,207,${lyr.color})`}
          />
          <text
            x="50"
            y={lyr.y + 23}
            fontSize="9"
            fill={
              lyr.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)"
            }
            fontFamily="monospace"
            letterSpacing="1"
          >
            {lyr.label}
          </text>
          {/* Health dot */}
          <circle
            cx="265"
            cy={lyr.y + 19}
            r="5"
            fill={lyr.active ? "#21C6CF" : "rgba(33,198,207,0.3)"}
            filter={lyr.active ? "url(#clGlow)" : undefined}
          >
            {lyr.active && (
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            )}
          </circle>
          {/* Connecting arrow down */}
          {i < layers.length - 1 && (
            <g>
              <line
                x1="157"
                y1={lyr.y + 38}
                x2="157"
                y2={lyr.y + 52}
                stroke="rgba(33,198,207,0.4)"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-8"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </line>
              <polygon
                points={`153,${lyr.y + 50} 161,${lyr.y + 50} 157,${lyr.y + 56}`}
                fill="rgba(33,198,207,0.5)"
              />
            </g>
          )}
        </g>
      ))}

      {/* ── Pod cluster (right) ── */}
      <rect
        x="305"
        y="30"
        width="155"
        height="240"
        rx="6"
        fill="rgba(10,10,10,0.8)"
        stroke="rgba(33,198,207,0.2)"
        strokeWidth="1"
      />
      <text
        x="382"
        y="50"
        textAnchor="middle"
        fontSize="8"
        fill="rgba(33,198,207,0.6)"
        fontFamily="monospace"
        letterSpacing="2"
      >
        POD CLUSTER
      </text>

      {pods.map((pod, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const px = 315 + col * 72;
        const py = 62 + row * 68;
        const util = [82, 76, 91, 45, 60, 38][i];
        return (
          <g key={i}>
            <rect
              x={px}
              y={py}
              width="60"
              height="50"
              rx="4"
              fill="rgba(33,198,207,0.06)"
              stroke="rgba(33,198,207,0.25)"
              strokeWidth="1"
            />
            <text
              x={px + 30}
              y={py + 14}
              textAnchor="middle"
              fontSize="7.5"
              fill="rgba(33,198,207,0.8)"
              fontFamily="monospace"
            >
              {pod}
            </text>
            {/* Utilisation bar */}
            <rect
              x={px + 6}
              y={py + 22}
              width="48"
              height="6"
              rx="2"
              fill="rgba(33,198,207,0.1)"
            />
            <rect
              x={px + 6}
              y={py + 22}
              width={Math.round((48 * util) / 100)}
              height="6"
              rx="2"
              fill="#21C6CF"
              opacity="0.8"
            >
              <animate
                attributeName="width"
                from="0"
                to={Math.round((48 * util) / 100)}
                dur={`${0.8 + i * 0.12}s`}
                fill="freeze"
              />
            </rect>
            <text
              x={px + 30}
              y={py + 43}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.4)"
              fontFamily="monospace"
            >
              {util}%
            </text>
          </g>
        );
      })}

      {/* ── Bottom metrics ── */}
      {[
        ["DEPLOY TIME", "43s", 42],
        ["REPLICAS", "12×", 180],
        ["ERROR RATE", "0.01%", 318],
      ].map(([lbl, val, x], i) => (
        <g key={i}>
          <rect
            x={x}
            y="298"
            width="100"
            height="32"
            rx="3"
            fill="rgba(33,198,207,0.05)"
            stroke="rgba(33,198,207,0.18)"
            strokeWidth="1"
          />
          <text
            x={x + 50}
            y="311"
            textAnchor="middle"
            fontSize="7"
            fill="rgba(33,198,207,0.45)"
            fontFamily="monospace"
            letterSpacing="2"
          >
            {lbl}
          </text>
          <text
            x={x + 50}
            y="324"
            textAnchor="middle"
            fontSize="12"
            fill="#21C6CF"
            fontFamily="monospace"
            fontWeight="bold"
            filter="url(#clGlow)"
          >
            {val}
          </text>
        </g>
      ))}
    </svg>
  );
}

const visuals = {
  consulting: ConsultingVisual,
  data: DataVisual,
  automation: AutomationVisual,
  iot: IoTVisual,
  cloud: CloudVisual,
};

// ─── useInView hook ───────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ─── Animated Section ─────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main
      style={{ color: "#fff", fontFamily: "'Syne', 'Space Mono', monospace" }}
      className="bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085] min-h-screen overflow-x-hidden"
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .teal { color: #21C6CF; }

        .glow-btn {
          background: rgba(40,231,197,0.1);
          border: 1px solid rgba(40,231,197,0.4);
          color: #28E7C5;
          padding: 14px 36px;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          display: inline-block;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(33,198,207,0.08);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .glow-btn:hover::before { transform: translateX(0); }
        .glow-btn:hover {
          border-color: rgba(33,198,207,0.7);
          box-shadow: 0 0 30px rgba(33,198,207,0.25), 0 0 60px rgba(33,198,207,0.1);
          color: #fff;
        }

        .service-card {
          background: #0a0a0a;
          border: 1px solid rgba(33,198,207,0.08);
          transition: all 0.35s ease;
        }
        .service-card:hover {
          border-color: rgba(33,198,207,0.22);
          box-shadow: 0 0 30px rgba(33,198,207,0.1);
          transform: translateY(-4px);
        }

        .visual-wrap {
          background: rgba(33,198,207,0.03);
          border: 1px solid rgba(33,198,207,0.1);
          overflow: hidden;
          transition: box-shadow 0.4s ease;
        }
        .visual-wrap:hover {
          box-shadow: 0 0 40px rgba(33,198,207,0.15);
        }

        .feature-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #21C6CF;
          flex-shrink: 0;
          margin-top: 7px;
          box-shadow: 0 0 8px rgba(33,198,207,0.6);
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          color: #28E7C5;
          text-transform: uppercase;
        }

        .divider-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, #21C6CF, transparent);
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center">
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(33,198,207,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-300 mx-auto px-6 sm:px-10 lg:px-16 relative z-1 text-center flex flex-col items-center">
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                marginBottom: "26px",

                background: "rgba(33,198,207,0.08)",
                border: "1px solid rgba(33,198,207,0.25)",
                boxShadow: "0 0 18px rgba(33,198,207,0.12)",

                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#21C6CF",
                width: "fit-content",
              }}
            >
              {/* dot */}
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#21C6CF",
                  boxShadow: "0 0 8px #21C6CF",
                }}
              />
              WHAT WE DO
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="text-[2.4rem] sm:text-[3.2rem] lg:text-[5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Intelligence <span className="text-[#28E7C5]">engineered</span>
              <br />
              for the{" "}
              <span className="relative inline-block">
                <span className="text-[#28E7C5]">real world.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-[#21C6CF] to-transparent" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "720px",
                margin: "0 0 48px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
              }}
            >
              From strategy to deployment — we build AI systems that operate at
              the intersection of precision, scale, and impact.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#services"
                className="glow-btn"
                style={{
                  background: "#28E7C5",
                  borderColor: "#28E7C5",
                  color: "#06201c",
                }}
              >
                Explore Services
              </a>

              <a
                href="#cta"
                className="glow-btn"
                style={{
                  background: "transparent",
                  color: "#28E7C5",
                  borderColor: "rgba(40,231,197,0.4)",
                }}
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MAIN SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" style={{ paddingTop: "80px" }}>
        {services.map((svc, i) => {
          const Visual = visuals[svc.visual];
          const isEven = i % 2 !== 0;
          return (
            <ServiceSection
              key={svc.id}
              svc={svc}
              Visual={Visual}
              isEven={isEven}
              index={i}
            />
          );
        })}
      </section>
    </main>
  );
}

// ─── Service Section ──────────────────────────────────────────────────────────

function ServiceSection({ svc, Visual, isEven, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        padding: "100px 0",
        borderBottom: "1px solid rgba(33,198,207,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg number */}
      <div
        style={{
          position: "absolute",
          [isEven ? "left" : "right"]: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "160px",
          fontWeight: 800,
          fontFamily: "Inter, sans-serif",
          color: "rgba(33,198,207,0.025)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Visual */}
        <div
          style={{
            order: isEven ? 1 : 2,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : `translateX(${isEven ? "-40px" : "40px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            className="visual-wrap"
            style={{
              borderRadius: "4px",
              height: "360px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(33,198,207,0.04) 0%, transparent 70%)",
              }}
            />
            <Visual />
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            order: isEven ? 2 : 1,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0)"
              : `translateX(${isEven ? "40px" : "-40px"})`,
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          <p className="section-label" style={{ marginBottom: "16px" }}>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </p>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(28px,3.5vw,46px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            {svc.title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#28E7C5",
              fontFamily: "Inter, sans-serif",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            {svc.tagline}
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              marginBottom: "32px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {svc.description}
          </p>

          {/* Features */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 36px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {svc.features.map((feat, j) => (
              <li
                key={j}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <span className="feature-dot" />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          <a href="#cta" className="glow-btn">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
