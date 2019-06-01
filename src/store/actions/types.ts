import { Action } from "redux";
import { ADD_TODO, DELETE_TODO } from "./constants";

export interface AddTodoType extends Action {
  type: typeof ADD_TODO;
  todo: string;
}

export interface DeleteTodoType extends Action {
  type: typeof DELETE_TODO;
  index: number;
}

export type AppActionType = AddTodoType | DeleteTodoType;
