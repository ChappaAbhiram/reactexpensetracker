import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = ()=>{
    const [enteredtitle,setnewTitle] = useState('');
    const [enteredDate,setnewDate] = useState();
    const [changeamount,setnewAmount] = useState();
    
    const titlechangeHandler = (event) =>{
     setnewTitle(event.target.value);
    };
    const datechangeHandler = (event) =>{
        setnewDate(event.target.value);
    }
    const amountchangeHandler = (event) =>{
        setnewAmount(event.target.value);
    }
return <form>
  <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type='text' onChange={titlechangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' onChange={amountchangeHandler}min='0.01' step='0.01' />
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type='date' onChange={datechangeHandler} min='2023-01-01' max='2027-12-31'/>
    </div>
  </div>
  <div className="new-expense__actions">
    <button type='submit'>Add Expense</button>
  </div>
</form>
}
export default ExpenseForm;