"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "ai-growth",
    number: "01",
    title: "AI-Powered Business Growth Solutions",
    tagline: "Convert operations into intelligent, automated workflows",
    description:
      "We design customized AI-driven ecosystems tailored to your business needs — from strategy to full deployment.",
    features: [
      "AI Agents for business operations and customer interaction",
      "AI Automation to eliminate repetitive tasks",
      "AI Workflows for seamless process integration",
      "Faster execution, reduced costs, and improved productivity",
    ],
    visual: "consulting",
    accent: "#28e7c5",
  },
  {
    id: "ai-agents",
    number: "02",
    title: "AI Agents & Automation Systems",
    tagline: "24×7 intelligent execution without manual dependency",
    description:
      "We develop AI agents capable of handling business processes, customer interactions, and internal operations autonomously.",
    features: [
      "Handling customer queries and lead interactions",
      "Automating follow-ups and engagement",
      "Managing internal workflows and operations",
      "Processing and organizing business data",
    ],
    visual: "automation",
    accent: "#28E7C5",
  },
  {
    id: "iot-ai",
    number: "03",
    title: "AI-Powered Embedded Systems & IoT",
    tagline: "Build smart, connected, and intelligent products — end-to-end",
    description:
      "We provide complete AI-powered embedded and IoT product development — from circuit design all the way to bulk manufacturing.",
    features: [
      "Circuit design, PCB development & firmware",
      "AI integration on edge devices",
      "IoT connectivity and cloud integration",
      "Prototyping, testing & product validation",
      "Bulk manufacturing support",
    ],
    visual: "iot",
    accent: "#28e7c5",
  },
  {
    id: "erp-crm",
    number: "04",
    title: "ERP & CRM Systems (AI-Enabled)",
    tagline: "Streamline operations. Strengthen customer relationships.",
    description:
      "We implement and customize ERP and CRM systems enhanced with AI capabilities for smarter decision-making.",
    features: [
      "Business process management across departments",
      "Workflow automation and real-time reporting",
      "Lead and customer lifecycle management",
      "Customer insights and personalization using AI",
    ],
    visual: "data",
    accent: "#28E7C5",
  },
  {
    id: "data-analytics",
    number: "05",
    title: "AI-Powered Data Analytics & Business Intelligence",
    tagline: "Transform raw data into actionable business insights",
    description:
      "We help businesses leverage data for smarter decisions — with interactive dashboards, predictive analytics, and AI-driven BI.",
    features: [
      "Advanced data analytics & pipeline design",
      "Interactive dashboards and reporting",
      "Predictive analytics using AI",
      "Data-driven strategies and measurable growth",
    ],
    visual: "cloud",
    accent: "#28e7c5",
  },
];

