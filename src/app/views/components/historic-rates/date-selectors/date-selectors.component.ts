import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-selectors',
  templateUrl: './date-selectors.component.html',
  styleUrls: ['./date-selectors.component.scss'],
})
export class DateSelectorsComponent implements OnInit {
  public dateObj: Date = new Date();
  public datesForm: FormGroup;
  public startDate: FormControl;
  public endDate: FormControl;
  public dates: { start: string; end: string } = {
    start: '2020-01-01',
    end: this.getToday(),
  };

  @Output() public datesChangeEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildDatesForm();
    this.datesChangeEvent.emit(this.dates);
  }

  buildDatesForm() {
    this.startDate = new FormControl(this.dates.start);
    this.endDate = new FormControl(this.dates.end);
    this.datesForm = this.formBuilder.group({
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  onSubmit() {
    this.setFormValues();
    this.datesChangeEvent.emit(this.dates);
  }

  setFormValues() {
    this.dates.start = this.startDate.value;
    this.dates.end = this.endDate.value;
  }

  getToday() {
    const dateObj = new Date();
    const year = this.dateObj.getFullYear();
    const monthStr = `${this.dateObj.getMonth() + 1}`;
    const month = ('0' + monthStr).slice(-2);
    const date = this.dateObj.getDate();

    return `${year}-${month}-${date}`;
  }
}
