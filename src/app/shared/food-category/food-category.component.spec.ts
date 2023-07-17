import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoryComponent } from './food-category.component';

describe('FoodCategoryComponent', () => {
  let component: FoodCategoryComponent;
  let fixture: ComponentFixture<FoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
