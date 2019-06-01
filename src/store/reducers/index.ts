import { AppActionType } from "../actions/types";
import { ADD_TODO, DELETE_TODO } from "../actions/constants";
import { AppStateType } from "./types";

export const initialState: AppStateType = {
  lastUpdated: 0,
  todos: [
    "Make the fire!",
    "Fix the breakfast!",
    "Wash the dishes!",
    "Do the mopping!"
  ]
};

const reducer = (state = initialState, action: AppActionType) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo)
      };
    }

    case DELETE_TODO: {
      const todos = state.todos.slice();
      todos.splice(action.index, 1);
      return { ...state, lastUpdated: Date.now(), todos };
    }

    default:
      return state;
  }
};

export default reducer;
