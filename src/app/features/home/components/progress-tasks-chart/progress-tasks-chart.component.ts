import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-progress-tasks-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective,
  ],
  templateUrl: './progress-tasks-chart.component.html',
  styleUrl: './progress-tasks-chart.component.scss'
})
export class ProgressTasksChartComponent implements OnInit {
  myChart: any;
  chartData: any[] = [];
  projectsData = [
    {
      name: 'Teste 1',
      value: 10,
      color: '#827df4'
    },
    {
      name: 'Teste 2',
      value: 50,
      color: '#e6b0ef'
    }
  ];

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.defineChartData();
      this.myChart = echarts.init(document.getElementById('progressTasksChart'));
      this.myChart.setOption(this.defineChartOptions());
    }
  }

  defineChartData(): void {
    this.projectsData.forEach(project => {
      this.chartData.push({
        name: project.name,
        value: project.value,
        itemStyle: {
          borderRadius: [100, 100, 100, 100],
          color: project.color,
        }
      });
    });
  }

  defineChartOptions(): any {
    return {
      polar: {
        radius: [30, '100%']
      },
      angleAxis: {
        max: 100,
        startAngle: 90,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
      },
      radiusAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      series: {
        type: 'bar',
        coordinateSystem: 'polar',
        showBackground: true,
        data: this.chartData,
      },
    };
  }
}
