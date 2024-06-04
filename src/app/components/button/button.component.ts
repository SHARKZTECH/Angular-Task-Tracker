import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() text:string="";
  @Input() color:string="";

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onClick(){
    alert("Add")
  }

}
