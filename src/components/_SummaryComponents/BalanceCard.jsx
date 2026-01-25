export const BalanceCard = ({ member, balance }) => {
  const status = balance > 0 ? 'positive' : balance < 0 ? 'negative' : 'settled';
  const colors = {
    positive: { border: 'border-green-200', bg: 'bg-green-50', badge: 'bg-green-100', text: 'text-green-600' },
    negative: { border: 'border-red-200', bg: 'bg-red-50', badge: 'bg-red-100', text: 'text-red-600' },
    settled: { border: 'border-gray-200', bg: 'bg-gray-50', badge: 'bg-gray-100', text: 'text-gray-600' }
  };
  const color = colors[status];

  return (
    <div className={`border rounded-lg p-4 ${color.border} ${color.bg}`}>
      <div className="flex items-center mb-2">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${color.badge}`}>
          <span className={`font-semibold ${color.text}`}>
            {member.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-black">{member.name}</p>
          <p className="text-sm text-gray-600">
            {balance > 0 ? "Will receive" : balance < 0 ? "Owes to pay" : "Settled"}
          </p>
        </div>
      </div>
      <p className={`text-lg font-bold ${color.text}`}>
        {balance > 0 ? "+" : ""}{balance / 100}
      </p>
    </div>
  );
};