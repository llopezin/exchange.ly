import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectorOverlayComponent } from './currency-selector-overlay.component';

describe('CurrencySelectorOverlayComponent', () => {
  let component: CurrencySelectorOverlayComponent;
  let fixture: ComponentFixture<CurrencySelectorOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencySelectorOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySelectorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
