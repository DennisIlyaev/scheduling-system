import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  paginators: Array<any> = [1, 2, 3];
  activePage = 1;
  firstVisibleIndex = 1;
  lastVisibleIndex = 5;

  tableData = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'John', lastName: 'Doe', username: '@john' },
    { id: 3, firstName: 'Lessie', lastName: 'Moe', username: '@lessie' },
    { id: 4, firstName: 'Otton', lastName: 'Otto', username: '@otton' },
    { id: 5, firstName: 'Krauze', lastName: 'John', username: '@krauze' },
    { id: 6, firstName: 'Lex', lastName: 'Lucky', username: '@lex' },
    { id: 7, firstName: 'Allie', lastName: 'Bill', username: '@allie' },
    { id: 8, firstName: 'Anna', lastName: 'Frost', username: '@anna' },
    { id: 9, firstName: 'Bob', lastName: 'One', username: '@bob' },
    { id: 10, firstName: 'Carl', lastName: 'Johnson', username: '@cj' },
    { id: 11, firstName: 'Mia', lastName: 'Marx', username: '@mia' },
    { id: 12, firstName: 'Cia', lastName: 'Fbi', username: '@cia' },
    { id: 13, firstName: 'John', lastName: 'Doe', username: '@johny' },
    { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 15, firstName: 'Lessie', lastName: 'Moe', username: '@lessie' },
  ];

  ngOnInit() {}


  changePage(event: any) {
    if (event.target.text >= 1 && event.target.text <= 3) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * 5 - 5 + 1;
      this.lastVisibleIndex = this.activePage * 5;
    }
  }

  nextPage(event: any) {
    this.activePage += 1;
    this.firstVisibleIndex = this.activePage * 5 - 5 + 1;
    this.lastVisibleIndex = this.activePage * 5;
  }
  previousPage(event: any) {
    this.activePage -= 1;
    this.firstVisibleIndex = this.activePage * 5 - 5 + 1;
    this.lastVisibleIndex = this.activePage * 5;
  }

  firstPage() {
    this.activePage = 1;
    this.firstVisibleIndex = this.activePage * 5 - 5 + 1;
    this.lastVisibleIndex = this.activePage * 5;
  }

  lastPage() {
    this.activePage = 3;
    this.firstVisibleIndex = this.activePage * 5 - 5 + 1;
    this.lastVisibleIndex = this.activePage * 5;
  }

}
