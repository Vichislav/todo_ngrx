import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss']
})
export class TodoCreateFormUiComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  onCreate(event) {
    console.log(this.name);
  }

}
