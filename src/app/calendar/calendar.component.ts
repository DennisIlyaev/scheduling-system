import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent implements OnInit {
  hours = ['7:00 - 7:30', '7:30 - 8:00', '8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30', '9:30 - 10:00',
  '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00',
  '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00',
  '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00',
  '19:00 - 19:30', '19:30 - 20:00'
];
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
  ];

  locale = 'he';

  clickedDate: Date;

  available = true;

  availablityText = '(פנוי)';
  occupiedText = '(תפוס)';


  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  constructor() {
  }

  ngOnInit() {

  }

  pickDate(event) {
    if (event.day.isPast) {
      event.preventDefault();
    } else {
      this.clickedDate = event.day.date.getDate();
      // console.log(event.day.date);
    }
  }

  test(item) {
    // console.log(item.path[0].classList.remove('available'));

    // item.path[0].classList.replace('available', 'occupied'); Setting

    // console.log(item.path[0].classList.contains('available'));
    // console.log(item.path[0].innerHTML.indexOf('תפוס') !== -1);

    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:no-unused-expression
    // console.log(item.path[0].innerHTML.split(' ')[4].indexOf('פנוי') !== -1);



    item.path[0].innerHTML.indexOf('פנוי') !== -1 ? (item.path[0].classList
      // tslint:disable-next-line:no-unused-expression
      .replace('available', 'occupied'), this.availablityText = '(תפוס)') : this.availablityText = '(פנוי)';
  }




}
