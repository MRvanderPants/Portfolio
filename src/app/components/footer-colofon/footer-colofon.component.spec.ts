import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColofonComponent } from './footer-colofon.component';

describe('FooterColofonComponent', () => {
  let component: FooterColofonComponent;
  let fixture: ComponentFixture<FooterColofonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterColofonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterColofonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
