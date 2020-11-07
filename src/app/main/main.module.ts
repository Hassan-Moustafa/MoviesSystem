import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [MainComponent, MainHeaderComponent, HomeComponent],
  imports: [
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
