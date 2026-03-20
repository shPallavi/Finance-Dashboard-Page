import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getMonthlyTrend } from "../../utils/chartUtils";

export default function BilledVsReceivedChart({ data }) {
  const chartData = getMonthlyTrend(data);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Billed vs Received Trend</h3>

      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="billed" />
          <Line type="monotone" dataKey="received" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
