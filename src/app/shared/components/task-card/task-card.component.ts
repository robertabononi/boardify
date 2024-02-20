import { Component, Input } from '@angular/core';
import { Task } from '../../../core/models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: Task;
  completedSubtasks!: number;
  subtaskProgressPercentage!: number;

  ngOnInit(): void {
    this.calculateSubtaskPercentage();
  }

  calculateSubtaskPercentage(): void {
    this.completedSubtasks = this.task.subtasks.filter(substask => substask.done).length
    this.subtaskProgressPercentage = (this.completedSubtasks * 100) / this.task.subtasks.length;
  }

  generateProgressBarBackground(): string {
    return `linear-gradient(to right, #1cb4e5 ${this.subtaskProgressPercentage}%, #3b3f3d ${100 - this.subtaskProgressPercentage}%)`;
  }
}
