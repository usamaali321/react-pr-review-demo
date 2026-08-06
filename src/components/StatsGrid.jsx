import DashboardCard from "./DashboardCard";

export default function StatsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "500px 500px 500px",
        gap: "40px",
        justifyContent: "center",
        margin: "60px"
      }}
    >
      <DashboardCard title="Movies" value="2500" />
      <DashboardCard title="Users" value="1.4M" />
      <DashboardCard title="Reviews" value="420K" />
      <DashboardCard title="Downloads" value="6.2M" />
      <DashboardCard title="Awards" value="58" />
      <DashboardCard title="Revenue" value="$12M" />
    </section>
  );
}
