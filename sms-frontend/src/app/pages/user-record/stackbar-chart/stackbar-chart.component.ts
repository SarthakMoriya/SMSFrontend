import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
  selector: 'app-stackbar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './stackbar-chart.component.html',
  styleUrl: './stackbar-chart.component.scss',
})
export class StackbarChartComponent implements OnInit {
  options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    series: [
      {
        name: 'Percentage',
        data: [68,56,78,67],
      },
    ],
    xaxis:{
      categories: ["Sem1", "Sem2", "Sem2", "Sem3"]
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
        color: 'black',
      },
      theme: 'dark',
      y: {
        show: true,
        format: '%',
        formatter: (val: any) => val + '%',
      },
    },
  };
  ngOnInit() {
    var chart = new ApexCharts(document.querySelector('#chart'), this.options);
    chart.render();
  }
}
