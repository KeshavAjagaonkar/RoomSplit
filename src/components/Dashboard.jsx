import React from "react";

// Single source of truth for money display
function formatRupees(paise) {
  return (paise / 100).toFixed(2);
}

function Dashboard({ balances }) {
  return (
    <section>
      <h2>Room Dashboard</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.entries(balances).map(([member, balance]) => {
          let statusText = "Settled";
          let amountText = "";

          if (balance > 0) {
            statusText = "is owed";
            amountText = `₹${formatRupees(balance)}`;
          } else if (balance < 0) {
            statusText = "owes";
            amountText = `₹${formatRupees(Math.abs(balance))}`;
          }

          return (
            <li
              key={member}
              style={{
                marginBottom: "12px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px"
              }}
            >
              <strong>{member}</strong>
              <div>
                {statusText}
                {amountText && ` ${amountText}`}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Dashboard;
