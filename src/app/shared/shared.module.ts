import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { MovieCardComponent } from './components/cards-list/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [CardsListComponent, MovieCardComponent, SpinnerComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MovieCardComponent,
    SpinnerComponent
  ]  
})
export class SharedModule { }
