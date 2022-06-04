// TS
import { Component, OnInit } from '@angular/core';

// very Importang
@Component({
  // selector is the name to use
  selector: 'app-header',
  // where html
  templateUrl: './header.component.html',
  // where css
  styleUrls: ['./header.component.css'],
})

// Set option in here
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
