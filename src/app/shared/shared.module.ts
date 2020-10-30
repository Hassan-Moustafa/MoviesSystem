import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { MovieCardComponent } from './components/cards-list/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CardsListComponent, MovieCardComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    MovieCardComponent,
  ]  
})
export class SharedModule { }
