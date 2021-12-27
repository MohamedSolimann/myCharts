import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-mixed-charts',
  templateUrl: './mixed-charts.component.html',
  styleUrls: ['./mixed-charts.component.css'],
})
export class MixedChartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
    const mixedChart = new Chart('mixedChart', {
      type: 'bar',
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 45, 40, 30],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
          },
        ],
        labels: ['January', 'February', 'March', 'April'],
      },
    });
  }
}
