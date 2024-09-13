import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLintComponent } from './footer-lint.component';

describe('FooterLintComponent', () => {
  let component: FooterLintComponent;
  let fixture: ComponentFixture<FooterLintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
