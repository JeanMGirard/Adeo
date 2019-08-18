import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'Accueil', path: '/'  },
    { label: 'PME',     path: 'pme' },
    { label: 'Particuliers', path: 'particuliers' }
  ];
  constructor() { }

  ngOnInit() {
    $(window).scroll((ev) => {
      const scrolled = $(window).scrollTop();
      if (scrolled  > 10) {
          $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  }

}
