import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCardOverviewComponent } from './highlight-card-overview.component';

describe('HighlightCardOverviewComponent', () => {
  let component: HighlightCardOverviewComponent;
  let fixture: ComponentFixture<HighlightCardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightCardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightCardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
