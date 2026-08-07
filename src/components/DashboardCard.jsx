export default function DashboardCard() {
  return (
    <div className="dashboard-card">
      <div className="card-title">
        Total Revenue
      </div>

      <div className="card-value">
        $48,250
      </div>

      <div
        className="view-details"
        onClick={() => alert("Viewing details")}
      >
        View Details
      </div>
    </div>
  );
}
