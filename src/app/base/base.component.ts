import { Component } from '@angular/core';
import { ActiveTasksComponent } from '../active-tasks/active-tasks.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [ ActiveTasksComponent ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

}
