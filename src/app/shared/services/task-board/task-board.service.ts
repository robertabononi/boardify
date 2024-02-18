import { Injectable } from '@angular/core';

import { ProjectService } from './../project/project.service';
import { Task } from '../../../core/models/task';
import { TaskStatusEnum } from '../../enums/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskBoardService {
  public tasksByStatus: { [status: TaskStatusEnum | string]: Task[] } = {};
  public taskListByStatus!: { name: TaskStatusEnum | string, taskList: Task[] }[];

  constructor(
    private projectService: ProjectService,
  ) {}

  separateTasksByStatus(): void {
    if (this.projectService.projects && this.projectService.projects.length > 0) {
      this.projectService.projects.forEach(project => {
        project.tasks.forEach(task => {
          if (!this.tasksByStatus[task.status]) {
            this.tasksByStatus[task.status] = [];
          }
          this.tasksByStatus[task.status].push(task);
        });
      });

      this.taskListByStatus = Object.keys(this.tasksByStatus).map(key => ({
        name: key,
        taskList: this.tasksByStatus[key]
      }));
    }
  }
  
}
