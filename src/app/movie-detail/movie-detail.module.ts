import { NgModule } from '@angular/core';
import { MovieDetailControllerComponent } from './components/movie-detail-controller/movie-detail-controller.component';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';



@NgModule({
  declarations: [MovieDetailControllerComponent],
  imports: [
    SharedModule,
    MovieDetailRoutingModule
  ]
})
export class MovieDetailModule { }
