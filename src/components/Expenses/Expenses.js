import React from 'react'
import Card from '../UI/Card';
import Expensesfilter from './Expensesfilter';
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (Selectedyear)=>{
        setFilteredYear(Selectedyear);
      }
    return(<div>
        <Card className='expenses'>
        <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}></Expensesfilter>
            {props.items.map((expense)=>(
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