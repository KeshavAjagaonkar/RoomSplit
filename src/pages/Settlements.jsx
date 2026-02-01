// src/pages/Settlements.jsx
import PageContainer from "../components/Layout/PageContainer";
import { computeSettlements } from "../utils/computeSettlements";
import { members } from "../data/member";
import { ArrowRight, CheckCheck, Wallet } from "lucide-react";

function Settlements({ balances, setExpenses }) {
  // Accept setExpenses prop
  const settlements = computeSettlements(balances);

  // Create a quick lookup map for names
  const memberMap = members.reduce((map, m) => {
    map[m.id] = m.name;
    return map;
  }, {});

  const handleSettle = (fromId, toId, amount) => {
    // Confirm before settling (optional, but good UX)
    if (
      !window.confirm(
        `Confirm settlement of ₹${amount} from ${memberMap[fromId]} to ${memberMap[toId]}?`,
      )
    ) {
      return;
    }

    const settlementTransaction = {
      id: Date.now(),
      amount: Number(amount), // Ensure it's a number
      category: "Settlement", // Special category we can filter later
      paidBy: Number(fromId), // The person paying (Debtor)
      sharedAmong: [Number(toId)], // The person receiving (Creditor)
      description: `Settlement to ${memberMap[toId]}`,
      date: new Date().toISOString().split("T")[0],
      type: "settlement", // Optional flag for easier filtering
    };

    // Update state
    setExpenses((prev) => [...prev, settlementTransaction]);
  };

  return (
    <PageContainer title="Settlements">
      <div className="max-w-3xl mx-auto">
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Wallet className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Recommended Transactions
            </h2>
          </div>

          {settlements.length === 0 ? (
            <div className="text-center py-12 bg-slate-950/50 rounded-xl border border-dashed border-slate-800">
              <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-full mb-4">
                <CheckCheck className="h-8 w-8 text-emerald-500" />
              </div>
              <p className="text-slate-400 font-medium">All balances are settled up!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {settlements.map((tx, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 font-medium border border-rose-500/20">
                          {memberMap[tx.from].charAt(0)}
                        </div>
                        <span className="font-medium text-slate-200">{memberMap[tx.from]}</span>
                      </div>

                      <ArrowRight className="text-slate-600" size={18} />

                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-200 text-right">{memberMap[tx.to]}</span>
                        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-medium border border-emerald-500/20">
                          {memberMap[tx.to].charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end pl-0 sm:pl-8 sm:border-l sm:border-slate-800">
                      <span className="text-xl font-bold text-white tracking-tight">
                        ₹{tx.amount.toFixed(2)}
                      </span>

                      <button
                        onClick={() => handleSettle(tx.from, tx.to, tx.amount)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
                      >
                        Settle
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageContainer>
  );
}

export default Settlements;
