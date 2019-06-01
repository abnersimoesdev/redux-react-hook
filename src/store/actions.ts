import {
  AddTodoAction,
  DeleteTodoAction,
  DELETE_TODO,
  ADD_TODO
} from "./types";

export const addTodo = (todo: string): AddTodoAction => ({
  type: ADD_TODO as typeof ADD_TODO,
  todo
});

export const deleteTodo = (index: number): DeleteTodoAction => ({
  type: DELETE_TODO as typeof DELETE_TODO,
  index
});
