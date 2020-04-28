import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actionsTypes";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
        return [ ...state, action.payload ];
      }

    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(todo => todo.id !== id);
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    }

    default:
      return state;
  }
}

export default todos;