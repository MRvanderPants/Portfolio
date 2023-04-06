import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPanelComponent } from './work-panel.component';

describe('WorkPanelComponent', () => {
  let component: WorkPanelComponent;
  let fixture: ComponentFixture<WorkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
