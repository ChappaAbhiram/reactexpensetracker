import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from  '../UI/Card';

function ExpenseItem(props) {
  const clickHandler = ()=>{
    console.log('Clicked!');
  };
  const deleteHandler=()=>{
    console.log('Expense Deleted!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}
export default ExpenseItem;
