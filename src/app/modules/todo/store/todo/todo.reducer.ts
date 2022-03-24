import {state} from "@angular/animations";
import {Todo} from "../../model/todo";
import {TodoActions, todoActionsType} from "./todo.actions";

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
export const todoReducer = (state = initialState, action: TodoActions) => {
  //делаем проверку type
  switch (action.type) {
    //в случае если type 'равен' create
    case todoActionsType.create:
      return {
        //мы должны вернуть новый state скопированный из оригинального
        ...state,
        idIncrement: state.idIncrement + 1, //увеличили id
        //создаем объект тодо
        todoList: [
          ...state.todoList, // копируем старый массив кладем его в новый и добавалем туда новый элемент
          {
            id: state.idIncrement,  // поля нового элемента
            name: action.payload.name, // поля нового элемента
            completed: false // поля нового элемента
          }
        ]
      };
    default:
      return state;
  }

};
