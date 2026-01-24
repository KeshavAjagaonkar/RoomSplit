export function computeBalances(members, expenses) {
  const balances = {};

  // Initialize balances in paise
  members.forEach(m => {
    balances[m] = 0;
  });

  expenses.forEach(exp => {
    const { amount, paidBy, sharedAmong } = exp;

    // Convert to paise ONCE
    const totalPaise = Math.round(amount * 100);
    const share = Math.floor(totalPaise / sharedAmong.length);
    const remainder = totalPaise % sharedAmong.length;

    // Each participant pays equal share
    sharedAmong.forEach((member, index) => {
      // Distribute remainder fairly
      const extra = index < remainder ? 1 : 0;
      balances[member] -= (share + extra);
    });

    // Payer gets full credit
    balances[paidBy] += totalPaise;
  });

  return balances; // STILL IN PAISE
}
