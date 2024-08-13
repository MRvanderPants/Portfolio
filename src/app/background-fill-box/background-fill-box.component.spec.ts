import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFillBoxComponent } from './background-fill-box.component';

describe('BackgroundFillBoxComponent', () => {
  let component: BackgroundFillBoxComponent;
  let fixture: ComponentFixture<BackgroundFillBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundFillBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundFillBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
