export default function DashboardCard() {
  return (
    <div className="dashboard-card">
      <h2>Monthly Revenue</h2>
      <p>$24,500</p>

      <button className="primary-button">
        View Details
      </button>

      <input
        className="search-input"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
