export const ChartSection = ({ title, children }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
    <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800">
      {title}
    </h2>
    <div className="h-80">{children}</div>
  </div>
);