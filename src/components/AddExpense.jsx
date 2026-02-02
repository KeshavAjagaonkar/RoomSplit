import { useState } from "react";
import { categories } from "../constants/categories";
import { Plus, Check } from "lucide-react";

function AddExpense({ members, onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [paidBy, setPaidBy] = useState(members[0]?.id || 1);
  const [sharedAmong, setSharedAmong] = useState(
    members.map(m => m.id)
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || sharedAmong.length === 0) return;

    onAddExpense(prev => [...prev, {
      id: Date.now(), // Generate a unique ID
      amount: Number(amount),
      category,
      paidBy: Number(paidBy),
      sharedAmong,
      description: `${category} expense`,
      date: new Date().toISOString().split('T')[0],
    }]);

    setAmount("");
    setPaidBy(members[0]?.id || 1);
    setSharedAmong(members.map(m => m.id));
  }

  function toggleShare(memberId) {
    setSharedAmong(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Plus className="h-5 w-5 text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">Add New Expense</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Amount (₹)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              min="1"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 min-h-32">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white 
             focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 
             appearance-none transition-colors cursor-pointer"
            >
              {categories.map(cat => (
                <option
                  key={cat}
                  value={cat}
                  className="cursor-pointer"
                >
                  {cat}
                </option>
              ))}
            </select>

          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Paid By</label>
            <select
              value={paidBy}
              onChange={e => setPaidBy(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none transition-colors"
            >
              {members.map(m => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-3">Shared Among</label>
          <div className="grid grid-cols-2 gap-3">
            {members.map(m => {
              const isSelected = sharedAmong.includes(m.id);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => toggleShare(m.id)}
                  className={`flex items-center justify-between px-4 py-2 rounded-lg border transition-all cursor-pointer duration-200 ${isSelected
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 "
                    }`}
                >
                  <span className="text-sm font-medium">{m.name}</span>
                  {isSelected && <Check size={14} />}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          disabled={!amount || sharedAmong.length === 0}
          className="w-full bg-linear-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;