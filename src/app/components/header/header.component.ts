import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask:boolean=true;
  subscription:Subscription;

  constructor(private uiService:UiService,private router:Router){
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route;
  }


}
