import { Component, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import {faBook, faPlay, faPause, faStop} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faBook, faPlay, faPause, faStop);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
