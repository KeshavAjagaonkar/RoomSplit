export function computeSettlements(balances) {
  const creditors = [];
  const debtors = [];

  Object.entries(balances).forEach(([member, paise]) => {
    if (paise > 0) {
      creditors.push({ member, amount: paise });
    } else if (paise < 0) {
      debtors.push({ member, amount: -paise });
    }
  });

  const totalCredit = creditors.reduce((s, c) => s + c.amount, 0);
  const totalDebt = debtors.reduce((s, d) => s + d.amount, 0);

  if (totalCredit !== totalDebt) {
    throw new Error("Invariant broken: balances do not sum to zero");
  }

  const settlements = [];
  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const d = debtors[i];
    const c = creditors[j];

    const amt = Math.min(d.amount, c.amount);

    settlements.push({
      from: d.member,
      to: c.member,
      amount: amt / 100 // convert ONLY for UI
    });

    d.amount -= amt;
    c.amount -= amt;

    if (d.amount === 0) i++;
    if (c.amount === 0) j++;
  }

  return settlements;
}
