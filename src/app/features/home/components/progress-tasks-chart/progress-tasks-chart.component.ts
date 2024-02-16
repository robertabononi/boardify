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
      this.defineChartSeriesData();
      this.myChart = echarts.init(document.getElementById('progressTasksChart'));
      this.myChart.setOption(this.defineChartOptions());
    }
  }

  defineChartSeriesData(): void {
    this.projectsData.forEach((project, index) => {
      this.chartData.push({
        type: 'bar',
        coordinateSystem: 'polar',
        emphasis: { focus: 'series' },
        showBackground: true,
        name: project.name,
        data: [project.value],
        itemStyle: {
          borderRadius: [100, 100, 100, 100],
          color: project.color,
        },
        stack: String.fromCharCode(65 + index).toLowerCase(),
      });
    });
  }

  defineChartOptions(): any {
    return {
      polar: {
        radius: [30, '150%']
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
        data: this.chartData.map(x => x.name),
      },
      series: this.chartData,
      legend: {
        show: true,
        orient: 'vertical',
        top: 'center',
        left: 0,
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 50,
        textStyle: { color: "#fff" },
        data: this.chartData.map(x => x.name)
      }
    };
  }
}
