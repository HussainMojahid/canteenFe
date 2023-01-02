import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {

  ngOnInit(){

    const dataDoughnut = {
      labels: ["Vacant", "Occupied"],
      datasets: [
        {
          label: "Canteen Space",
          data: [300, 50,],
          backgroundColor: [
            'rgb(54, 162, 235)',

            'rgb(255, 99, 132)',
          ],
          hoverOffset: 4,
        },
      ],
    };
  
    const configDoughnut = {
      type: "doughnut",
      data: dataDoughnut,
      options: {},
    };
  
    const chartBar = new Chart(
      document.getElementById("chartDoughnut") as HTMLCanvasElement,
      // el.nativeElement.chartDoughnut,
      configDoughnut

    );

  }
    
}
