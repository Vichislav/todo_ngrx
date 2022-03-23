import {state} from "@angular/animations";
import {Todo} from "../model/todo";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

//создаем изначальное состояние и отправляем в const todoReducer = ( state ...
const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
};

// @ts-ignore ругался на action
export const todoReducer = (state = initialState, action) => {
  return state;
};
