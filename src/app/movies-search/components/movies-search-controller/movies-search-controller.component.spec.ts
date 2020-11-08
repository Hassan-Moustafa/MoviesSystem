import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchControllerComponent } from './movies-search-controller.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from 'src/app/core/services/movies.service';

describe('MoviesSearchControllerComponent', () => {
  let component: MoviesSearchControllerComponent;
  let fixture: ComponentFixture<MoviesSearchControllerComponent>;
  let titleElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSearchControllerComponent ],
      providers: [HttpClientModule, MoviesService]
    })
    // .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display popular movies title when no "movieName" query param found', () => {
    titleElement = fixture.debugElement.query(By.css('#main-title'));
    console.log(titleElement);
  })
});
