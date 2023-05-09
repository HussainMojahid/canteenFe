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
            backgroundColor: ['rgb(	133,204,113)', 'rgb(253,114,114)'],
            hoverOffset: 4,
            borderWidth: 15,
            borderHeight: "200%",
            height: 100,
            borderColor:"rgb(73, 86, 90)",
            layout: {
           
          }
            // borderRadius:"innerEnd",
            // spacing:50
          },
         
        ],
      };
      const configDoughnut = {
        labels: ['Reserved','Vacant'],
        dataset : [{
          label : 'Status',
          data: dataDoughnut,
          spacing: 10,
          cutout: "50%",
          radius: "100%",
          rotation: 0,
          circumference: 360,
          backgroundColor: [
            'rgb(133,204,113)',
            'rgb(253,114,114)'
          ]

        }],
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
