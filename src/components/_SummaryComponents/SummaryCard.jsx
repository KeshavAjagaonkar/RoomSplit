export const SummaryCard = ({ title, value, subtitle }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:border-indigo-500/30 transition-colors">
    <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">{title}</h3>
    <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
    <p className="text-sm text-slate-500 mt-2">{subtitle}</p>
  </div>
);