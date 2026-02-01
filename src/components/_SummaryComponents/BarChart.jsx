import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
         margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#94a3b8"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#94a3b8"
          fontSize={12}
          tickFormatter={(value) => value.toFixed(0)}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          formatter={(value) => [`₹${value.toFixed(2)}`, "Amount"]}
          labelFormatter={(label) => `Category: ${label}`}
          contentStyle={{
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "0.5rem",
            color: "#f1f5f9",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
          }}
          itemStyle={{ color: "#e2e8f0" }}
          cursor={{ fill: "#1e293b", opacity: 0.5 }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar
          dataKey="value"
          name="Amount"
          fill="#6366f1"
          radius={[6, 6, 0, 0]}
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
