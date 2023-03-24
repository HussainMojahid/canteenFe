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
  constructor(public count: PeopleCountService) {}
  data:any;
  ngOnInit() {
    this.count.getPeopleCount().subscribe((val) => {
      this.count.counts = val.data[0].attributes.rcounting;     
      const dataDoughnut = {
        // labels: ['Vacant', 'Occupied'],
        datasets: [
          {
            label: 'Canteen Space',
            data: [150 - this.count.counts, this.count.counts],
            backgroundColor: ['rgb(	55,182,18)', 'rgb(226,25,25)'],
            hoverOffset: 40,
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
        options: {},
      };
  
      const chartBar = new Chart(
        document.getElementById('chartDoughnut') as HTMLCanvasElement,
        configDoughnut
      );
    });
    
  }
}
