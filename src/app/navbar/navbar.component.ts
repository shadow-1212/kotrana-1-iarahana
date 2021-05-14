import { Component, OnInit } from '@angular/core';
import { faPrayingHands , faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faPrayingHands = faPrayingHands;
  faBars = faBars
  constructor() {
   }

  ngOnInit(): void {
  }

}
