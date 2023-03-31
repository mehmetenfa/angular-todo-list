import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Task[] = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: false },
    { title: 'Task 3', completed: false },
  ];
  newTaskTitle = '';

  addTask(): void {
    if (this.newTaskTitle) {
      const newTask: Task = { title: this.newTaskTitle, completed: false };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: Task): void {
    const newTitle = prompt('Yeni başlık girin:', task.title);
    if (newTitle !== null && newTitle !== '') {
      task.title = newTitle;
    }
  }


  updateTask(task: Task): void {
    task.completed = !task.completed;
  }
}
