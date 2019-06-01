import { Action, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export interface IState {
  lastUpdated: number;
  todos: string[];
}

export type Action =
  | {
      type: "add todo";
      todo: string;
    }
  | {
      type: "delete todo";
      index: number;
    };

export function makeStore() {
  return createStore(
    reducer,
    {
      lastUpdated: 0,
      todos: [
        "Make the fire!",
        "Fix the breakfast!",
        "Wash the dishes!",
        "Do the mopping!"
      ]
    },
    composeWithDevTools(applyMiddleware())
  );
}
