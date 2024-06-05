import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent,AddTaskComponent],
templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{


  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>
    this.tasks=tasks);
  }

  tasks:Task[]=[];

  deleteTask(id:any){
    this.taskService.deleteTask(id).subscribe(()=>
    this.tasks=this.tasks.filter((t)=>t.id !== id));
  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }

}

