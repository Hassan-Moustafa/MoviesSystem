import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, 
    children: 
    [
      {
        path: 'home', component: HomeComponent, pathMatch: 'exact'
      },
      {
        path: 'movies-search', loadChildren: () => import('../movies-search/movies-search.module').then((m) => m.MoviesSearchModule)
      }
    ]
  },
  {
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
