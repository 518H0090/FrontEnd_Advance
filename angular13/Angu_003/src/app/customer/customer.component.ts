import { Component, OnInit } from '@angular/core';

// Style in here
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: ['.HeaderStyle{color:red;}'],
})
export class CustomerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
