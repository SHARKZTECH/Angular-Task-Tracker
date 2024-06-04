import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks:Task[]=TASKS;

}
