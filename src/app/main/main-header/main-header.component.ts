import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  mainNavItems = [
    {
      title: 'Home',
      url: ''
    },
    {
      title: 'Movies',
      url: ''
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

  constructor() { }

  ngOnInit(): void {
  }

}
