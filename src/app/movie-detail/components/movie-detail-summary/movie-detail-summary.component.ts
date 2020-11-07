import { Component, OnInit, Input } from '@angular/core';
import { IPopularMovieResponse } from 'src/app/movies-search/interfaces/popular-movie-response.interface';

@Component({
  selector: 'app-movie-detail-summary',
  templateUrl: './movie-detail-summary.component.html',
  styleUrls: ['./movie-detail-summary.component.scss']
})
export class MovieDetailSummaryComponent implements OnInit {

  @Input() movieData: IPopularMovieResponse;
  detailsShown = [
    {
      displayText: 'Release Date',
      propName: 'release_date',
      getValue(item: IPopularMovieResponse) {
        return item.release_date ? item.release_date : '---'
      }
    },
    {
      displayText: 'Vote Average',
      propName: 'vote_average',
      getValue(item: IPopularMovieResponse) {
        return item.vote_average ? item.vote_average : '---'
      }
    },
    {
      displayText: 'Vote Count',
      propName: 'vote_count',
      getValue(item: IPopularMovieResponse) {
        return item.vote_count ? item.vote_count : '---'
      }
    },
    {
      displayText: 'Adult',
      propName: 'adult',
      getValue(item: IPopularMovieResponse) {
        return item.adult ? 'For Adult' : 'For Everyone';
      }
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
