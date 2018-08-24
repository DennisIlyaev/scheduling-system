import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, CalendarNativeDateFormatter, DateFormatterParams } from 'angular-calendar';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';
import localePt from '@angular/common/locales/he';

registerLocaleData(localePt, 'he');

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GreetingComponent,
    CalendarComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{ provide: LOCALE_ID, useValue: 'he' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
