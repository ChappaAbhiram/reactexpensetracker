import ExpenseItem from './components/Expenses/ExpenseItem';
import React from 'react';
import { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense'
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location : 'Visakhapatnam',
    },
    { 
       id: 'e2',
       title: 'New TV',
       amount: 799.49, 
       date: new Date(2021, 2, 12) ,
       location : 'Hyderabad',
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location : 'Mangalore',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location : 'Bangalore',
    },
  ];
  const [expensesarray, setExpenses] = useState(expenses);
  const expenseitems = [];
  for (let index = 0; index < expensesarray.length; index++) {
    const expense = expensesarray[index];
  expenseitems.push(<ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    location={expense.location}
  />
  );
}
//  return React.createElement(
//   'div',
//   {},
//   React.createElement('h2',{},'Lets get started!'),
//   React.createElement(Expenses,{items:expenses})
//  );
const addExpenseHandler = (expensed)=>{
  setExpenses((prevexpenses)=>[...prevexpenses,expensed]);
}
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenseitems}
    </div>
  );
}

export default App;
