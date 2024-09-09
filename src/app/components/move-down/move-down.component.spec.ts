import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDownComponent } from './move-down.component';

describe('MoveDownComponent', () => {
  let component: MoveDownComponent;
  let fixture: ComponentFixture<MoveDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
