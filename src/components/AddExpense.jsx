import { useState } from "react";
import { categories } from "../constants/categories";

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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Add New Expense</h3>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          min="1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        <select 
          value={category} 
          onChange={e => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Paid By</label>
        <select 
          value={paidBy} 
          onChange={e => setPaidBy(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {members.map(m => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Shared Among</label>
        <div className="grid grid-cols-2 gap-2">
          {members.map(m => (
            <label key={m.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={sharedAmong.includes(m.id)}
                onChange={() => toggleShare(m.id)}
                className="rounded"
              />
              <span>{m.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        disabled={!amount || sharedAmong.length === 0}
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;