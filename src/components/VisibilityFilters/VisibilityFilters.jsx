import React from 'react';
import { ALL, COMPLETED, INCOMPLETED } from '../../redux/actionsTypes';
import './styles.css';

const VisibilityFilters = (props) => {

  const { setFilter, filter } = props;
  const activeClass = 'filters__button--active'

  return (
    <div className='visibility-filters'> 
      <button
        className={`visibility-filters__button ${filter === ALL ? activeClass : ''}`}
        onClick={ () => setFilter(ALL) }
      >
        all
      </button>
      <button
        className={`visibility-filters__button ${filter === COMPLETED ? activeClass : ''}`}
        onClick={ () => setFilter(COMPLETED) }
      >
        completed
      </button>
      <button
        className={`visibility-filters__button ${filter === INCOMPLETED ? activeClass : ''}`}
        onClick={ () => setFilter(INCOMPLETED) }
      >
        incompleted
      </button>
    </div>
  )
};


export default VisibilityFilters;
