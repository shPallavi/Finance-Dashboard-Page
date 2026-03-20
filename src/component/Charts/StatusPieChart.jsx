import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getStatusData } from "../../utils/chartUtils";

export default function StatusPieChart({ data }) {
  const chartData = getStatusData(data);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Invoice Status Breakdown</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
