
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionsTypes";
import { v4 as uuidv4 } from 'uuid';

const idTodo: string = uuidv4();

export type TodoActions = AddTodo | DeleteTodo | ToggleTodo;
type ID = string; 

type AddType = 'ADD_TODO'
type DeleteType = 'DELETE_TODO';
type ToggleType = 'TOGGLE_TODO';

export type AddTodo = {
  type: AddType;
  payload: {
    id: ID;
    content: string;
    completed: boolean;
  };
}

export type DeleteTodo = {
  type: DeleteType;
  payload: {
    id: ID;
  };
}

export type ToggleTodo = {
  type: ToggleType;
  payload: {
    id: ID;
  };
}

export const addTodo = ( content: string ): TodoActions => ({
  type: ADD_TODO,
  payload: {
    id: idTodo,
    content,
    completed: false
  }
});

export const deleteTodo = ( id: ID ): TodoActions => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = ( id: ID ): TodoActions => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});