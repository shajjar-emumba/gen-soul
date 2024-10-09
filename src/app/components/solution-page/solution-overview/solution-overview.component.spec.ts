import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionOverviewComponent } from './solution-overview.component';

describe('SolutionOverviewComponent', () => {
  let component: SolutionOverviewComponent;
  let fixture: ComponentFixture<SolutionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
