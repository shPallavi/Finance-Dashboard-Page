import RevenueChart from "../../component/Charts/RevenueChart";
import { chartData } from "../../data/mockData";

export default function ChartSection() {
  return (
    <div>
      <h2>Revenue Trend</h2>
      <RevenueChart data={chartData} />
    </div>
  );
}
