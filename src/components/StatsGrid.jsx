import DashboardCard from "./DashboardCard";

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      <DashboardCard
        title="Total Revenue"
        value="$48,250"
      />

      <DashboardCard
        title="Active Users"
        value="12,480"
      />

      <DashboardCard
        title="Conversion Rate"
        value="8.4%"
      />
    </div>
  );
}
