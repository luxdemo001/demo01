import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'Lux';
  url = 'https://www.google.com';
  constructor() { }

  ngOnInit(): void {
  }

  sayHi(a: string) {
    console.log(this.name);
    alert(this.name + a);
  }
}
