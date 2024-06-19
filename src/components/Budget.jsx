import React, { useContext } from "react";
import { ExpenseContext } from "../App";

export default function Budget() {
  const { budget, spent, remaining, setBudget } = useContext(ExpenseContext);

  return (
    <div>
      <h1>My Budget Planner</h1>
      <h2>
        Budget: 
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(parseInt(e.target.value) || 0)} 
          style={{ marginLeft: "10px", width: "100px" }}
        />
      </h2>
      <h2>Remaining: {remaining}</h2>
      <h2>Spent: {spent}</h2>
    </div>
  );
}
