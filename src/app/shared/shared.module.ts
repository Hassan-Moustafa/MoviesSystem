import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
      MovieCardComponent, 
      SpinnerComponent, 
      SearchBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MatSnackBarModule,
    MovieCardComponent,
    SpinnerComponent,
    SearchBarComponent
  ]  
})
export class SharedModule { }
