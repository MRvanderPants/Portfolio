import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesScreenComponent } from './recipes-screen.component';

describe('RecipesScreenComponent', () => {
  let component: RecipesScreenComponent;
  let fixture: ComponentFixture<RecipesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
