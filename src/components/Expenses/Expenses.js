import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const year = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(year);
  const filterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYear={filteredYear}
          onFilterYear={filterHandler}
        />
        {filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
