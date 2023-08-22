import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeScreenComponent } from './recipe-screen.component';

describe('RecipeScreenComponent', () => {
  let component: RecipeScreenComponent;
  let fixture: ComponentFixture<RecipeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
