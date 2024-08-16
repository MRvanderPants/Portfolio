import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineProjectsItemComponent } from './timeline-projects-item.component';

describe('TimelineProjectsItemComponent', () => {
  let component: TimelineProjectsItemComponent;
  let fixture: ComponentFixture<TimelineProjectsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineProjectsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineProjectsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
