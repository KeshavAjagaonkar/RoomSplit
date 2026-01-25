export const getHighestSpender = (expenses) => {
  const spentByMember = expenses.reduce((acc, exp) => {
    acc[exp.paidBy] = (acc[exp.paidBy] || 0) + exp.amount;
    return acc;
  }, {});

  const memberSpent = Object.entries(spentByMember);
  if (memberSpent.length === 0) return null;

  const highestSpender = memberSpent.reduce((a, b) => (a[1] > b[1] ? a : b));
  return {
    id: parseInt(highestSpender[0]),
    spent: highestSpender[1],
  };
};
