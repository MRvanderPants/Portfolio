import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineScreenComponent } from './discipline-screen.component';

describe('DisciplineScreenComponent', () => {
  let component: DisciplineScreenComponent;
  let fixture: ComponentFixture<DisciplineScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
