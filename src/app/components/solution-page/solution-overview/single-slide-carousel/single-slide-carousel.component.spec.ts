import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlideCarouselComponent } from './single-slide-carousel.component';

describe('SingleSlideCarouselComponent', () => {
  let component: SingleSlideCarouselComponent;
  let fixture: ComponentFixture<SingleSlideCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSlideCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSlideCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
