import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailSummaryComponent } from './movie-detail-summary.component';

describe('MovieDetailSummaryComponent', () => {
  let component: MovieDetailSummaryComponent;
  let fixture: ComponentFixture<MovieDetailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
