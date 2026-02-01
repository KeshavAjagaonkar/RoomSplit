import { TrendingUp, TrendingDown, CheckCircle } from "lucide-react";

export const BalanceCard = ({ member, balance }) => {
  const status = balance > 0 ? 'positive' : balance < 0 ? 'negative' : 'settled';
  const colors = {
    positive: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', badge: 'bg-emerald-500/20', text: 'text-emerald-400', icon: TrendingUp },
    negative: { border: 'border-rose-500/20', bg: 'bg-rose-500/5', badge: 'bg-rose-500/20', text: 'text-rose-400', icon: TrendingDown },
    settled: { border: 'border-slate-700', bg: 'bg-slate-800/50', badge: 'bg-slate-700', text: 'text-slate-400', icon: CheckCircle }
  };
  const color = colors[status];
  const Icon = color.icon;

  return (
    <div className={`border rounded-xl p-5 ${color.border} ${color.bg} transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${color.badge}`}>
          <Icon size={20} className={color.text} />
        </div>
        <div>
          <p className="font-medium text-white">{member.name}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
            {balance > 0 ? "Receives" : balance < 0 ? "Pays" : "Settled"}
          </p>
        </div>
      </div>
      <p className={`text-2xl font-bold ${color.text}`}>
        {balance > 0 ? "+" : ""}{(balance / 100).toFixed(2)}
      </p>
    </div>
  );
};