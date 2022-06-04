import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate',
  template: ` <p>Inline Style with Template</p> `,
  styles: ['p {font-size:30px;color : red;}'],
})
export class AssociateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
