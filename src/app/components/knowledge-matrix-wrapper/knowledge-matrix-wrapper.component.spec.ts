import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMatrixWrapperComponent } from './knowledge-matrix-wrapper.component';

describe('KnowledgeMatrixWrapperComponent', () => {
  let component: KnowledgeMatrixWrapperComponent;
  let fixture: ComponentFixture<KnowledgeMatrixWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeMatrixWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeMatrixWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
