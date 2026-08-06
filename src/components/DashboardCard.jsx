export default function DashboardCard({ title, value }) {
  const special = title === "Revenue";

  return (
    <div
      style={{
        background: special ? "#111827" : "#ffffff",
        color: special ? "#ffffff" : "#222222",
        padding: special ? "52px" : "24px",
        borderRadius: special ? "2px" : "16px",
        border: special ? "4px solid red" : "1px solid #ddd",
        textAlign: "center"
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>

      <button
        style={{
          background: special ? "#ffeb3b" : "#2563eb",
          color: "#fff",
          border: "none",
          padding: "12px 20px"
        }}
      >
        View Details
      </button>
    </div>
  );
}
