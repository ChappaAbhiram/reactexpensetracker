import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props)=>{
    const [enteredtitle,setnewTitle] = useState('');
    const [enteredDate,setnewDate] = useState('');
    const [enteredamount,setnewAmount] = useState('');
    const [enteredlocation,setnewLocation] = useState('');
    // const [userInput, setUserInput] = useState({
    //    enteredtitle : '',
    //    enteredDate : '',
    //    enteredamount : '' 
    // });
    
    const titlechangeHandler = (event) =>{
     setnewTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredtitle : event.target.value,
    // })
    // };
    // setUserInput((prevState)=>{
    //    return {...prevState , enteredTitle : event.target.value };
    // });
};
    const datechangeHandler = (event) =>{
        setnewDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState , enteredDate : event.target.value };
        //  });
    };
    const amountchangeHandler = (event) =>{
        setnewAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredamount : event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState , enteredamount : event.target.value };
        //  });
    };
    const locationchangeHandler = (event) =>{
        setnewLocation(event.target.value);
    }
    const submitHandler=(event)=>{
     event.preventDefault();
     const expenseData = {
        title : enteredtitle,
        amount : enteredamount,
        date : new Date(enteredDate),
        location : enteredlocation
     };
     props.onSaveExpenseData(expenseData);
     setnewAmount('');
     setnewDate('');
     setnewTitle('');
     setnewLocation('');
    };
return <form onSubmit={submitHandler}>
  <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type='text' required
         value={enteredtitle}
         onChange={titlechangeHandler}
         />
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' required
        value={enteredamount}
        onChange={amountchangeHandler} 
        min='0.01' 
        step='0.01' />
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type='date' 
        value={enteredDate}
        onChange={datechangeHandler} min='2019-01-01' max='2025-12-31'/>
    </div>
    <div className="new-expense__control">
        <label>Location</label>
        <input type='text' required
         value={enteredlocation}
         onChange={locationchangeHandler}
         />
    </div>
  </div>
  <div className="new-expense__actions">
    <button type='submit'>Add Expense</button>
  </div>
</form>
}
export default ExpenseForm;