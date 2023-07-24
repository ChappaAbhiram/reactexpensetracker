import React from 'react'
import Card from '../UI/Card';
import Expensesfilter from './Expensesfilter';
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (Selectedyear)=>{
        setFilteredYear(Selectedyear);

      }
      const filteredexpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
      });
    return(<div>
        <Card className='expenses'>
        <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}></Expensesfilter>
            {filteredexpenses.map((expense)=>(
                <ExpenseItem 
                key = {expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.location}
          />
            ))}
            </Card>
            </div>
    )
}

export default Expenses;