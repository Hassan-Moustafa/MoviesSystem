import { NgModule } from '@angular/core';
import { MovieDetailControllerComponent } from './components/movie-detail-controller/movie-detail-controller.component';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailSummaryComponent } from './components/movie-detail-summary/movie-detail-summary.component';
import { MovieCastListComponent } from './components/movie-cast-list/movie-cast-list.component';



@NgModule({
  declarations: [MovieDetailControllerComponent, MovieDetailSummaryComponent, MovieCastListComponent],
  imports: [
    SharedModule,
    MovieDetailRoutingModule
  ]
})
export class MovieDetailModule { }
