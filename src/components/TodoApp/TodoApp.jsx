import React, { useState } from 'react';

import VisibilityFilters from '../VisibilityFilters/VisibilityFilters.jsx';
import { ALL } from '../../redux/actionsTypes';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo.jsx';


const TodoApp = () => {
  const [ filter, setFilter ] = useState(ALL);

  return (
    <div className='todo-app'>
      <h1 className='todo-app__title'>Todo List</h1>
      <AddTodo />
      <TodoList filter={ filter } />
      <VisibilityFilters setFilter={ setFilter } filter={filter} />
    </div>
  )
};

export default TodoApp;