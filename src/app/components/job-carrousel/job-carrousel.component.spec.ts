import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCarrouselComponent } from './job-carrousel.component';

describe('JobCarrouselComponent', () => {
  let component: JobCarrouselComponent;
  let fixture: ComponentFixture<JobCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
