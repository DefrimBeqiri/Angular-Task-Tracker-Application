import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  getTasks() {
    return this.tasks.asObservable();
  }

  addTask(task: any) {
    const currentTasks = this.tasks.getValue();
    currentTasks.push(task);
    this.tasks.next(currentTasks);
  }

  updateTask(updatedTask: any) {
    const currentTasks = this.tasks.getValue();
    const index = currentTasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      currentTasks[index] = updatedTask;
      this.tasks.next(currentTasks);
    }
  }

  deleteTask(id: number) {
    const currentTasks = this.tasks.getValue();
    const filteredTasks = currentTasks.filter(task => task.id !== id);
    this.tasks.next(filteredTasks);
  }
}
