import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
