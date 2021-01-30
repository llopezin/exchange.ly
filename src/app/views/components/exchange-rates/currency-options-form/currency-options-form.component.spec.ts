import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyOptionsFormComponent } from './currency-options-form.component';

describe('CurrencyOptionsFormComponent', () => {
  let component: CurrencyOptionsFormComponent;
  let fixture: ComponentFixture<CurrencyOptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyOptionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyOptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
