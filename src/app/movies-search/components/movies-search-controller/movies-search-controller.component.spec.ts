import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchControllerComponent } from './movies-search-controller.component';

describe('MoviesSearchControllerComponent', () => {
  let component: MoviesSearchControllerComponent;
  let fixture: ComponentFixture<MoviesSearchControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSearchControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
