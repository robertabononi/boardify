import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTasksChartComponent } from './progress-tasks-chart.component';

describe('ProgressTasksChartComponent', () => {
  let component: ProgressTasksChartComponent;
  let fixture: ComponentFixture<ProgressTasksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressTasksChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressTasksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
