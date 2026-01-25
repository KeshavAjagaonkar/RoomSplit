const totalExpenses_Balance = (expenses, balances) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const totalBalance = Object.values(balances).reduce(
    (sum, balance) => sum + Math.abs(balance),
    0,
  );

  return { totalExpenses, totalBalance };
};

export default totalExpenses_Balance;