import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../../core/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects!: Project[];
  projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor(
    private restService: RestService,
  ) { }

  getAllProjects(): void {
    this.restService.get(environment.projects).subscribe({
      next: response => this.handleResponse(response),
    });
  }

  handleResponse(response: Project[]): void {
    this.projects = response;
    this.projectsSubject.next(response);
  }
}
