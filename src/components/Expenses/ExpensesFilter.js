import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const buttonChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        
        <div value={props.selected}>
          <button onClick={buttonChangeHandler} value='2022'>2022</button>
          <button onClick={buttonChangeHandler} value='2021'>2021</button>
          <button onClick={buttonChangeHandler} value='2020'>2020</button>
          <button onClick={buttonChangeHandler} value='2019'>2019</button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
