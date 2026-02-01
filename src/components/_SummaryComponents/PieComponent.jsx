import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../../constants";

const PieComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            if (percent < 0.05) return null; // hide very small slices (<5%)

            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
          outerRadius={100}
          innerRadius={50}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#0f172a"
              strokeWidth={2}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => {
            const { payload } = props;
            const sign = payload.rawBalance > 0 ? "(+)" : "(-)";
            return [`${sign} ₹${value.toFixed(2)}`, "Balance"];
          }}
          labelFormatter={(label, payload) => {
            if (payload.length > 0) {
              return payload[0].payload.name;
            }
            return label;
          }}
          contentStyle={{
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "0.5rem",
            color: "#f1f5f9",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
          }}
          itemStyle={{ color: "#e2e8f0" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieComponent;
