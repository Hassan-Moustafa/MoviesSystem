import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { IMovieCardData } from 'src/app/shared/interfaces/movie-card-data.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() moviesData: IMovieCardData[] = [];
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalRecords: number;
  @Output() pageChanged = new EventEmitter<number>();

  paginationMaxSize = 5;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 450) {
      this.paginationMaxSize = 2;
    } else {
      this.paginationMaxSize = 5;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(pageNumber: number) {
    this.pageChanged.emit(pageNumber);
  }

}
