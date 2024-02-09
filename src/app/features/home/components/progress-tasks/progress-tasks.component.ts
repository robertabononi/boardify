import { Component } from '@angular/core';
import { ProgressTasksChartComponent } from '../progress-tasks-chart/progress-tasks-chart.component';

@Component({
  selector: 'app-progress-tasks',
  standalone: true,
  imports: [
    ProgressTasksChartComponent,
  ],
  templateUrl: './progress-tasks.component.html',
  styleUrl: './progress-tasks.component.scss'
})
export class ProgressTasksComponent {

}
