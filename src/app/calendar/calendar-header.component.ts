import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mwl-demo-utils-calendar-header',
  template: `
  <div class="row text-center">
  <div class="col-md-4">
    <div class="btn-group" style='margin: 30px 0 0 0;'>
      <div
        class="btn btn-primary"
        mwlCalendarToday
        [(viewDate)]="viewDate"
        (viewDateChange)="viewDateChange.next(viewDate)">
        חודש נוכחי
      </div>
      <div
        class="btn btn-primary"
        mwlCalendarNextView
        [view]="view"
        [(viewDate)]="viewDate"
        (viewDateChange)="viewDateChange.next(viewDate)">
        חודש הבא
      </div>
    </div>
  </div>
  <div class="col-md-4" style='margin: 30px 0 0 0;'>
    <h3 style="color: blue; font-weight: bold">{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>
  </div>
  <div class="col-md-4">
    <div class="btn-group" style='margin: 30px 0 0 0;'>
    </div>
  </div>
</div>
<br>
  `
})
export class CalendarHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'he';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}
