import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionsTypes";
import uuid from 'react-uuid'


export const addTodo = ( content ) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    content,
    completed: false
  }
});

export const deleteTodo = ( id ) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = ( id ) => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});