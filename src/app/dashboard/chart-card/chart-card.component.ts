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
        // labels: ['Vacant', 'Occupied'],
        datasets: [
          {
            label: 'Canteen Space',
            data: [150 - this.count.counts, this.count.counts],
            backgroundColor: ['rgb(	55,182,18)', 'rgb(226,25,25)'],
            hoverOffset: 10,
            borderWidth:30,
            borderHeight:10,
            borderPadding:10,
            borderColor:"rgb(245,245,245)",
          },
        ],
      };

      const configDoughnut = {
        type: 'doughnut',
        data: dataDoughnut,
        options: {}
      };

      const chartBar = new Chart(
        document.getElementById('chartDoughnut') as HTMLCanvasElement,
        configDoughnut
      );
    });
  }
    
}
