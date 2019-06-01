import { AddTodoType, DeleteTodoType } from "./types";
import { ADD_TODO, DELETE_TODO } from "./constants";

export const addTodo = (todo: string): AddTodoType => ({
  type: ADD_TODO as typeof ADD_TODO,
  todo
});

export const deleteTodo = (index: number): DeleteTodoType => ({
  type: DELETE_TODO as typeof DELETE_TODO,
  index
});
