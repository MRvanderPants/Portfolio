import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineResumeItemComponent } from './timeline-resume-item.component';

describe('TimelineResumeItemComponent', () => {
  let component: TimelineResumeItemComponent;
  let fixture: ComponentFixture<TimelineResumeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineResumeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineResumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
