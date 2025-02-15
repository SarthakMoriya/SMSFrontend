import { Component, input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
  selector: 'app-stackbar-chart',
  imports: [NgApexchartsModule],
  templateUrl: './stackbar-chart.component.html',
  styleUrl: './stackbar-chart.component.scss',
})
export class StackbarChartComponent implements OnInit {
  dataPoints = input('dataPoints');
  axis = input('axis');
  chartId = input('chartId');

  options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Percentage',
        data: [68, 56, 78, 67],
      },
    ],
    xaxis: {
      categories: ['Sem1', 'Sem2', 'Sem2', 'Sem3'],
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
    setTimeout(()=>{
      this.options = this.generateChartOptions(this.dataPoints(), this.axis());
    var chart = new ApexCharts(
      document.querySelector(`#${this.chartId()}`),
      this.options
    );
    chart.render();
    },1000)
  }
  ngAfterViewInit() {
    // console.log(this.chartId, this.dataPoints, this.axis);
  }

  generateChartOptions(data: any, axis: any) {
    return {
      chart: {
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      series: [
        {
          name: 'Percentage',
          data,
        },
      ],
      xaxis: {
        categories: axis,
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
  }
}
