import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoviesSearchControllerComponent } from './components/movies-search-controller/movies-search-controller.component';
import { MoviesSearchRoutingModule } from './movies-search-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [MoviesSearchControllerComponent, MoviesListComponent],
  imports: [
    SharedModule,
    MoviesSearchRoutingModule
  ]
})
export class MoviesSearchModule { }
