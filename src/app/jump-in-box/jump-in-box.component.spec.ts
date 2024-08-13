import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpInBoxComponent } from './jump-in-box.component';

describe('JumpInBoxComponent', () => {
  let component: JumpInBoxComponent;
  let fixture: ComponentFixture<JumpInBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpInBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpInBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
