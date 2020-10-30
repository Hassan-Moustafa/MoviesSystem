import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesSearchControllerComponent } from './components/movies-search-controller/movies-search-controller.component';

const routes: Routes = [
  {
    path: '', component: MoviesSearchControllerComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesSearchRoutingModule { }
