import './ExpenseItem.css';
import React, { useState }from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from  '../UI/Card';

function ExpenseItem(props) {
  const [titles,setTitle] = useState(props.title);
  const [amounts,setAmount] = useState(props.amount);
  const clickHandler = ()=>{
    setTitle('Updated!');
    console.log(titles);
  };
  const deleteHandler=()=>{
    console.log('Expense Deleted!');
  }
const expensechangeHandler=()=>{
  setAmount('100');
} 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={titles} amount={amounts} location={props.location}/>
      <button onClick={expensechangeHandler}>Change Expense Cost</button>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
