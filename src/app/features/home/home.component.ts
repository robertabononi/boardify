import { Component, inject } from '@angular/core';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks.component';
import { TaskBoardComponent } from '../../shared/components/task-board/task-board.component';
import { ProjectService } from '../../shared/services/project/project.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ActiveTasksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects: Project[] = [];
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    this.projectService.getAllProjects();
    this.projectService.projects$.subscribe({
      next: response => this.processarProjetos(response),
    });
  }

  processarProjetos(projetos: Project[]): void {
    this.projects = projetos;
  }
}
