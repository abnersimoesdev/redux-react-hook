import { Action } from "redux";

export interface AppState {
  lastUpdated: number;
  todos: string[];
}

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  todo: string;
}

export interface DeleteTodoAction extends Action {
  type: typeof DELETE_TODO;
  index: number;
}

export type AppAction = AddTodoAction | DeleteTodoAction;
