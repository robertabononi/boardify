import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectService } from '../../../../shared/services/project/project.service';
import { Project } from '../../../../core/models/project';

@Component({
  selector: 'app-project-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-statistics.component.html',
  styleUrl: './project-statistics.component.scss'
})
export class ProjectStatisticsComponent {
  public projects: Project[] = [];
  public projectStatistics!: any[];

  private millisecondsPerDay!: number;
  private currentDate!: Date;
  private sevenDaysAgoDate!: Date;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.projectService.projects$.subscribe({
      next: response => {
        this.projects = response;

        this.defineCurrentDateAndSevenDaysAgoDate();
        this.defineStatisticsData();
      }
    });
  }

  public defineCurrentDateAndSevenDaysAgoDate(): void {
    this.millisecondsPerDay = 1000 * 60 * 60 * 24;
    this.currentDate = new Date();
    this.sevenDaysAgoDate = new Date(this.currentDate.getTime() - 7 * this.millisecondsPerDay);
  }

  public defineStatisticsData(): void {
    this.projectStatistics = [
      {
        label: 'Projects',
        total: this.countProjectsLength(),
        subtitle: 'In total',
        icon: '',
        color: '#1cb4e5',
      },
      {
        label: 'Done',
        total: this.countLastWeekFinishedProjectsLength(),
        subtitle: 'In the last 7 days',
        icon: '',
        color: '#827df4',
      },
      {
        label: 'Updated',
        total: this.countLastWeekUpdatedProjectsLength(),
        subtitle: 'In the last 7 days',
        icon: '',
        color: '#86d7b9',
      },
      {
        label: 'New',
        total: this.countLastWeekCreatedProjectsLength(),
        subtitle: 'In the last 7 days',
        icon: '',
        color: '#e6b0ef',
      }
    ];
  }

  private countProjectsLength(): number {
    if (this.projects && this.projects.length > 0) {
      return this.projectService.projects.length;
    } else {
      return 0;
    }
  }

  private countLastWeekCreatedProjectsLength(): number {
    const lastWeekCreatedProjects = this.projects.filter(project => {
        const projectCreateDate = new Date(project.createdDate);
        return projectCreateDate >= this.sevenDaysAgoDate && projectCreateDate <= this.currentDate;
    });

    return lastWeekCreatedProjects.length;
  }

  private countLastWeekUpdatedProjectsLength(): number {
    const lastWeekUpdatedProjects = this.projects.filter(project => {
      const projectUpdateDate = new Date(project.updateDate);
      return projectUpdateDate >= this.sevenDaysAgoDate && projectUpdateDate <= this.currentDate;
    });

    return lastWeekUpdatedProjects.length;
  }

  private countLastWeekFinishedProjectsLength(): number {
    const lastWeekFinishedProjects = this.projects.filter(project => {
      if (project.endDate !== null) {
        const projectFinishDate = new Date(project.endDate);
        return projectFinishDate >= this.sevenDaysAgoDate && projectFinishDate <= this.currentDate;
      }
      return false;
    });

    return lastWeekFinishedProjects.length;
  }
}
