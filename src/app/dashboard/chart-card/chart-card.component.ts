import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
import { PeopleCountService } from 'src/app/services/people-count.service';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css'],
})
export class ChartCardComponent implements OnInit {
  constructor(private count: PeopleCountService) {}

  ngOnInit() {
    this.count.getPeopleCount().subscribe((val) => {
      this.count.counts = val.data[0].attributes.rcounting;
            
      const dataDoughnut = {
        labels: ['Vacant', 'Occupied'],
        datasets: [
          {
            label: 'Canteen Space',
            data: [(150-this.count.counts),(this.count.counts)],
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
            hoverOffset: 4,
          },
        ],
      };
  
      const configDoughnut = {
        type: 'doughnut',
        data: dataDoughnut,
        options: {},
      };
  
      const chartBar = new Chart(
        document.getElementById('chartDoughnut') as HTMLCanvasElement,
        configDoughnut
      );
    });
    
  }
}
