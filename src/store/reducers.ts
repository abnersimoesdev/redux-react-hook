// import { Action } from "./";
// import { AppState } from "./types";

// export default function reducer(
//   state: AppState | null | undefined,
//   action: Action
// ) {
//   if (!state) {
//     return null;
//   }

// switch (action.type) {
//   case "add todo": {
//     return {
//       ...state,
//       lastUpdated: Date.now(),
//       todos: state.todos.concat(action.todo)
//     };
//   }

//   case "delete todo": {
//     const todos = state.todos.slice();
//     todos.splice(action.index, 1);
//     return { ...state, lastUpdated: Date.now(), todos };
//   }

//   default:
//     return state;
// }
// }

// import produce from 'immer';
import { AppState, AppAction, ADD_TODO, DELETE_TODO } from "./types";

export const initialState: AppState = {
  lastUpdated: 0,
  todos: [
    "Make the fire!",
    "Fix the breakfast!",
    "Wash the dishes!",
    "Do the mopping!"
  ]
};

const reducer = (state = initialState, action: AppAction) => {
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
  // switch (action.type) {
  //   case "loadUsersRequest":
  //     return produce(state, draft => {
  //       draft.loading.users = true;
  //     });
  //   case "loadUsersSuccess":
  //     return produce(state, draft => {
  //       draft.loading.users = false;
  //       draft.users = action.users;
  //     });
  //   case "loadUsersError":
  //     return produce(state, draft => {
  //       draft.loading.users = false;
  //     });
  // }
};

export default reducer;
