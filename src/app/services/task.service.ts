import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private apiUrl="http://localhost:5000/tasks";

  constructor() { }

  getTasks(): Observable<Task[]>{
    let task=of(TASKS);
    return task;
  }
}
