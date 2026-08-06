export default function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: title === "Users" ? "48px" : "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
        margin: "12px"
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
      <button>View Details</button>
    </div>
  );
}
