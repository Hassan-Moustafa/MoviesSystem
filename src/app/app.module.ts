import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './core/services/config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterceptorService } from './core/services/interceptor.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const loadConfigurations = (configService: ConfigService) => {
  return () => configService.loadConfig()
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
