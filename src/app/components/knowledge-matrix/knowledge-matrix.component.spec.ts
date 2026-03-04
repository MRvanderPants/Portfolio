import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMatrixComponent } from './knowledge-matrix.component';

describe('KnowledgeMatrixComponent', () => {
  let component: KnowledgeMatrixComponent;
  let fixture: ComponentFixture<KnowledgeMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [KnowledgeMatrixComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
