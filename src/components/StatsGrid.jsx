import DashboardCard from "./DashboardCard";

export default function StatsGrid() {
  return (
    <section>
      <DashboardCard
        title="Movies"
        value="2500"
      />

      <DashboardCard
        title="Users"
        value="1.4M"
      />

      <DashboardCard
        title="Reviews"
        value="420K"
      />
    </section>
  );
}
