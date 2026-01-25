import AddExpense from "../components/AddExpense.jsx";
import PageContainer from "../components/Layout/PageContainer.jsx";
import { members } from "../data/member.js";

function Dashboard({ setExpenses, balances }) {
  return (
    <PageContainer title="Room Dashboard">
      {/* ===================== */}
      {/* ROOM STATUS SUMMARY  */}
      {/* ===================== */}
      <div
        className={`mb-6 rounded-lg border border-gray-200 px-4 py-3 ${
          roomStatus.emphasis ? "bg-gray-100" : "bg-gray-50"
        }`}
      >
        <p className="text-sm text-gray-800">
          {roomStatus.message}
        </p>
      </div>

      {/* ===================== */}
      {/* TWO-COLUMN LAYOUT     */}
      {/* ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Members</h2>

          <div className="space-y-3">
            {members.map(member => {
              const balance = balances[member.id] || 0;
              const balanceInRupees = (balance / 100).toFixed(2);
              const isPositive = balance > 0;
              const isNegative = balance < 0;
              const status = isPositive ? `is owed ₹${balanceInRupees}` : isNegative ? `owes ₹${Math.abs(balanceInRupees)}` : 'settled';
              return (
                <div key={member.id} className="flex justify-between items-center border border-gray-200 rounded-md p-3">
                  <span className="text-gray-900">{member.name}</span>
                  <span className={`text-sm ${isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-500'}`}>{status}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-lg p-6">
          {/* <h2 className="text-lg font-medium text-gray-900 mb-6">
            Add Expense
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Add a shared expense and split it among selected members.
          </p>

          <div className="space-y-6">
            {/* Amount */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              />
            </div>

            {/* Paid By */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Paid By
              </label>
              <select
                value={paidBy}
                onChange={e => setPaidBy(e.target.value)}
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  bg-white text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              >
                {members.map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>

         
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="
                  w-full border border-gray-300 rounded-md px-3 py-2
                  bg-white text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400
                "
              >
                <option>Food</option>
                <option>Utilities</option>
                <option>Travel</option>
                <option>Other</option>
              </select>
            </div>

            
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Shared Among
              </label>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {members.map(m => (
                  <label
                    key={m}
                    className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer hover:text-gray-900"
                  >
                    <input
                      type="checkbox"
                      checked={sharedAmong.has(m)}
                      onChange={() => toggleSharedMember(m)}
                      className="accent-black"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

           
            <button className="w-full bg-black text-white text-sm font-medium py-2 rounded-md hover:bg-gray-800 transition">
              Add Expense
            </button>

          </div> */}
          <AddExpense members={members} onAddExpense={setExpenses} />
        </section>
      </div>
    </PageContainer>
  );
}

export default Dashboard;
