import { Component, OnInit, Input } from '@angular/core';
import { IMovieCardData } from 'src/app/shared/interfaces/movie-card-data.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCardData: IMovieCardData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movieCardData);
  }

}
