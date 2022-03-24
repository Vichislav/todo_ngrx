import {Action} from "@ngrx/store";

//для того что бы хранить все типы изолировано
export enum todoActionsType {
 create = '[TODO] create todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  //что бы создать тодо объект нам нужно его имя
  // генерация id отдана на откуп в reducer
  constructor(public payload: {name: string}) {
  }
}
//экспортируем затем добавляем в export const todoReducer =( ... action...)
// в файле todo.reducer.ts
export type TodoActions = TodoCreateAction;
