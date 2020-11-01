import { Component, OnInit, Input } from '@angular/core';
import { IMovieCredits, ICreditsCast } from 'src/app/shared/interfaces/movie-credits.interface';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-movie-cast-list',
  templateUrl: './movie-cast-list.component.html',
  styleUrls: ['./movie-cast-list.component.scss']
})
export class MovieCastListComponent implements OnInit {

  @Input() movieCastList: ICreditsCast[];
  filteredMovieCastList: ICreditsCast[] = [];
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.filterCastList(10);
  }

  /**
   * 
   * @param limit
   * Get first Nth elements in the cast array and render them.
   */
  filterCastList(limit: number) {
    this.movieCastList.slice(0, limit).map((item, i) => {
      this.filteredMovieCastList.push(item);
    });
  }

  getProfileImageUrl(profilePath: string) {
    return profilePath ? 
           this.configService.moviePosterBaseUrl + profilePath : 
           '../../../../assets/images/person.png';
  }

}
