import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchValue: string = '';
  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['./movies-search'], 
    { 
      queryParams: {
        movieName: this.searchValue
      }
    });
  }

}
