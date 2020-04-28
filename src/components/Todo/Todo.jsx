import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/actions';

const Todo = (props) => {

  const { todo, toggleTodo, deleteTodo } = props;
  const icon = (code) => String.fromCharCode(code)

  return (
    <li className='todo-item'>
      <div className='todo-item__todo' onClick={ () => toggleTodo(todo.id)}>
        <div className='todo-item__status'>
          {todo && todo.completed ? icon(10004) : icon(8226)}
        </div>
        <p
          className={`todo-item__text ${todo && todo.completed && 'todo-item__text--completed'}`}
        >
          {todo.content}
        </p>    
      </div>     
      <button onClick={ () => deleteTodo(todo.id) } className='todo-item__close'>{icon(10008)}</button>
    </li>
  )
};

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};

export default connect(null, mapDispatchToProps)(Todo);