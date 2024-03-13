import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask: EventEmitter<any> = new EventEmitter();

  taskText: string = '';
  taskCategory: string = '';
  taskDueDate: string = '';

  constructor(private taskService: TaskService) { }

  onSubmit() {
    const newTask = {
      id: Date.now(),
      text: this.taskText,
      category: this.taskCategory,
      dueDate: this.taskDueDate,
      completed: false
    };
    this.taskService.addTask(newTask);
    this.addTask.emit(newTask);
    this.resetForm();
  }

  resetForm() {
    this.taskText = '';
    this.taskCategory = '';
    this.taskDueDate = '';
  }
}
