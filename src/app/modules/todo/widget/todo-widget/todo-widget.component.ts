import { Component, OnInit } from '@angular/core';
import {TodoState} from "../../store/todo/todo.reducer";
import {Store} from "@ngrx/store";
import {TodoCreateAction} from "../../store/todo/todo.actions";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }
  onCreate(name: string) {
    console.log(name);
    //сообщаем хранилищу через store$ о событии создания тодо с именем name
    this.store$.dispatch(new TodoCreateAction({name: name}))
  }

}
