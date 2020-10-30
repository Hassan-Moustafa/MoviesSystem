import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailControllerComponent } from './components/movie-detail-controller/movie-detail-controller.component';

const routes: Routes = [
  {
    path: '', component: MovieDetailControllerComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
