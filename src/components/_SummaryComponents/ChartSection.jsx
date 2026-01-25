export const ChartSection = ({ title, children }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b border-gray-200">
      {title}
    </h2>
    <div className="h-80">{children}</div>
  </div>
);