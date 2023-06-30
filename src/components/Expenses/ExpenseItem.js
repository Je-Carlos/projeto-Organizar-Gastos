import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h2>
      </div>
      <div className="expense-item__price">
        R$ {Number(props.amount).toFixed(2)}
      </div>
    </Card>
  );
};
export default ExpenseItem;
