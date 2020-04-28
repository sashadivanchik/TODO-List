import React from 'react';
import Todo from '../Todo/Todo';
import { connect } from 'react-redux';
import { COMPLETED, INCOMPLETED, ALL } from '../../redux/actionsTypes';
import './styles.css';

const TodoList = (props) => {

  const { todos } = props;

  const renderTodos = () => {
    if (!todos.length) {
      return 'No todos, yay!';
    }

    return todos.map((todo) => <Todo todo={todo} key={todo.id} />)
  };

  return (
    <ul className='todo-list'>
      { renderTodos() }
    </ul>
  )
};

const mapStateToProps = (state, ownProps) => {
  const renderByFilterType = () => {
    const { filter } = ownProps;
    const { todos } = state;
    switch(filter) {
      case COMPLETED: {
        return todos.filter(todo => todo.completed === true);
      }

      case INCOMPLETED: {
        return todos.filter(todo => todo.completed === false);
      }

      case ALL: {
        return todos;
      }
      
      default: console.log('error')
    } 
  }
  
  return {
    todos: renderByFilterType()
  }
};

export default connect(mapStateToProps)(TodoList);