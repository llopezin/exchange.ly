import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { AppState } from 'src/app/app.reducers';
import Dataset from 'src/app/shared/models/chart-dataset.model';

@Component({
  selector: 'app-hitoric-rates-chart',
  templateUrl: './hitoric-rates-chart.component.html',
  styleUrls: ['./hitoric-rates-chart.component.scss'],
})
export class HitoricRatesChartComponent implements OnInit {
  public chart;
  public datasets: Dataset[] = [];
  public rates: {};
  public chartReadyData: { dates: string[] };
  public loading: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToHistoricRatesStore();
  }

  subscribeToHistoricRatesStore() {
    this.store.select('historicRatesApp').subscribe((ratesResponse) => {
      if (this.rates == ratesResponse.historicRates.rates) return;
      this.rates = ratesResponse.historicRates.rates;
      this.loading = ratesResponse.loading;
      this.prepareData();
      this.createDataSets();
      this.createChart(this.datasets);
    });
  }

  prepareData() {
    let dataObj = { dates: [] };
    for (let date in this.rates) {
      dataObj.dates.push(date);
      let dateRates = this.rates[date];

      for (let currency in dateRates) {
        dataObj[`${currency}`]
          ? dataObj[`${currency}`].push(dateRates[currency])
          : (dataObj[`${currency}`] = [dateRates[currency]]);
      }
    }

    for (let array in dataObj) {
      if (dataObj[array].length >= 20)
        dataObj[array] = this.sampleData(dataObj[array]);
    }

    this.chartReadyData = dataObj;
  }

  createDataSets() {
    this.datasets = [];
    for (let currency in this.chartReadyData) {
      if (currency != 'dates') {
        const dataset = new Dataset(this.chartReadyData[currency], currency);
        this.datasets.push(dataset);
      }
    }
  }

  sampleData(array) {
    let itemsPerSet = Math.floor(array.length / 10);
    return array.filter((item, i) => i % itemsPerSet === 0);
  }

  createChart(datasets) {
    console.log(datasets);

    this.chart?.destroy();
    this.chart = new Chart('history-comparison-chart', {
      type: 'line',
      data: {
        labels: this.chartReadyData.dates,
        datasets: datasets,
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
