import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart } from 'node_modules/chart.js';
import { AppState } from 'src/app/app.reducers';
import dataset from 'src/app/shared/models/chart-dataset.model';

@Component({
  selector: 'app-hitoric-rates-chart',
  templateUrl: './hitoric-rates-chart.component.html',
  styleUrls: ['./hitoric-rates-chart.component.sass'],
})
export class HitoricRatesChartComponent implements OnInit {
  public chart;
  public datasets: dataset[];
  public rates: {};
  public loading: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToHistoricRatesStore();
  }

  subscribeToHistoricRatesStore() {
    this.store.select('historicRatesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.historicRates.rates;
      this.loading = ratesResponse.loading;
      console.log('ratesResponse', ratesResponse);
      this.createDatasets();
      this.createChart();
    });
  }

  createDatasets() {
    console.log('crating sets');
    console.log(this.rates);
  }

  createChart() {
    this.chart = new Chart('history-comparison-chart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [11, 9, 13, 3, 8, 3],

            borderColor: ['red'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
