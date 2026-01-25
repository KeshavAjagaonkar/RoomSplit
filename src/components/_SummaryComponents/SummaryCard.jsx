export const SummaryCard = ({ title, value, subtitle }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-black">{value}</p>
    <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
  </div>
);