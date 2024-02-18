import { Injectable } from '@angular/core';

import { ProjectService } from './../project/project.service';
import { Task, TaskByStatus, TaskListByStatus } from '../../../core/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskBoardService {
  public tasksByStatus: TaskByStatus = {};
  public taskListByStatus!: TaskListByStatus[];

  constructor(
    private projectService: ProjectService,
  ) {}

  separateTasksByStatus(): void {
    if (!this.projectService.projects || this.projectService.projects.length === 0) {
      return;
    }
  
    const allTasks: Task[] = this.getAllTasksFromProjects();
  
    this.tasksByStatus = this.groupTasksByStatus(allTasks);
    this.taskListByStatus = this.createTaskListByStatus(this.tasksByStatus);
  }

  private getAllTasksFromProjects(): Task[] {
    return this.projectService.projects.flatMap(project => {
      project.tasks.forEach(task => {
        task.project = { id: project.id, title: project.title };
      });
      return project.tasks;
    });
  }
  
  private groupTasksByStatus(tasks: Task[]): TaskByStatus {
    return tasks.reduce((acc: TaskByStatus, task) => {
      acc[task.status] = acc[task.status] || [];
      acc[task.status].push(task);
      return acc;
    }, {});
  }
  
  private createTaskListByStatus(tasksByStatus: TaskByStatus): { name: string, taskList: Task[] }[] {
    return Object.entries(tasksByStatus).map(([name, taskList]) => ({ name, taskList }));
  }
}
