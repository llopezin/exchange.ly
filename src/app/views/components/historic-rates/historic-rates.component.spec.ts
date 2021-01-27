import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricRatesComponent } from './historic-rates.component';

describe('HistoricRatesComponent', () => {
  let component: HistoricRatesComponent;
  let fixture: ComponentFixture<HistoricRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
