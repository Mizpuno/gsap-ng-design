import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  iconPackages = [
    { class: 'fa-brands fa-instagram fa-xl' },
    { class: 'fa-brands fa-square-twitter fa-xl' },
    { class: 'fa-brands fa-square-facebook fa-xl' }
  ]

  constructor() {}
}
