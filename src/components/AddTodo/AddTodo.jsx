import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import uuid from 'uuid/v4';

const AddTodo = ( props ) => {

  const { addTodo } = props;

  const [ input, setTodoContent ] = useState('');

  const handleAddTodo = () => {
    addTodo(input, uuid());
    setTodoContent('');
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => setTodoContent(e.target.value) }
        value={ input }   
      />
      <button
        onClick={ handleAddTodo }
      >
        Add Todo
      </button>
    </div>
  ) 
};

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);

