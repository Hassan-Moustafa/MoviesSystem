import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailControllerComponent } from './movie-detail-controller.component';

describe('MovieDetailControllerComponent', () => {
  let component: MovieDetailControllerComponent;
  let fixture: ComponentFixture<MovieDetailControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
