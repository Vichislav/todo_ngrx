import { Component, OnInit } from '@angular/core';
import {TodoState} from "../../store/todo/todo.reducer";
import {select, Store} from "@ngrx/store";
import {TodoCreateAction} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {Todo} from "../../model/todo";
import {CommonModule} from "@angular/common"; //добавил потому что ругалась на async в html

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  // из хранилища возваращем Observable, который внутри себя хранит массив Todo
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }
  onCreate(name: string) {
    console.log(name);
    //сообщаем хранилищу через store$ о событии создания тодо с именем name
    this.store$.dispatch(new TodoCreateAction({name: name}))
  }

}
