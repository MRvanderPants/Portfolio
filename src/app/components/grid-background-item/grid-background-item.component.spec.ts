import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBackgroundItemComponent } from './grid-background-item.component';

describe('GridBackgroundItemComponent', () => {
  let component: GridBackgroundItemComponent;
  let fixture: ComponentFixture<GridBackgroundItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBackgroundItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBackgroundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
