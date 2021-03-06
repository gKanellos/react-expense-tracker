import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Internet',
    amount: 72.99,
    date: new Date(2019, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
 /* ALTERNATIVE THIS IS THE CODE THAT WOULD NEED TO BE USED IF DIDN'T IMPORT REACT FROM react
  return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses {items: expenses,})
    ); */

    

  return (
    <div>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  ); 
}

export default App;