// ─── SVG Visuals ──────────────────────────────────────────────────────────────

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
          <stop offset="0%" stopColor="#28e7c5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#28e7c5" stopOpacity="0" />
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
      <ellipse cx="240" cy="170" rx="160" ry="120" fill="url(#cRad)" />
      {edges.map(([a, b], i) => {
        const [x1, y1] = nodes[a],
          [x2, y2] = nodes[b];
        const len = fix(Math.hypot(x2 - x1, y2 - y1));
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
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#28e7c5"
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeDasharray={`6 ${len}`}
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
      {nodes.map(([x, y, r, label], i) => (
        <g key={i} filter={i === 0 ? "url(#cGlow2)" : undefined}>
          <circle
            cx={x}
            cy={y}
            r={r + 8}
            fill="none"
            stroke="#28e7c5"
            strokeOpacity="0"
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
          <circle
            cx={x}
            cy={y}
            r={r}
            fill={i === 0 ? "rgba(33,198,207,0.22)" : "rgba(33,198,207,0.08)"}
            stroke={i === 0 ? "#28e7c5" : "rgba(33,198,207,0.55)"}
            strokeWidth={i === 0 ? 2 : 1}
          />
          <circle
            cx={x}
            cy={y}
            r={i === 0 ? 8 : 3}
            fill="#28e7c5"
            opacity={i === 0 ? "1" : "0.9"}
          />
          {label && (
            <text
              x={x}
              y={y + r + 13}
              textAnchor="middle"
              fontSize="8"
              fill="rgba(33,198,207,0.8)"
              letterSpacing="1"
            >
              {label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

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
          <stop offset="0%" stopColor="#28e7c5" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#28e7c5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#28e7c5" stopOpacity="0" />
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
      <circle cx={cx} cy={cy} r="140" fill="url(#aCore)" />
      <circle
        cx={cx}
        cy={cy}
        r={r1}
        fill="none"
        stroke="rgba(33,198,207,0.12)"
        strokeWidth="1"
      />
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2,
          inner = r1 - 4,
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
      {steps.map((step, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const nx = fix(cx + Math.cos(angle) * r1);
        const ny = fix(cy + Math.sin(angle) * r1);
        const isActive = i % 3 === 0;
        return (
          <g key={i} filter={isActive ? "url(#aGlow)" : undefined}>
            <circle
              cx={nx}
              cy={ny}
              r="18"
              fill="none"
              stroke="#28e7c5"
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
              stroke={isActive ? "#28e7c5" : "rgba(33,198,207,0.4)"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <circle
              cx={nx}
              cy={ny}
              r="4"
              fill={isActive ? "#28e7c5" : "rgba(33,198,207,0.5)"}
            />
            <text
              x={nx}
              y={ny + 28}
              textAnchor="middle"
              fontSize="7.5"
              fill={isActive ? "#28e7c5" : "rgba(33,198,207,0.55)"}
              letterSpacing="1"
            >
              {step}
            </text>
          </g>
        );
      })}
      <circle r="5" fill="#28e7c5" filter="url(#aGlow)">
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
      <circle
        cx={cx}
        cy={cy}
        r="30"
        fill="rgba(33,198,207,0.15)"
        stroke="#28e7c5"
        strokeWidth="2"
        filter="url(#aGlow)"
      />
      <circle
        cx={cx}
        cy={cy}
        r="18"
        fill="rgba(33,198,207,0.25)"
        stroke="#28e7c5"
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fontSize="8"
        fill="#28e7c5"
        letterSpacing="1"
      >
        AGENT
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="8" fill="#28e7c5">
        CORE
      </text>
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
          >
            {time}
          </text>
          <text
            x="328"
            y={118 + i * 20}
            fontSize="7.5"
            fill="rgba(255,255,255,0.65)"
            filter={i >= 4 ? "url(#aSoftGlow)" : undefined}
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
          <stop offset="0%" stopColor="#28e7c5" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#28e7c5" stopOpacity="0" />
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
      </g>
      <circle
        cx="240"
        cy="170"
        r="120"
        fill="none"
        stroke="rgba(33,198,207,0.25)"
        strokeWidth="1.5"
      />
      {edges.map(([a, b], i) => {
        const [x1, y1] = devices[a],
          [x2, y2] = devices[b];
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
      {devices.map(([x, y, label], i) => {
        const isHub = i === 6;
        return (
          <g key={i} filter={isHub ? "url(#iGlow)" : undefined}>
            <circle
              cx={x}
              cy={y}
              r={isHub ? 28 : 14}
              fill="none"
              stroke="#28e7c5"
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
              stroke={isHub ? "#28e7c5" : "rgba(33,198,207,0.5)"}
              strokeWidth={isHub ? 2 : 1}
            />
            <circle cx={x} cy={y} r={isHub ? 8 : 4} fill="#28e7c5" />
            <text
              x={x}
              y={y + (isHub ? 34 : 24)}
              textAnchor="middle"
              fontSize={isHub ? 8 : 7}
              fill={isHub ? "#28e7c5" : "rgba(33,198,207,0.7)"}
              letterSpacing="0.5"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function DataVisual() {
  const barHeights = [55, 80, 45, 95, 60, 110, 75, 90, 50, 85];
  return (
    <svg
      viewBox="0 0 480 340"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#28e7c5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#28e7c5" stopOpacity="0.2" />
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
      >
        pipeline.stream — bash
      </text>
      <g clipPath="url(#termClip)">
        {[
          "→ ingesting kafka.stream.prod    [OK]",
          "→ schema validated  v4.2.1       [OK]",
          "→ transform delta_lake_write     [··]",
          "→ quality_check null_rate: 0.2%  [OK]",
          "→ enrichment geo_resolve         [OK]",
          "→ load warehouse.fact_events     [··]",
          "→ partition pruning  -38% scan   [OK]",
        ].map((line, i) => (
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
          >
            {line}
          </text>
        ))}
        <rect x="28" y="212" width="7" height="11" fill="#28e7c5">
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
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
        letterSpacing="2"
      >
        THROUGHPUT / s
      </text>
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
          <rect
            x={288 + i * 16}
            y={165 - h}
            width="11"
            height="3"
            rx="1"
            fill="#28e7c5"
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
            letterSpacing="2"
          >
            {label}
          </text>
          <text
            x={x + 50}
            y="275"
            textAnchor="middle"
            fontSize="16"
            fill="#28e7c5"
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
          <stop offset="0%" stopColor="#28e7c5" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#28e7c5" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#28e7c5" stopOpacity="0.18" />
        </linearGradient>
        <filter id="clGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {layers.map((lyr, i) => (
        <g key={i}>
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
            letterSpacing="1"
          >
            {lyr.label}
          </text>
          <circle
            cx="265"
            cy={lyr.y + 19}
            r="5"
            fill={lyr.active ? "#28e7c5" : "rgba(33,198,207,0.3)"}
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
        letterSpacing="2"
      >
        POD CLUSTER
      </text>
      {pods.map((pod, i) => {
        const col = i % 2,
          row = Math.floor(i / 2);
        const px = 315 + col * 72,
          py = 62 + row * 68;
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
            >
              {pod}
            </text>
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
              fill="#28e7c5"
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
            >
              {util}%
            </text>
          </g>
        );
      })}
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

const fix = (n) => Number(n.toFixed(4));

// ─── useInView ────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-linear-to-r from-[#140c30] via-[#153D4C] to-[#16A085] text-white pt-12">
      {/* Global styles */}
      <style>{`

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }


        /* Glass card */
        .glass-card {
          background: linear-gradient(135deg,
            rgba(255,255,255,0.04) 0%,
            rgba(33,198,207,0.03) 40%,
            rgba(255,255,255,0.02) 100%
          );
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border: 1px solid rgba(33,198,207,0.12);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(33,198,207,0.04),
            0 8px 32px rgba(0,0,0,0.4),
            0 2px 8px rgba(0,0,0,0.2);
        }
        .glass-card:hover {
          border-color: rgba(33,198,207,0.22);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(33,198,207,0.06),
            0 12px 48px rgba(0,0,0,0.5),
            0 0 60px rgba(33,198,207,0.06),
            0 2px 8px rgba(0,0,0,0.3);
        }

        /* Visual panel glass */
        .glass-visual {
          background: linear-gradient(145deg,
            rgba(33,198,207,0.05) 0%,
            rgba(8,13,24,0.6) 50%,
            rgba(33,198,207,0.03) 100%
          );
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(33,198,207,0.1);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 8px 32px rgba(0,0,0,0.5),
            0 0 80px rgba(33,198,207,0.04);
        }

        /* Glow button */
        .btn-primary {
          background: linear-gradient(135deg, rgba(33,198,207,0.15), rgba(40,231,197,0.08));
          border: 1px solid rgba(33,198,207,0.4);
          color: #28E7C5;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(33,198,207,0.2), rgba(40,231,197,0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover {
          border-color: rgba(33,198,207,0.7);
          box-shadow: 0 0 28px rgba(33,198,207,0.2), 0 0 60px rgba(33,198,207,0.08);
          color: #fff;
          transform: translateY(-1px);
        }

        /* Feature pill */
        .feature-pill {
          background: rgba(33,198,207,0.06);
          border: 1px solid rgba(33,198,207,0.12);
          transition: all 0.2s ease;
        }
        .feature-pill:hover {
          background: rgba(33,198,207,0.1);
          border-color: rgba(33,198,207,0.25);
        }

        /* Number badge */
        .number-badge {
          background: linear-gradient(135deg, rgba(33,198,207,0.12), rgba(33,198,207,0.04));
          border: 1px solid rgba(33,198,207,0.2);
        }

        /* Separator glow */
        .sep-line {
          background: linear-gradient(90deg, transparent, rgba(33,198,207,0.3), transparent);
        }

        /* Teal glow text */
        .teal-glow {
          color: #28E7C5;
          text-shadow: 0 0 30px rgba(40,231,197,0.4);
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080d18; }
        ::-webkit-scrollbar-thumb { background: rgba(33,198,207,0.3); border-radius: 2px; }
      `}</style>

      {/* ── BACKGROUND ORBS (decorative, fixed) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33,198,207,0.06) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(40,231,197,0.04) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── HERO ── */}
      <section className="mt-24 relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-8 lg:px-12 ">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full mb-8 font-display"
              style={{
                background: "rgba(33,198,207,0.08)",
                border: "1px solid rgba(33,198,207,0.2)",
                boxShadow: "0 0 20px rgba(33,198,207,0.1)",
                fontSize: "15px",
                letterSpacing: "3px",
                color: "#28e7c5",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#28e7c5",
                  boxShadow: "0 0 8px #28e7c5",
                }}
              />
              WHAT WE DO
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-display font-bold text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem,5vw,4.2rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Intelligence <span style={{ color: "#28E7C5" }}>engineered</span>
              <br className="hidden sm:block" />
              for the <span style={{ color: "#EFFFFB" }}>real world.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p
              className="mx-auto mb-10 leading-relaxed"
              style={{
                fontSize: "clamp(15px,2vw,18px)",
                color: "rgba(255,255,255,1)",
                maxWidth: "620px",
                fontWeight: 300,
              }}
            >
              From strategy to deployment — we build AI systems that operate at
              the intersection of precision, scale, and lasting impact.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#services"
                className="btn-primary font-display rounded-xl px-7 py-3.5 text-sm font-semibold tracking-widest uppercase"
              >
                Explore Services
              </a>
              <Link href="/#contact">
              <button
                className="
      group relative overflow-hidden whitespace-nowrap cursor-pointer
      rounded-[13px] px-6.5 py-3.25
      text-[0.8rem] font-medium tracking-[0.06em]
      inline-flex items-center gap-1.5
      transition-all duration-300 ease-out
      hover:-translate-y-[2px]
      active:translate-y-[1px]
      hover:shadow-[0_0_22px_rgba(40,231,197,0.18)]
    "
                style={{
                  fontFamily: "'Google Sans', sans-serif",
                  color: "#28e7c5",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(40,231,197,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Glow Hover Layer */}
                <span
                  className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(40,231,197,0.14), rgba(40,231,197,0.03))",
                  }}
                />

                {/* Shine Effect */}
                <span
                  className="
        absolute top-0 left-[-120%] h-full w-[120%]
        rotate-12 bg-white/10
        transition-all duration-700
        group-hover:left-[120%]
      "
                />

                {/* Text */}
                <span className="relative z-10">Contact Us</span>

                {/* Arrow */}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
        relative z-10 w-3 h-3
        transition-transform duration-300
        group-hover:translate-x-1
      "
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative z-10 py-4">
        {services.map((svc, i) => (
          <ServiceCard key={svc.id} svc={svc} index={i} />
        ))}
      </section>
    </main>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ svc, index }) {
  const [ref, visible] = useInView(0.08);
  const Visual = visuals[svc.visual];
  const isEven = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className="relative py-12 sm:py-20 lg:py-20 px-4 sm:px-8 lg:px-12"
      style={{ borderBottom: "1px solid rgba(33,198,207,0.05)" }}
    >
      {/* Ambient glow per section */}
      <div
        style={{
          position: "absolute",
          [isEven ? "right" : "left"]: "0",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40%",
          height: "60%",
          background: `radial-gradient(ellipse, rgba(33,198,207,0.04) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* ── GLASS CARD WRAPPER ── */}
        <div
          className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(40px) scale(0.98)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: "2px",
              background: `linear-gradient(90deg, transparent, rgba(33,198,207,0.6), rgba(40,231,197,0.4), transparent)`,
            }}
          />

          <div
            className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}
          >
            {/* ── VISUAL PANEL ── */}
            <div className="lg:w-[48%] relative">
              <div className="glass-visual h-64 sm:h-80 lg:h-full min-h-[320px] flex items-center justify-center p-6 relative">
                {/* Corner decorations */}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    width: "16px",
                    height: "16px",
                    borderTop: "1px solid rgba(33,198,207,0.4)",
                    borderLeft: "1px solid rgba(33,198,207,0.4)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "16px",
                    height: "16px",
                    borderTop: "1px solid rgba(33,198,207,0.4)",
                    borderRight: "1px solid rgba(33,198,207,0.4)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    width: "16px",
                    height: "16px",
                    borderBottom: "1px solid rgba(33,198,207,0.4)",
                    borderLeft: "1px solid rgba(33,198,207,0.4)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    width: "16px",
                    height: "16px",
                    borderBottom: "1px solid rgba(33,198,207,0.4)",
                    borderRight: "1px solid rgba(33,198,207,0.4)",
                  }}
                />
                {/* Inner radial */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(33,198,207,0.04) 0%, transparent 65%)",
                  }}
                />
                <div
                  className="relative w-full h-full"
                  style={{ minHeight: "260px" }}
                >
                  <Visual />
                </div>
              </div>
            </div>

            {/* ── CONTENT PANEL ── */}
            <div className="lg:w-[52%] flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              {/* Number + index */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="number-badge rounded-lg px-3 py-1.5 font-display font-bold text-xs tracking-widest"
                  style={{ color: "#28e7c5", letterSpacing: "3px" }}
                >
                  {svc.number}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(33,198,207,0.25), transparent)",
                  }}
                />
                <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: "rgba(33,198,207,0.35)" }}
                >
                  {svc.number} / 05
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-display font-extrabold text-white mb-3 leading-tight"
                style={{
                  fontSize: "clamp(20px,3vw,36px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {svc.title}
              </h2>

              {/* Tagline */}
              <p
                className="font-display text-sm sm:text-base mb-4 italic"
                style={{ color: "#28E7C5", opacity: 0.85 }}
              >
                {svc.tagline}
              </p>

              {/* Description */}
              <p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {svc.description}
              </p>

              {/* Separator */}
              <div className="sep-line h-px mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {svc.features.map((feat, j) => (
                  <li
                    key={j}
                    className="feature-pill flex items-start gap-3 rounded-xl px-4 py-3"
                  >
                    {/* Dot */}
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#28e7c5",
                        boxShadow: "0 0 8px rgba(33,198,207,0.7)",
                        flexShrink: 0,
                        marginTop: "6px",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontWeight: 300,
                      }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <Link href="/#contact">
                  <button
                    className="
      group relative overflow-hidden whitespace-nowrap cursor-pointer
      rounded-[13px] px-6.5 py-3.25
      text-[0.8rem] font-medium tracking-[0.06em]
      inline-flex items-center gap-1.5
      transition-all duration-300 ease-out
      hover:-translate-y-[2px]
      active:translate-y-[1px]
      hover:shadow-[0_0_22px_rgba(40,231,197,0.18)]
    "
                    style={{
                      fontFamily: "'Google Sans', sans-serif",
                      color: "#28e7c5",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(40,231,197,0.9)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Glow Hover Layer */}
                    <span
                      className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(40,231,197,0.14), rgba(40,231,197,0.03))",
                      }}
                    />

                    {/* Shine Effect */}
                    <span
                      className="
        absolute top-0 left-[-120%] h-full w-[120%]
        rotate-12 bg-white/10
        transition-all duration-700
        group-hover:left-[120%]
      "
                    />

                    {/* Text */}
                    <span className="relative z-10">Get Started</span>

                    {/* Arrow */}
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="
        relative z-10 w-3 h-3
        transition-transform duration-300
        group-hover:translate-x-1
      "
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(33,198,207,0.15), transparent)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
