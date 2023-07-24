import React from 'react';
import { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
const expensearr = [
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
function App() {
  const [expenses, setExpenses] = useState(expensearr);
//  return React.createElement(
//   'div',
//   {},
//   React.createElement('h2',{},'Lets get started!'),
//   React.createElement(Expenses,{items:expenses})
//  );
const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses)=> [expense, ...prevExpenses]);
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
