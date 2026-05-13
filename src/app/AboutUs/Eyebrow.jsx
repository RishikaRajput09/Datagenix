export default function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-7 py-4 rounded-full mb-4"
      style={{
        background: "rgba(33,198,207,0.08)",
        border: "1px solid rgba(33,198,207,0.25)",
        boxShadow: "0 0 20px rgba(33,198,207,0.12)",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#28e7c5",
        width: "fit-content",
      }}
    >
      {/* dot */}
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#28e7c5",
          boxShadow: "0 0 6px #21C6CF",
        }}
      />

      {children}
    </div>
  );
}
