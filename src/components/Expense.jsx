import React from "react";

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div className="expense-item">
      <p>{name}</p>
      <p>{amount}</p>
      <button onClick={() => deleteExpense(index)}>delete</button>
    </div>
  );
}
