import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtrar pelo Ano</label>
        <select value={props.onSelectedYear} onChange={filterChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
