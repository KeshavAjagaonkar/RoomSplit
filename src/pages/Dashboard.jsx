import AddExpense from "../components/AddExpense.jsx";
import PageContainer from "../components/Layout/PageContainer.jsx";
import { members } from "../data/member.js";
import { User, Wallet, CheckCircle2 } from "lucide-react";

function Dashboard({ setExpenses, balances }) {
  return (
    <PageContainer title="Room Dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* MEMBERS SECTION */}
        <section className="col-span-1 lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Member Status</h2>
            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-400">
              {members.length} Members
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {members.map(member => {
              const balance = balances[member.id] || 0;
              const balanceInRupees = (balance / 100).toFixed(2);
              const isPositive = balance > 0;
              const isNegative = balance < 0;

              let statusColor = "text-slate-400";
              let statusBg = "bg-slate-800";
              let statusText = "Settled";
              let Icon = CheckCircle2;

              if (isPositive) {
                statusColor = "text-emerald-400";
                statusBg = "bg-emerald-500/10 border-emerald-500/20";
                statusText = `Gets ₹${balanceInRupees}`;
                Icon = Wallet;
              } else if (isNegative) {
                statusColor = "text-rose-400";
                statusBg = "bg-rose-500/10 border-rose-500/20";
                statusText = `Pays ₹${Math.abs(balanceInRupees)}`;
                Icon = Wallet;
              }

              return (
                <div
                  key={member.id}
                  className="group relative bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                      <User size={20} />
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusBg} ${statusColor}`}>
                      {statusText}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      Room Member
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ADD EXPENSE SECTION */}
        <section className="col-span-1 lg:col-span-5">
          <div className="sticky top-24">
            <AddExpense members={members} onAddExpense={setExpenses} />
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

export default Dashboard;
