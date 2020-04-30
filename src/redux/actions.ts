import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionsTypes";

type TTodoActions = TAddTodo | TDeleteTodo | TToggleTodo; 

export interface TAddTodo {
  type: typeof ADD_TODO;
  payload: {
    id: string;
    content: string;
    completed: boolean;
  };
}

export interface TDeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    id: string;
  };
}

export interface TToggleTodo {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
  };
}

export const addTodo = ( content: string, idTodo: string ): TTodoActions => ({
  type: ADD_TODO,
  payload: {
    id: idTodo,
    content,
    completed: false
  }
});

export const deleteTodo = ( id: string ): TTodoActions => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const toggleTodo = ( id: string ): TTodoActions => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});