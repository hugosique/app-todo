import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }
  constructor() { }

  public addItemTaskList(event: string): void {
    this.taskList.push({task: event,checked: false,});
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    this.taskList = [];
  }

  public setLocalStorage(): void {
    if(this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));

      localStorage.setItem("list", JSON.stringify(this.taskList));
    };
  }

}
