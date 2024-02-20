import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import { TaskBoardService } from '../../services/task-board/task-board.service';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss'
})
export class TaskBoardComponent {
  public taskBoardService = inject(TaskBoardService);
  public columnsLength: number = 0;

  ngOnInit(): void {
    this.taskBoardService.separateTasksByStatus();

    if (this.taskBoardService.taskListByStatus) {
      this.columnsLength = this.taskBoardService.taskListByStatus.length;
    }
  }
}
