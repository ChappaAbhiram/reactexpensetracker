import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
function ExpensesList(props){
    // let expensesContent = <p>No expenses found</p>
    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'>Found No expenses.</h2>
    }
    else if(props.items.length===1){
        return <div>{props.items.map((expense)=>(
            <ExpenseItem 
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
      />
      ))}
      <h2 className='expenses-list__fallback'>Only Single Expense here. Please add more...</h2>
      </div>
    }
    else{
    return <ul className="expenses-list">
         { props.items.map((expense)=>(
          <ExpenseItem 
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
    />
    ))}
    </ul>
    }
}
export default ExpensesList;