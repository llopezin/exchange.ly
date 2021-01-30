import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoricRatesChartComponent } from './hitoric-rates-chart.component';

describe('HitoricRatesChartComponent', () => {
  let component: HitoricRatesChartComponent;
  let fixture: ComponentFixture<HitoricRatesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitoricRatesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitoricRatesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
