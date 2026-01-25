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
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => {
            const { payload } = props;
            const sign = payload.rawBalance > 0 ? "(+)" : "(-)";
            return [`${sign} ${value.toFixed(2)}`, "Balance"];
          }}
          labelFormatter={(label, payload) => {
            if (payload.length > 0) {
              return payload[0].payload.name;
            }
            return label;
          }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieComponent;
