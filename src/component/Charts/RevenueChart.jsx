import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./Chart.module.css";

export default function RevenueChart({ data }) {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Revenue Overview</h3>

      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="billed" fill="#8884d8" />
        <Bar dataKey="received" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
