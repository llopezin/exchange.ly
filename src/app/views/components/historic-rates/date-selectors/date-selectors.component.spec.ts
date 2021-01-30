import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectorsComponent } from './date-selectors.component';

describe('DateSelectorsComponent', () => {
  let component: DateSelectorsComponent;
  let fixture: ComponentFixture<DateSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
