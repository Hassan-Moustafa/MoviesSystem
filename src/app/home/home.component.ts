import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { Router } from '@angular/router';
import { UiService } from '../core/services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchValue: string = '';
  queryLengthLimit: number = 30;
  constructor(
    private moviesService: MoviesService, 
    private router: Router,
    private uiService: UiService) { }

  ngOnInit(): void {
  }

  search() {
    this.searchValue = this.searchValue.trim();
    if(this.searchValue && this.searchValue.length <= this.queryLengthLimit && this.searchValue !== '') {
      this.router.navigate(['./movies-search'], 
      { 
        queryParams: {
          movieName: this.searchValue
        }
      });
    } else {
      this.uiService.showSnackBar(`Movie name must not be empty and not exceed ${this.queryLengthLimit} character`, 'error');
    }
  }

}
