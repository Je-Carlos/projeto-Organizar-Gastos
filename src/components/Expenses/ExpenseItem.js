import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const upperCaseTitle =
    props.title.charAt(0).toUpperCase() + props.title.slice(1);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{upperCaseTitle}</h2>
      </div>
      <div className="expense-item__price">R$ {props.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
