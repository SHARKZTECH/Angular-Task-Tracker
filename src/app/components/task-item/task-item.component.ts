import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task:Task={text:"",day:"",reminder:false};
  @Output() onDeleteTask:EventEmitter<any>=new EventEmitter();
  @Output() OnToggleReminder:EventEmitter<Task>=new EventEmitter();
  faTimes=faTimes;

  onClick(id:any){
    this.onDeleteTask.emit(id);
  }
  onToggle(task:Task){
    this.OnToggleReminder.emit(task);
  }

}
