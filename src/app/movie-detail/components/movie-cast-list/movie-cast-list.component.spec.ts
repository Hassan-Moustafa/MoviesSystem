import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastListComponent } from './movie-cast-list.component';

describe('MovieCastListComponent', () => {
  let component: MovieCastListComponent;
  let fixture: ComponentFixture<MovieCastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCastListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
