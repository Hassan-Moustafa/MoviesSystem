import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  mainNavItems = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Popular Movies',
      url: '/movies-search'
    },
    {
      title: 'Celebrities List',
      url: ''
    },
    {
      title: 'Top Movies',
      url: ''
    },
    {
      title: 'News',
      url: ''
    }
  ];

  isMenuOpened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  goToRoute(url: string) {
    this.isMenuOpened = false;
    this.router.navigate([url]);
  }

}
