import { useState } from "react";
import { categories } from "../constants/categories";

function AddExpense({ members, activeUser, onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [paidBy, setPaidBy] = useState(activeUser);
  const [sharedAmong, setSharedAmong] = useState([...members]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || sharedAmong.length === 0) return;

    onAddExpense({
      amount: Number(amount),
      category,
      paidBy,
      sharedAmong,
      createdBy: activeUser
    });

    setAmount("");
    setPaidBy(activeUser);
    setSharedAmong([...members]);
  }

  function toggleShare(member) {
    setSharedAmong(prev =>
      prev.includes(member)
        ? prev.filter(m => m !== member)
        : [...prev, member]
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Expense</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <select value={paidBy} onChange={e => setPaidBy(e.target.value)}>
        {members.map(m => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <div>
        {members.map(m => (
          <label key={m}>
            <input
              type="checkbox"
              checked={sharedAmong.includes(m)}
              onChange={() => toggleShare(m)}
            />
            {m}
          </label>
        ))}
      </div>

      <button>Add Expense</button>
    </form>
  );
}

export default AddExpense;
