import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProjectListComponent } from './side-project-list.component';

describe('SideProjectListComponent', () => {
  let component: SideProjectListComponent;
  let fixture: ComponentFixture<SideProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
