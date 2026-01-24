import { computeSettlements } from "../utils/computeSettlements";

function Summary({ expenses, balances }) {
  // 1. Category totals
  const categoryTotals = {};
  expenses.forEach(exp => {
    categoryTotals[exp.category] =
      (categoryTotals[exp.category] || 0) + exp.amount;
  });

  // 2. Settlement suggestions (derived)
  const settlements = computeSettlements(balances);

  return (
    <section>
      <h2>Monthly Summary</h2>

      {/* Category-wise spending */}
      <h3>Spending by Category</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>
            {category}: ₹{amount}
          </li>
        ))}
      </ul>

      {/* Settlement suggestions */}
      <h3>Suggested Settlements</h3>

      {settlements.length === 0 ? (
        <p>All settled 🎉</p>
      ) : (
        <ul>
          {settlements.map((s, index) => (
            <li key={index}>
              <strong>{s.from}</strong> pays{" "}
              <strong>{s.to}</strong> ₹{s.amount}
            </li>
          ))}
        </ul>
      )}

      {/* Reminder UX (still non-enforcing) */}
      {settlements.length > 0 && (
        <>
          <h4>Reminder Preview</h4>
          <p>
            Hey 👋 Just a reminder to settle your dues for this month.
          </p>
        </>
      )}
    </section>
  );
}

export default Summary;
