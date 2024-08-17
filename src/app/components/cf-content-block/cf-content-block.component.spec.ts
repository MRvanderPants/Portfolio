import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfContentBlockComponent } from './cf-content-block.component';

describe('CfContentBlockComponent', () => {
  let component: CfContentBlockComponent;
  let fixture: ComponentFixture<CfContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfContentBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfContentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
