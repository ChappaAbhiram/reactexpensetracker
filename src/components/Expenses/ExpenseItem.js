import './ExpenseItem.css';
import React, { useState }from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from  '../UI/Card';

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  const[location,setLocation] = useState(props.location);
  const clickHandler = ()=>{
    setTitle('Updated!');
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
      <ExpenseDetails title={title} amount={amount} location={location} />
      <button onClick={expensechangeHandler}>Change Expense Cost</button>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
